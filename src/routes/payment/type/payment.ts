import {Nullable} from '../../../utils/type/nullable';
import {Invoice} from './invoice';

export interface Payment {
  id: string;
  usdAmount: number;
  currency: Nullable<Currency>;
  target: PaymentTarget;
  state: PaymentState;
  method: PaymentMethod;
  system: PaymentSystem;
  payload: string;
  userId: string;
  updatedAt: Date;
  createdAt: Date;
  invoice: Invoice;
}

export enum Currency {
  RUB = 'RUB',
  USD = 'USD',
  USDT = 'USDT',
  ETH = 'ETH',
  BTC = 'BTC',
  TRX = 'TRX',
  USDC = 'USDC',
}

export enum PaymentTarget {
  REPLENISH_BALANCE = 'replenish_balance',
  CREATE_KEY = 'create_key',
  UPDATE_KEY = 'update_key',
}

export enum PaymentState {
  PENDING = 'pending',
  EXPIRED = 'expired',
  RAN_OUT_OF_USER_BALANCE = 'ran_out_of_user_balance',
  SUCCESS = 'success',
}

export enum PaymentMethod {
  CREDIT_CARD = 'credit_card',
  CRYPTO_CURRENCY = 'crypto_currency',
  BALANCE = 'balance',
}

export enum PaymentSystem {
  CRYPTOMUS = 'cryptomus',
  INTELLECT_MONEY = 'intellect_money',
}

export const CurrencyAllowedMethods = new Map<Currency, PaymentMethod>([
  [Currency.RUB, PaymentMethod.CREDIT_CARD],
  [Currency.USD, PaymentMethod.CRYPTO_CURRENCY],
  [Currency.USDT, PaymentMethod.CRYPTO_CURRENCY],
  [Currency.ETH, PaymentMethod.CRYPTO_CURRENCY],
  [Currency.BTC, PaymentMethod.CRYPTO_CURRENCY],
  [Currency.TRX, PaymentMethod.CRYPTO_CURRENCY],
  [Currency.USDC, PaymentMethod.CRYPTO_CURRENCY],
]);

export const PaymentSystemAllowedMethods = new Map<
  PaymentSystem,
  PaymentMethod
>([
  [PaymentSystem.INTELLECT_MONEY, PaymentMethod.CREDIT_CARD],
  [PaymentSystem.CRYPTOMUS, PaymentMethod.CRYPTO_CURRENCY],
]);
export const PaymentSystemAllowedCurrencies = new Map<
  PaymentSystem,
  Currency[]
>([
  [PaymentSystem.INTELLECT_MONEY, [Currency.RUB]],
  [
    PaymentSystem.CRYPTOMUS,
    [Currency.USDT, Currency.ETH, Currency.BTC, Currency.TRX, Currency.USDC],
  ],
]);
