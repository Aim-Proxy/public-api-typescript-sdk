import {ProxyFunctionValue} from "../../tariff/coefficient/proxy-function";
import {AuthMethod} from "../../key";

export interface PaymentDetailsDto {
  replenishBalance?: ReplenishBalanceDetails;
  purchaseKey?: PurchaseKeyDetails;
  editKey?: EditKeyDetails;
}

export interface ReplenishBalanceDetails {
  amount: number;
}

export interface PurchaseKeyDetails {
  name: string;
  tariffId: string;
  authMethod: AuthMethod;
  proxyFunction: ProxyFunctionValue;
  subnet: string;
  authorizedIpAddressesLimit: number;
  tcpConnectsLimit: number;
  rotatePeriod?: number;
  duration: number;
}

export interface EditKeyDetails {
  keyId?: string;
  name?: string;
  isActive?: boolean;
  authMethod?: AuthMethod;
  proxyFunction?: ProxyFunctionValue;
  subnet?: string;
  authorizedIpAddressesLimit?: number;
  tcpConnectsLimit?: number;
  rotatePeriod?: number | null;
  duration?: number;
}
