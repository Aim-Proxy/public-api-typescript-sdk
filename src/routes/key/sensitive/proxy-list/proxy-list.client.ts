import {Client} from '../../../../abstract/client';
import {Cookies} from '../../../../utils/type/cookies';
import {Throwable} from '../../../../utils/type/throwable';
import {ProxyList} from './type';
import {UpdateProxyListDto} from './dto';

export class ProxyListClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);
  }

  async getAll(): Promise<Throwable<ProxyList[]>> {
    return this.call<Throwable<ProxyList[]>>('GET', null);
  }

  async getByKeyId(keyId: string): Promise<Throwable<ProxyList>> {
    return this.call<Throwable<ProxyList>>(
      'GET',
      null,
      this.subPath(`/${keyId}`)
    );
  }

  async update(
    keyId: string,
    dto: UpdateProxyListDto
  ): Promise<Throwable<ProxyList>> {
    return this.call<Throwable<ProxyList>>(
      keyId,
      JSON.stringify(dto),
      this.subPath(`/${keyId}`)
    );
  }
}
