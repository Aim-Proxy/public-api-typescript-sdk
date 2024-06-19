import {Nullable} from '../../../utils/type/nullable';
import {AuthMethod} from '../type';
import {ProxyFunctionValue} from '../../tariff/coefficient/proxy-function';

export interface UpdateKeyDto {
  name?: string;
  price?: number;
  isActive?: boolean;
  isBlocked?: boolean;
  userId?: string;
  tariffId?: string;
  authMethod?: AuthMethod;
  proxyFunction?: ProxyFunctionValue;
  subnet?: string;
  authorizedIpAddressesLimit?: number;
  tcpConnectsLimit?: number;
  rotatePeriod?: Nullable<number>;
  duration?: number;
}
