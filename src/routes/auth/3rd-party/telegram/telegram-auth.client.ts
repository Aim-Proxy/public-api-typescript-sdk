import {Client} from "../../../../abstract/client";
import {Cookies} from "../../../../utils/type/cookies";
import {Throwable} from "../../../../utils/type/throwable";
import {User} from "../../../user";
import {FutureMetadata} from "../../future-metadata";
import {TelegramOauthCallbackDto} from "./dto";

export class TelegramAuthClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);
  }

  async signIn(dto: TelegramOauthCallbackDto): Promise<Throwable<User>> {
    return this.call<Throwable<User>>(
      'POST',
      JSON.stringify(dto),
      this.subPath('/sign-in')
    );
  }

  async signUp(dto: TelegramOauthCallbackDto): Promise<Throwable<FutureMetadata>> {
    return this.call<Throwable<FutureMetadata>>(
      'POST',
      JSON.stringify(dto),
      this.subPath('/sign-up')
    );
  }

  async add(dto: TelegramOauthCallbackDto): Promise<Throwable<void>> {
    return this.call<Throwable<void>>(
      'POST',
      JSON.stringify(dto),
      this.subPath('/add')
    );
  }

  async remove(): Promise<Throwable<void>> {
    return this.call<Throwable<void>>('POST', null, this.subPath('/remove'));
  }
}
