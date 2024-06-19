import {Cookies} from './utils/type/cookies';
import {Client} from './abstract/client';
import {UserClient} from './routes/user';
import {AuthClient} from './routes/auth';
import {BanClient} from "./routes/ban/ban.client";
import {TariffClient} from "./routes/tariff";

export const ClientsPool: Client[] = [];

export class PublicApiClient extends Client {
  constructor(base: string) {
    const cookies: Cookies = {authorization: '', refresh: ''};

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

async function main() {
  const api = new PublicApiClient('http://localhost:8080');

  // await api.auth.signIn({ email: "okolobaxha@yandex.ru" })

  console.log(await api.auth.verify('14545b160cb9'));
  console.log(
    await api.auth.session.closeMy('d3add4c9-f026-45d0-94b3-0618743ece8a')
  );
}

main();
