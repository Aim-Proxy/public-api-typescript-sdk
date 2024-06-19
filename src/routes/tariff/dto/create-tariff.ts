import {ProxyFunctionValue} from "../coefficient/proxy-function";
import {ProxyVersionValue} from "../coefficient/proxy-version";
import {ProxyTypeValue} from "../coefficient/proxy-type";

export interface CreateTariffDto {
  name: string;
  description: string;
  location: string;
  coefficientsId: string;
  proxyVersion: ProxyVersionValue;
  proxyType: ProxyTypeValue;
  proxyFunction: ProxyFunctionValue;
  subnet: string;
  proxyList: [string, ...string[]];
  authorizedIpAddressesLimit: number;
  tcpConnectsLimit: number;
  rotatePeriod?: number;
}
