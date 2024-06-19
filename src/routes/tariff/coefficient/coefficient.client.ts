import {Client} from '../../../abstract/client';
import {Cookies} from '../../../utils/type/cookies';
import {LocationClient} from './location';
import {ProxyFunctionClient} from './proxy-function';
import {ProxyTypeClient} from './proxy-type';
import {ProxyVersionClient} from './proxy-version';
import {SubnetClient} from './subnet';

export class CoefficientClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);

    this.location = new LocationClient(this.url, '/location', cookies);
    this.proxyFunction = new ProxyFunctionClient(
      this.url,
      '/proxy-function',
      cookies
    );
    this.proxyType = new ProxyTypeClient(this.url, '/proxy-type', cookies);
    this.proxyVersion = new ProxyVersionClient(
      this.url,
      '/proxy-version',
      cookies
    );
    this.subnet = new SubnetClient(this.url, '/subnet', cookies);
  }

  location: LocationClient;
  proxyFunction: ProxyFunctionClient;
  proxyType: ProxyTypeClient;
  proxyVersion: ProxyVersionClient;
  subnet: SubnetClient;
}
