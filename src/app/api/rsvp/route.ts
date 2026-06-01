import { NextResponse } from "next/server";

const GOOGLE_APPS_SCRIPT_URL = "URL_MỚI_SAU_KHI_DEPLOY_ANYONE";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, attendance, message } = body;

    const res = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, attendance, message }),
    });

    // Tiện thể đọc luôn phản hồi từ Google xem họ báo gì
    const googleData = await res.json(); 

    return NextResponse.json(
      { success: true, message: "Đã ghi nhận thành công", googleData },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: "Có lỗi xảy ra từ server", error: error.message },
      { status: 500 }
    );
  }
}