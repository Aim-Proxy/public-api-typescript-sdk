import {Cookies} from "./utils/type/cookies";
import {Client} from "./abstract/client";
import {Cookies} from './utils/type/cookies';
import {Client} from './abstract/client';
import {UserClient} from './routes/user';

export const ClientsPool: Client[] = [];

export class PublicApiClient extends Client {
  constructor(base: string) {
    const cookies: Cookies = {authorization: '', refresh: ''};

    super(base, '', cookies);

    this.user = new UserClient(this.url, '/user', cookies);
    this.tariff = {};
    this.payment = {};
    this.key = {};
    this.calculator = {};
    this.ban = {};
    this.auth = {}
  }

  readonly user: UserClient;
  readonly tariff: object;
  readonly payment: object;
  readonly key: object;
  readonly calculator: object;
  readonly ban: object;
  readonly auth: object;
}
