import { NextResponse } from "next/server";

// src/app/api/rsvp/route.ts
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwehca6VuZIymKIL1rAuhSFhjzzHLeIFWb37oTY8AhGmGy8q9rB2taqmXHO4hNOfvi-ww/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, attendance, message } = body;

    // Gửi tới Google Apps Script
    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({ name, attendance, message }),
    });

    return NextResponse.json(
      { success: true, message: "Đã ghi nhận thành công" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Có lỗi xảy ra từ server" },
      { status: 500 }
    );
  }
}