export interface Response<T> {
  message: string;
  statusCode: number;
  error?: string;
  data?: T
}
