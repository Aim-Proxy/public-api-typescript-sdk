import {Client} from '../../../../abstract/client';
import {Cookies} from '../../../../utils/type/cookies';
import {Throwable} from '../../../../utils/type/throwable';
import {GenericCoefficients} from './type';
import {
  CreateGenericCoefficientsDto,
  UpdateGenericCoefficientsDto,
} from './dto';

export class GenericCoefficientsClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);
  }

  async getAll(): Promise<Throwable<GenericCoefficients[]>> {
    return this.call<Throwable<GenericCoefficients[]>>('GET', null);
  }

  async getById(id: string): Promise<Throwable<GenericCoefficients>> {
    return this.call<Throwable<GenericCoefficients>>(
      'GET',
      null,
      this.subPath(`/${id}`)
    );
  }

  async create(
    dto: CreateGenericCoefficientsDto
  ): Promise<Throwable<GenericCoefficients>> {
    return this.call<Throwable<GenericCoefficients>>(
      'POST',
      JSON.stringify(dto)
    );
  }

  async update(
    id: string,
    dto: UpdateGenericCoefficientsDto
  ): Promise<Throwable<GenericCoefficients>> {
    return this.call<Throwable<GenericCoefficients>>(
      'PATCH',
      JSON.stringify(dto),
      this.subPath(`/${id}`)
    );
  }
}
