export interface AuthorizedIpAddress {
  keyId: string;
  address: string;
  type: IpAddressType;
  createdAt: Date;
}

export enum IpAddressType {
  USER_PASS = 'user_pass',
  WHITELIST = 'whitelist',
}
