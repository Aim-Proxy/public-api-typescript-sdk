import {Client} from "../../abstract/client";
import {Cookies} from "../../utils/type/cookies";
import {Throwable} from "../../utils/type/throwable";
import {Ban} from "./type";
import {Nullable} from "../../utils/type/nullable";
import {CreateBanDto, UpdateBanDto} from "./dto";

export class BanClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);
  }

  async getMy(): Promise<Throwable<Ban[]>> {
    return this.call('GET', null, this.subPath('/my'))
  }

  async getCurrent(): Promise<Throwable<Nullable<Ban>>> {
    return this.call('GET', null, this.subPath('/current'))
  }

  async create(dto: CreateBanDto): Promise<Throwable<Ban>> {
    return this.call('POST', JSON.stringify(dto))
  }

  async update(id: string, dto: UpdateBanDto): Promise<Throwable<Ban>> {
    return this.call('PATCH', JSON.stringify(dto), this.subPath(`/${id}`))
  }
}
