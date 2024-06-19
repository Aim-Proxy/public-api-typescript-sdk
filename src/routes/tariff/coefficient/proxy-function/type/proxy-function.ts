import { Coefficient } from '../../type';

export enum ProxyFunctionValue {
  STATIC = 'static',
  ROTATION = 'rotation',
}

export interface ProxyFunction extends Coefficient<ProxyFunctionValue> {}
