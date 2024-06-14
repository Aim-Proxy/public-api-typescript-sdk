import {PreferencesMetadataClient} from './metadata/preferences';
import {Client} from '../../abstract/client';
import {Cookies} from '../../utils/type/cookies';
import {Throwable} from '../../utils/type/throwable';
import {User} from './type';
import {CreateUserDto, UpdateUserDto} from './dto';

export class UserClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);

    this.preferences = new PreferencesMetadataClient(
      this.url,
      '/preferences',
      cookies
    );
  }

  preferences: PreferencesMetadataClient;

  async getById(id: string): Promise<Throwable<User>> {
    return this.call<Throwable<User>>('GET', null, this.subPath(`/${id}`));
  }

  async getMe(): Promise<Throwable<User>> {
    return this.call<Throwable<User>>('GET', null, this.subPath('/me'));
  }

  async create(dto: CreateUserDto): Promise<Throwable<User>> {
    return this.call<Throwable<User>>('POST', JSON.stringify(dto));
  }

  async updateById(id: string, dto: UpdateUserDto): Promise<Throwable<User>> {
    return this.call<Throwable<User>>(
      'PATCH',
      JSON.stringify(dto),
      this.subPath(`/${id}`)
    );
  }
}
