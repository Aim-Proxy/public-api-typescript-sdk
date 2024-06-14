import {UserRole, UserStatus} from "../type/user";

export interface CreateUserDto {
  role: UserRole;
  statuses?: [UserStatus, ...UserStatus[]]
  balance?: number;
  email: string;
}
