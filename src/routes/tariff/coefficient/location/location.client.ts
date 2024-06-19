import {Client} from '../../../../abstract/client';
import {Cookies} from '../../../../utils/type/cookies';
import {Throwable} from '../../../../utils/type/throwable';
import {Location} from './type';
import {CreateLocationDto, UpdateLocationDto} from './dto';

export class LocationClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);
  }

  async getAll(): Promise<Throwable<Location[]>> {
    return this.call<Throwable<Location[]>>('GET', null);
  }

  async getById(id: string): Promise<Throwable<Location>> {
    return this.call<Throwable<Location>>('GET', null, this.subPath(`/${id}`));
  }

  async create(dto: CreateLocationDto): Promise<Throwable<Location>> {
    return this.call<Throwable<Location>>('POST', JSON.stringify(dto));
  }

  async update(
    id: string,
    dto: UpdateLocationDto
  ): Promise<Throwable<Location>> {
    return this.call<Throwable<Location>>(
      'PATCH',
      JSON.stringify(dto),
      this.subPath(`/${id}`)
    );
  }
}
