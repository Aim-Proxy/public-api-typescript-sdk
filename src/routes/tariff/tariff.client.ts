import {Client} from '../../abstract/client';
import {Cookies} from '../../utils/type/cookies';
import {CoefficientClient} from './coefficient';
import {SensitiveClient} from './sensitive';
import {Throwable} from '../../utils/type/throwable';
import {Tariff} from './type';
import {CreateTariffDto, UpdateTariffDto} from './dto';

export class TariffClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);

    this.coefficient = new CoefficientClient(this.url, '/coefficient', cookies);
    this.sensitive = new SensitiveClient(this.url, '/sensitive', cookies);
  }

  coefficient: CoefficientClient;
  sensitive: SensitiveClient;

  async getAll(): Promise<Throwable<Tariff[]>> {
    return this.call<Throwable<Tariff[]>>('GET', null);
  }

  async getById(id: string): Promise<Throwable<Tariff>> {
    return this.call<Throwable<Tariff>>('GET', null, this.subPath(`/${id}`));
  }

  async create(dto: CreateTariffDto): Promise<Throwable<Tariff>> {
    return this.call<Throwable<Tariff>>('POST', JSON.stringify(dto));
  }

  async update(id: string, dto: UpdateTariffDto): Promise<Throwable<Tariff>> {
    return this.call<Throwable<Tariff>>(
      'PATCH',
      JSON.stringify(dto),
      this.subPath(`/${id}`)
    );
  }

  async delete(id: string): Promise<Throwable<Tariff>> {
    return this.call<Throwable<Tariff>>('DELETE', null, this.subPath(`/${id}`));
  }
}
