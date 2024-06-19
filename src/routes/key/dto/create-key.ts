import {Nullable} from '../../../utils/type/nullable';
import {ProxyFunctionValue} from '../../tariff/coefficient/proxy-function';
import {AuthMethod} from '../type';

export interface CreateKeyDto {
  name: string;
  price: number;
  userId: string;
  tariffId: string;
  authMethod: AuthMethod;
  proxyFunction: ProxyFunctionValue;
  subnet: string;
  authorizedIpAddressesLimit: number;
  tcpConnectsLimit: number;
  rotatePeriod: Nullable<number>;
  duration: number;
}
