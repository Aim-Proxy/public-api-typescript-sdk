import {Throwable} from '../../../../utils/type/throwable';
import {PreferencesMetadata} from './type/preferences-metadata';
import {Nullable} from '../../../../utils/type/nullable';
import {Client} from '../../../../abstract/client';
import {Cookies} from '../../../../utils/type/cookies';
import {UpdatePreferences} from './dto';

export class PreferencesMetadataClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);
  }

  async getMy(): Promise<Throwable<PreferencesMetadata>> {
    return this.call<Throwable<PreferencesMetadata>>(
      'GET',
      null,
      this.subPath('/my')
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

  async updateMy(
    dto: UpdatePreferences
  ): Promise<Throwable<PreferencesMetadata>> {
    return this.call<Throwable<PreferencesMetadata>>(
      'PATCH',
      JSON.stringify(dto),
      this.subPath('/my')
    );
  }

  async updateByUserId(
    userId: string,
    dto: UpdatePreferences
  ): Promise<Throwable<Nullable<PreferencesMetadata>>> {
    return this.call<Throwable<PreferencesMetadata>>(
      'PATCH',
      JSON.stringify(dto),
      this.subPath(`/${userId}`)
    );
  }
}
