export interface ApiSuccessResponse<T> {
  success: boolean;
  data: T;
}

export interface ApiErrorResponse {
  success: boolean;
  error: string;
  message?: string;
}
export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
