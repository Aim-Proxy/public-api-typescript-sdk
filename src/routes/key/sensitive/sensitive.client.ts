import {Client} from "../../../abstract/client";
import {Cookies} from "../../../utils/type/cookies";
import {AuthorizedIpAddressClient} from "./authorized-ip-address";
import {ProxyListClient} from "./proxy-list";

export class SensitiveClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);

    this.authorizedIpAddress = new AuthorizedIpAddressClient(this.url, '/authorized-address', cookies)
    this.proxyList = new ProxyListClient(this.url, 'proxy-list', cookies)
  }

  authorizedIpAddress: AuthorizedIpAddressClient;
  proxyList: ProxyListClient;
}
