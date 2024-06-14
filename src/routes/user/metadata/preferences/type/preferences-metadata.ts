export interface PreferencesMetadata {
  userId: string;
  notificationMethod: [NotificationMethod, ...NotificationMethod[]];
  contactLanguage: ContactLanguage;
  isSendAuthorizationNotifications: boolean;
}

export enum NotificationMethod {
  EMAIL = 'email',
  TELEGRAM = 'telegram',
}

export enum ContactLanguage {
  RU = 'ru',
  EN = 'en',
}
