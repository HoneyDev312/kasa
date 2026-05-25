export type ApiErrorResponse = {
  error?: string;
  message?: string;
};

export type ApiSuccessResponse<T> =
  | T
  | {
      data: T;
      success?: true;
    };

export type ApiResponse<T> = ApiErrorResponse | ApiSuccessResponse<T>;
