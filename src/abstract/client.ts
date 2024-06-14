import {Response as ApiResponse} from '../utils/type/response';
import {Throwable} from '../utils/type/throwable';
import {ApiError} from '../exception';
import {Cookies} from '../utils/type/cookies';
import {ClientsPool} from '../index';

export class Client {
  constructor(base: string, path: string, cookies: Cookies) {
    this.url = base + path;
    this.cookies = cookies;

    ClientsPool.push(this);
  }

  protected readonly url: string;
  private cookies: Cookies;

  protected async call<T>(
    method: string,
    body: string | null,
    url: string = this.url
  ): Promise<Throwable<T>> {
    const headers = this.getHeaders();

    return fetch(url, {
      method,
      headers,
      body,
    })
      .then(response => {
        if (response.headers.has('Set-Cookies')) {
          const getCookie = (str: string, name: string): string =>
            str
              .substring(str.indexOf(name), str.length - 1)
              .split('=')[1]!
              .split(';')[0]!;

          const header: string = response.headers.get('Set-Cookies')!;

          this.setCookies({
            authorization: getCookie(header, 'Authentication'),
            refresh: getCookie(header, 'Refresh'),
          });
        }

        return response.json();
      })
      .then(data => this.parse<T>(data));
  }

  protected subPath(path: string): string {
    return this.url + path;
  }

  private setCookies(cookies: Cookies): void {
    for (const client of ClientsPool) {
      client.cookies = cookies;
    }
  }

  private parse<T>(response: ApiResponse<T>): Throwable<T> {
    switch (response.statusCode) {
      case 200:
      case 201: {
        return response.data!;
      }
      default: {
        throw new ApiError(response.statusCode, response.message);
      }
    }
  }

  private getHeaders(): Record<string, any> {
    return {
      Cookie: `Authentication=${this.cookies.authorization};Refresh=${this.cookies.refresh}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }
}
