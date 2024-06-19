import {Client} from '../../../../abstract/client';
import {Cookies} from '../../../../utils/type/cookies';
import {AuthorizedIpAddress} from './type';
import {Throwable} from '../../../../utils/type/throwable';
import {CreateAuthorizedIpAddressDto} from './dto';

export class AuthorizedIpAddressClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);
  }

  async getByKeyId(keyId: string): Promise<Throwable<AuthorizedIpAddress[]>> {
    return this.call<Throwable<AuthorizedIpAddress[]>>(
      'GET',
      null,
      this.subPath(`/${keyId}`)
    );
  }

  async create(
    keyId: string,
    dto: CreateAuthorizedIpAddressDto
  ): Promise<Throwable<AuthorizedIpAddress>> {
    return this.call<Throwable<AuthorizedIpAddress>>(
      'POST',
      JSON.stringify(dto),
      this.subPath(`/my/${keyId}`)
    );
  }

  async deleteMy(
    keyId: string,
    address: string
  ): Promise<Throwable<AuthorizedIpAddress>> {
    return this.call<Throwable<AuthorizedIpAddress>>(
      'DELETE',
      null,
      this.subPath(`/my/${keyId}/${address}`)
    );
  }

  async delete(
    keyId: string,
    address: string
  ): Promise<Throwable<AuthorizedIpAddress>> {
    return this.call<Throwable<AuthorizedIpAddress>>(
      'DELETE',
      null,
      this.subPath(`/${keyId}/${address}`)
    );
  }
}
