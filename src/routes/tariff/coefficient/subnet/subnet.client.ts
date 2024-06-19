import {Client} from '../../../../abstract/client';
import {Cookies} from '../../../../utils/type/cookies';
import {Throwable} from '../../../../utils/type/throwable';
import {Subnet} from './type';
import {CreateSubnetDto} from './dto';

export class SubnetClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);
  }

  async getAll(): Promise<Throwable<Subnet[]>> {
    return this.call<Throwable<Subnet[]>>('GET', null);
  }

  async getByValue(value: string): Promise<Throwable<Subnet>> {
    return this.call<Throwable<Subnet>>('GET', null, this.subPath(`/${value}`));
  }

  async create(dto: CreateSubnetDto): Promise<Throwable<Subnet>> {
    return this.call<Throwable<Subnet>>('POST', JSON.stringify(dto));
  }

  async updateCoefficient(
    value: string,
    coefficient: number
  ): Promise<Throwable<Subnet>> {
    return this.call<Throwable<Subnet>>(
      'PATCH',
      null,
      this.subPath(`/${value}/${coefficient}`)
    );
  }
}
