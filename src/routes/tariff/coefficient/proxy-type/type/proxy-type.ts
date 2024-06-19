import {Coefficient} from '../../type';

export enum ProxyTypeValue {
  MOBILE = 'mobile',
  SERVER = 'server',
}

export type ProxyType = Coefficient<ProxyTypeValue>;
