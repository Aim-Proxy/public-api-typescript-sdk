import {UserRole, UserStatus} from '../type/user';

export interface UpdateUserDto {
  role?: UserRole;
  statuses?: [UserStatus, ...UserStatus[]];
  balance?: number;
  email?: string;
}
