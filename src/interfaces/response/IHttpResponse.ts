export interface IHttpResponse<T> {
  success: boolean;
  message?: string;
  result?: T;
}
