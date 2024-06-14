import {Throwable} from '../../../../utils/type/throwable';
import {PreferencesMetadata} from './preferences.type';
import {Nullable} from '../../../../utils/type/nullable';
import {Client} from '../../../../abstract/client';
import {Cookies} from '../../../../utils/type/cookies';
import {UpdatePreferencesDto} from "./dto";

export class PreferencesClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);
  }

  async getMy(): Promise<Throwable<PreferencesMetadata>> {
    return this.call<Throwable<PreferencesMetadata>>(
      'GET',
      null,
      this.subPath("/my")
    );
  }

  async getByUserId(
    userId: string
  ): Promise<Throwable<Nullable<PreferencesMetadata>>> {
    return this.call<Throwable<Nullable<PreferencesMetadata>>>(
      'GET',
      null,
      this.subPath(`/${userId}`)
    );
  }

  async updateMy(dto: UpdatePreferencesDto): Promise<Throwable<PreferencesMetadata>> {
    return this.call<Throwable<PreferencesMetadata>>(
      'PATCH',
      JSON.stringify(dto),
      this.subPath("/my")
    );
  }

  async updateByUserId(userId: string, dto: UpdatePreferencesDto): Promise<Throwable<Nullable<PreferencesMetadata>>> {
    return this.call<Throwable<PreferencesMetadata>>(
      'PATCH',
      JSON.stringify(dto),
      this.subPath(`/${userId}`)
    );
  }
}
