import {Client} from '../../../../abstract/client';
import {Cookies} from '../../../../utils/type/cookies';
import {ProxyList} from './type';
import {Throwable} from '../../../../utils/type/throwable';
import {UpdateProxyListDto} from './dto';

export class ProxyListClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);
  }

  async getAll(): Promise<Throwable<ProxyList[]>> {
    return this.call<Throwable<ProxyList>[]>('GET', null);
  }

  async getByTariffId(tariffId: string): Promise<Throwable<ProxyList>> {
    return this.call<Throwable<ProxyList>>(
      'GET',
      null,
      this.subPath(`/${tariffId}`)
    );
  }

  async update(
    tariffId: string,
    dto: UpdateProxyListDto
  ): Promise<Throwable<ProxyList>> {
    return this.call<Throwable<ProxyList>>(
      'PATCH',
      JSON.stringify(dto),
      this.subPath(`/${tariffId}`)
    );
  }
}
