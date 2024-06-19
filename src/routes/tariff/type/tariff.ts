import {ProxyVersionValue} from '../coefficient/proxy-version';
import {ProxyTypeValue} from '../coefficient/proxy-type';
import {ProxyFunctionValue} from '../coefficient/proxy-function';
import {Nullable} from '../../../utils/type/nullable';

export interface Tariff {
  id: string;
  name: string;
  description: string;
  location: string;
  coefficientsId: string;
  proxyVersion: ProxyVersionValue;
  proxyType: ProxyTypeValue;
  proxyFunction: ProxyFunctionValue;
  subnet: string;
  authorizedIpAddressesLimit: number;
  tcpConnectsLimit: number;
  rotatePeriod: Nullable<number>;
  updatedAt: Date;
  createdAt: Date;
}
