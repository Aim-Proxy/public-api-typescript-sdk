export interface PaymentDetailsDto {
  replenishBalance?: ReplenishBalanceDetails;
  purchaseKey?: PurchaseKeyDetails;
  editKey?: EditKeyDetails;
}

export interface ReplenishBalanceDetails {
  amount: number;
}

export interface PurchaseKeyDetails {

}

export interface EditKeyDetails {}
