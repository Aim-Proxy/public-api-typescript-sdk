import {Coefficient} from '../../type';

export enum ProxyFunctionValue {
  STATIC = 'static',
  ROTATION = 'rotation',
}

export type ProxyFunction = Coefficient<ProxyFunctionValue>;
