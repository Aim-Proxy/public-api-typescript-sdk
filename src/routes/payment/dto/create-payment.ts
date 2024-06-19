import {Currency, PaymentMethod, PaymentSystem, PaymentTarget} from '../type';
import {PaymentDetailsDto} from './details';

export interface CreatePaymentDto {
  currency?: Currency;
  target: PaymentTarget;
  method: PaymentMethod;
  system?: PaymentSystem;
  details: PaymentDetailsDto;
}
