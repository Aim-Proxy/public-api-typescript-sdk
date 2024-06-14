import {Nullable} from "../../../utils/type/nullable";
import {TelegramMetadata} from "../metadata/telegram";
import {YandexIdMetadata} from "../metadata/yandex-id";
import {GoogleMetadata} from "../metadata/google";
import {PreferencesMetadata} from "../metadata/preferences";

export interface User {
  id: string;
  role: UserRole;
  statuses: UserStatus[];
  balance: number;
  email: string;
  updatedAt: Date;
  createdAt: Date;
  metadata: {
    telegram: Nullable<TelegramMetadata>;
    yandexId: Nullable<YandexIdMetadata>;
    google: Nullable<GoogleMetadata>;
    preferences: Nullable<PreferencesMetadata>;
  }
}

export enum UserRole {
  ADMIN = 'admin',
  PARTNER = 'partner',
  USER = 'user',
}

export enum UserStatus {
  AUTHORIZED = 'authorized',
  NON_AUTHORIZED = 'non_authorized',
  BANNED = 'banned',
}
