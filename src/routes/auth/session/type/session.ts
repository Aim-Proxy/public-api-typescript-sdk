import {Nullable} from '../../../../utils/type/nullable';

export interface Session {
  id: string;
  ip: Nullable<string>;
  userId: string;
  isActive: boolean;
  closedAt?: Date;
  createdAt: Date;
}
