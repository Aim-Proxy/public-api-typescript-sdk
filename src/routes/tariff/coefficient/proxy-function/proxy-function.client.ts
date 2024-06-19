import {Client} from '../../../../abstract/client';
import {Cookies} from '../../../../utils/type/cookies';
import {Throwable} from '../../../../utils/type/throwable';
import {ProxyFunction, ProxyFunctionValue} from './type';

export class ProxyFunctionClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);
  }

  async getAll(): Promise<Throwable<ProxyFunction[]>> {
    return this.call<Throwable<ProxyFunction[]>>('GET', null);
  }

  async getByValue(
    value: ProxyFunctionValue
  ): Promise<Throwable<ProxyFunction>> {
    return this.call<Throwable<ProxyFunction>>(
      'GET',
      this.subPath(`/${value}`)
    );
  }

  async updateCoefficient(
    value: ProxyFunctionValue,
    coefficient: number
  ): Promise<Throwable<ProxyFunction>> {
    return this.call<Throwable<ProxyFunction>>(
      'PATCH',
      null,
      this.subPath(`/${value}/${coefficient}`)
    );
  }
}
