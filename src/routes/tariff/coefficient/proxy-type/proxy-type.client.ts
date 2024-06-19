import {Client} from "../../../../abstract/client";
import {Cookies} from "../../../../utils/type/cookies";
import {Throwable} from "../../../../utils/type/throwable";
import {ProxyType, ProxyTypeValue} from "./type";

export class ProxyTypeClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);
  }

  async getAll(): Promise<Throwable<ProxyType[]>> {
    return this.call<Throwable<ProxyType[]>>('GET', null);
  }

  async getByValue(
    value: ProxyTypeValue
  ): Promise<Throwable<ProxyType>> {
    return this.call<Throwable<ProxyType>>(
      'GET',
      this.subPath(`/${value}`)
    );
  }

  async updateCoefficient(
    value: ProxyTypeValue,
    coefficient: number
  ): Promise<Throwable<ProxyType>> {
    return this.call<Throwable<ProxyType>>(
      'PATCH',
      null,
      this.subPath(`/${value}/${coefficient}`)
    );
  }
}
