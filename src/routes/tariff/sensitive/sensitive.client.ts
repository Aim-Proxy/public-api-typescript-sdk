import {Client} from '../../../abstract/client';
import {Cookies} from '../../../utils/type/cookies';
import {GenericCoefficientsClient} from './generic-coefficients';
import {ProxyListClient} from './proxy-list';

export class SensitiveClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);

    this.genericCoefficients = new GenericCoefficientsClient(
      this.url,
      '/generic-coefficient',
      cookies
    );
    this.proxyList = new ProxyListClient(this.url, '/proxy-list', cookies);
  }

  genericCoefficients: GenericCoefficientsClient;
  proxyList: ProxyListClient;
}
