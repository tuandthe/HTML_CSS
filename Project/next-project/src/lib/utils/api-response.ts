import { NextResponse } from "next/server";

// Định nghĩa cấu trúc trả về chuẩn
interface IApiResponse<T> {
  success: boolean;
  code: number;
  message: string;
  data: T | null;
}

export class ApiResponse {
  static success<T>(data: T, message: string = "Success", code: number = 200) {
    const responseBody: IApiResponse<T> = {
      success: true,
      code,
      message,
      data,
    };
    return NextResponse.json(responseBody, { status: code });
  }

  static error(message: string = "Internal Server Error", code: number = 500) {
    const responseBody: IApiResponse<null> = {
      success: false,
      code,
      message,
      data: null,
    };
    return NextResponse.json(responseBody, { status: code });
  }
  static badRequest(message: string , code: number = 400) {
    const responseBody: IApiResponse<null> = {
      success: false,
      code,
      message,
      data: null,
    };
    return NextResponse.json(responseBody, { status: code });
  }
  static notFound(message: string , code: number = 404) {
    const responseBody: IApiResponse<null> = {
      success: false,
      code,
      message,
      data: null,
    };
    return NextResponse.json(responseBody, { status: code });
  }
}