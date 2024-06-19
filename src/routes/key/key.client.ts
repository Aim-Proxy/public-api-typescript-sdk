import {Client} from '../../abstract/client';
import {Cookies} from '../../utils/type/cookies';
import {SensitiveClient} from './sensitive';
import {Throwable} from '../../utils/type/throwable';
import {Key} from './type';
import {CreateKeyDto, UpdateKeyDto} from './dto';

export class KeyClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);

    this.sensitive = new SensitiveClient(this.url, '/sensitive', cookies);
  }

  sensitive: SensitiveClient;

  async getMy(): Promise<Throwable<Key>> {
    return this.call<Throwable<Key>>('GET', null);
  }

  async getById(id: string): Promise<Throwable<Key>> {
    return this.call<Throwable<Key>>('GET', null, this.subPath(`/${id}`));
  }

  async getByUserId(userId: string): Promise<Throwable<Key[]>> {
    return this.call<Throwable<Key[]>>(
      'GET',
      null,
      this.subPath(`/user-id/${userId}`)
    );
  }

  async create(dto: CreateKeyDto): Promise<Throwable<Key>> {
    return this.call<Throwable<Key>>('POST', JSON.stringify(dto));
  }

  async update(id: string, dto: UpdateKeyDto): Promise<Throwable<Key>> {
    return this.call<Throwable<Key>>(
      'PATCH',
      JSON.stringify(dto),
      this.subPath(`/${id}`)
    );
  }
}
