import {Nullable} from '../../../../../utils/type/nullable';

export interface YandexIdMetadata {
  userId: string;
  login: string;
  oldSocialLogin: Nullable<string>;
  defaultEmail: string;
  id: string;
  emails: [string, ...string[]];
  psuid: string;
  createdAt: Date;
}
