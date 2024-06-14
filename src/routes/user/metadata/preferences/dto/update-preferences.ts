import {ContactLanguage, NotificationMethod} from "../type/preferences-metadata";

export interface UpdatePreferences {
  notificationMethod?: [NotificationMethod, ...NotificationMethod[]],
  contactLanguage?: ContactLanguage,
  isSendAuthorizationNotifications?: boolean;
}
