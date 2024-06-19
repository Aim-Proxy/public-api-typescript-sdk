import { Coefficient } from '../../type';

export enum ProxyVersionValue {
  IPV4 = 'IpV4',
  IPV6 = 'IpV6',
}

export interface ProxyVersion extends Coefficient<ProxyVersionValue> {}
