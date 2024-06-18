export interface FutureMetadata {
  id: string;
  metadata: object;
  identityProvider: IdentityProvider;
  state: FutureMetadataState;
  createdAt: Date;
}

export enum IdentityProvider {
  YANDEX_ID = 'YandexID',
  TELEGRAM = 'Telegram',
  GOOGLE = 'Google',
}

export enum FutureMetadataState {
  PENDING = 'pending',
  SUCCESS = 'success',
  EXPIRED = 'expired',
}
