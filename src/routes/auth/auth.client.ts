import {Client} from '../../abstract/client';
import {Cookies} from '../../utils/type/cookies';
import {Throwable} from '../../utils/type/throwable';
import {SessionClient} from './session';
import {GoogleAuthClient} from "./3rd-party/google";
import {TelegramAuthClient} from "./3rd-party/telegram";
import {YandexIdAuthClient} from "./3rd-party/yandex-id";
import {SignInDto, SignUpDto} from "./dto";
import {User} from "../user";

export class AuthClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);

    this.session = new SessionClient(this.url, '/session', cookies);
    this.google = new GoogleAuthClient(this.url, '/google', cookies);
    this.telegram = new TelegramAuthClient(this.url, '/telegram', cookies)
    this.yandexId = new YandexIdAuthClient(this.url, '/yandex-id', cookies)
  }

  session: SessionClient;
  google: GoogleAuthClient;
  telegram: TelegramAuthClient;
  yandexId: YandexIdAuthClient;

  async signUp(dto: SignUpDto): Promise<Throwable<undefined>> {
    return this.call('POST', JSON.stringify(dto), this.url + '/sign-up');
  }

  async signIn(dto: SignInDto): Promise<Throwable<undefined>> {
    return this.call('POST', JSON.stringify(dto), this.subPath('/sign-in'));
  }

  async verify(code: string, metadataId?: string): Promise<Throwable<User>> {
    let url = this.subPath(`/verify/${code}`);

    if (metadataId) {
      url += `?metadataId${metadataId}`;
    }

    return this.call('GET', null, url);
  }

  async logout(): Promise<Throwable<undefined>> {
    return this.call('POST', null, this.subPath('/logout'))
  }

  async refresh(): Promise<Throwable<User>> {
    return this.call('POST', null, this.subPath('/refresh'))
  }
}
