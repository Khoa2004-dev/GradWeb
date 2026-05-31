import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, attendance, message } = body;

    // TODO: Connect to Database here. 
    // Ví dụ dùng Supabase: await supabase.from('guests').insert([{ name, attendance, message }])
    
    console.log("New RSVP:", { name, attendance, message });

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