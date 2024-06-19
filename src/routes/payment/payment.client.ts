import {Client} from "../../abstract/client";
import {Cookies} from "../../utils/type/cookies";
import {Throwable} from "../../utils/type/throwable";
import {Payment} from "./type";
import {CreatePaymentDto} from "./dto";

export class PaymentClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);
  }

  async getMy(): Promise<Throwable<Payment[]>> {
    return this.call<Throwable<Payment[]>>('GET', null, this.subPath('/my'))
  }

  async getById(id: string): Promise<Throwable<Payment>> {
    return this.call<Throwable<Payment>>('GET', null, this.subPath(`/${id}`))
  }

  async getByUserId(userId: string): Promise<Throwable<Payment[]>> {
    return this.call<Throwable<Payment[]>>('GET', null, this.subPath(`/user-id/${userId}`))
  }

  async create(dto: CreatePaymentDto): Promise<Throwable<Payment>> {
    return this.call<Throwable<Payment>>('POST', JSON.stringify(dto))
  }
}
