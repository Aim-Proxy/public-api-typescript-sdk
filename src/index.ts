import {Cookies} from "./utils/type/cookies";
import {Client} from "./abstract/client";

export const ClientsPool: Client[] = []

export class PublicApiClient extends Client {
  constructor(base: string, cookies: Cookies) {
    super(base, "", cookies)

    this.user = {}
    this.tariff = {};
    this.payment = {};
    this.key = {};
    this.calculator = {};
    this.ban = {};
    this.auth = {}
  }

  readonly user: object;
  readonly tariff: object;
  readonly payment: object;
  readonly key: object;
  readonly calculator: object;
  readonly ban: object;
  readonly auth: object;
}
