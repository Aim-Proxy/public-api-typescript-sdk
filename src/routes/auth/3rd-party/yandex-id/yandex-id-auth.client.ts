import {Client} from "../../../../abstract/client";
import {Cookies} from "../../../../utils/type/cookies";
import {Throwable} from "../../../../utils/type/throwable";
import {User} from "../../../user";
import {FutureMetadata} from "../../future-metadata";
import {YandexIdAuthCallbackDto} from "./dto";

export class YandexIdAuthClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);
  }

  async getAuthorizationUrl(): Promise<string> {
    return this.call<string>('GET', null, this.subPath('/authorization-url'));
  }

  async signIn(dto: YandexIdAuthCallbackDto): Promise<Throwable<User>> {
    return this.call<Throwable<User>>(
      'POST',
      JSON.stringify(dto),
      this.subPath('/sign-in')
    );
  }

  async signUp(dto: YandexIdAuthCallbackDto): Promise<Throwable<FutureMetadata>> {
    return this.call<Throwable<FutureMetadata>>(
      'POST',
      JSON.stringify(dto),
      this.subPath('/sign-up')
    );
  }

  async add(dto: YandexIdAuthCallbackDto): Promise<Throwable<void>> {
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
