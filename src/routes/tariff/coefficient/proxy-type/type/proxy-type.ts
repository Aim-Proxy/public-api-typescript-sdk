import { Coefficient } from '../../type';

export enum ProxyTypeValue {
  MOBILE = 'mobile',
  SERVER = 'server',
}

export interface ProxyType extends Coefficient<ProxyTypeValue> {}
