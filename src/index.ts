import {Cookies} from './utils/type/cookies';
import {Client} from './abstract/client';
import {UserClient} from './routes/user';
import {AuthClient} from './routes/auth';
import {BanClient} from "./routes/ban/ban.client";
import {TariffClient} from "./routes/tariff";

export const ClientsPool: Client[] = [];

export class PublicApiClient extends Client {
  constructor(base: string) {
    const cookies: Cookies = {authentication: '', refresh: ''};

    super(base, '', cookies);

    this.user = new UserClient(this.url, '/user', cookies);
    this.tariff = new TariffClient(this.url, '/tariff', cookies);
    this.payment = {};
    this.key = {};
    this.calculator = {};
    this.ban = new BanClient(this.url, '/ban', cookies);
    this.auth = new AuthClient(this.url, '/auth', cookies);
  }

  readonly user: UserClient;
  readonly tariff: TariffClient;
  readonly payment: object;
  readonly key: object;
  readonly calculator: object;
  readonly ban: BanClient;
  readonly auth: AuthClient;
}

