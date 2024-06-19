import {Client} from '../../../../abstract/client';
import {Cookies} from '../../../../utils/type/cookies';
import {Throwable} from '../../../../utils/type/throwable';
import {ProxyVersion, ProxyVersionValue} from './type';

export class ProxyVersionClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);
  }

  async getAll(): Promise<Throwable<ProxyVersion[]>> {
    return this.call<Throwable<ProxyVersion[]>>('GET', null);
  }

  async getByValue(value: ProxyVersionValue): Promise<Throwable<ProxyVersion>> {
    return this.call<Throwable<ProxyVersion>>(
      'GET',
      null,
      this.subPath(`/${value}`)
    );
  }

  async updateCoefficient(
    value: ProxyVersionValue,
    coefficient: number
  ): Promise<Throwable<ProxyVersion>> {
    return this.call<Throwable<ProxyVersion>>(
      'PATCH',
      null,
      this.subPath(`/${value}/${coefficient}`)
    );
  }
}
