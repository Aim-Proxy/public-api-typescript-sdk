import {IpAddressType} from '../type';

export interface CreateAuthorizedIpAddressDto {
  address: string;
  type: IpAddressType;
}
