import {Client} from '../../../abstract/client';
import {Cookies} from '../../../utils/type/cookies';
import {Throwable} from '../../../utils/type/throwable';
import {Session} from './type';

export class SessionClient extends Client {
  constructor(base: string, path: string, cookies: Cookies) {
    super(base, path, cookies);
  }

  async getMy(): Promise<Throwable<[Session, ...Session[]]>> {
    return this.call<Throwable<[Session, ...Session[]]>>(
      'GET',
      null,
      this.subPath('/my')
    );
  }

  async getByUserId(userId: string): Promise<Throwable<Session>[]> {
    return this.call<Throwable<Session>[]>(
      'GET',
      null,
      this.subPath(`/${userId}`)
    );
  }

  async closeByUserId(userId: string): Promise<Throwable<Session>> {
    return this.call<Throwable<Session>>(
      'PATCH',
      null,
      this.subPath(`/close/${userId}`)
    );
  }

  async closeMy(sessionId: string): Promise<Throwable<Session>> {
    return this.call<Throwable<Session>>(
      'PATCH',
      null,
      this.subPath(`/close/my/${sessionId}`)
    );
  }
}
