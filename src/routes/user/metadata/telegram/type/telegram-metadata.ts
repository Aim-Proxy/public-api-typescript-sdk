import {Nullable} from "../../../../../utils/type/nullable";

export interface TelegramMetadata {
  userId: string;
  telegramId: string;
  firstName: string;
  lastName: Nullable<string>;
  username: Nullable<string>;
  languageCode: string;
  createdAt: Date;
}
