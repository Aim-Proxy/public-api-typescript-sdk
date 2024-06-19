import {Nullable} from "../../../utils/type/nullable";
import {ProxyVersionValue} from "../coefficient/proxy-version";
import {ProxyTypeValue} from "../coefficient/proxy-type";
import {ProxyFunctionValue} from "../coefficient/proxy-function";

export interface UpdateTariffDto {
  name?: string;
  description?: string;
  location?: string;
  coefficientsId?: string;
  proxyVersion?: ProxyVersionValue;
  proxyType?: ProxyTypeValue;
  proxyFunction?: ProxyFunctionValue;
  subnet?: string;
  proxyList?: [string, ...string[]];
  authorizedIpAddressesLimit?: number;
  tcpConnectsLimit?: number;
  rotatePeriod?: Nullable<number>;
}
