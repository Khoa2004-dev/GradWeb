import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // IN THỬ RA TERMINAL XEM CÓ NHẬN ĐƯỢC CHỮ NÀO KHÔNG:
    console.log("=== DATA FRONTEND GỬI LÊN ===", body);

    const { name, attendance, message } = body;
    const timestamp = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    
    const rsvpData = { timestamp, name, attendance, message };

    await redis.lpush("rsvp_list", JSON.stringify(rsvpData));
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error("LỖI SẬP SERVER:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}