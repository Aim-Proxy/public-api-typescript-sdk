import {Nullable} from './nullable';

export interface Cookies {
  authentication: Nullable<string>;
  refresh: Nullable<string>;
}
