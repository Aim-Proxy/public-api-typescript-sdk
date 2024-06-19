import {ProxyFunctionValue} from '../../tariff/coefficient/proxy-function';
import {AuthorizedIpAddress} from '../sensitive/authorized-ip-address';
import {Nullable} from "../../../utils/type/nullable";

export interface Key {
  id: string;
  name: string;
  price: number;
  isActive: boolean;
  isBlocked: boolean;
  userId: string;
  tariffId: string;
  authMethod: AuthMethod;
  proxyFunction: ProxyFunctionValue;
  subnet: string;
  authorizedIpAddressesLimit: number;
  tcpConnectsLimit: number;
  activeTcpConnectsCount: number;
  rotatePeriod: Nullable<number>;
  expiresAt: Date;
  updatedAt: Date;
  createdAt: Date;
  metadata: {
    proxyList: Nullable<string[]>;
    authorizedIpAddresses: AuthorizedIpAddress[];
  }
}

export enum AuthMethod {
  LOGIN_PASSWORD = 'login_password',
  IP_ADDRESS = 'ip_address',
}
