import {ContactLanguage, NotificationMethod} from "../preferences.type";

export interface UpdatePreferencesDto {
  notificationMethod?: [NotificationMethod, ...NotificationMethod[]],
  contactLanguage?: ContactLanguage,
  isSendAuthorizationNotifications?: boolean;
}
