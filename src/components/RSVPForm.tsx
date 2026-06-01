"use client";
import { useState } from "react";
import confetti from "canvas-confetti";
import ScrollReveal from "./ScrollReveal";

export default function RSVPForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    // Nơi gọi API Backend thực tế
    // const res = await fetch('/api/rsvp', { method: 'POST', body: JSON.stringify({...}) });
    
    setTimeout(() => {
      setStatus("success");
      // Bắn pháo giấy ăn mừng
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#2c4c3b', '#d4af37', '#ffffff']
      });
    }, 1000);
  };

  return (
    <ScrollReveal>
      <section id="rsvp" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a735d]">RSVP</p>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#2a231d] sm:text-5xl">Xác nhận tham dự</h2>
          <p className="mx-auto mt-4 text-sm leading-7 text-[#6b5a4a] sm:text-base">
            Chỉ mất vài giây thôi, nhưng nó giúp mình chuẩn bị cho các bạn chu đáo hơn rất nhiều.
          </p>
        </div>
        
        {status === "success" ? (
          <div className="rounded-[2rem] border border-[#8e6a43]/12 bg-white/75 p-10 text-center shadow-[0_24px_80px_-48px_rgba(124,91,60,0.25)] backdrop-blur-md">
            <h3 className="text-2xl font-semibold text-[#2a231d] sm:text-3xl">Cảm ơn bạn!</h3>
            <p className="mt-4 text-[#6b5a4a] sm:text-lg">Lời hồi đáp của bạn đã được ghi nhận. Hẹn gặp bạn tại buổi lễ nhé!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-[#8e6a43]/12 bg-white/75 p-6 shadow-[0_24px_80px_-48px_rgba(124,91,60,0.25)] backdrop-blur-md sm:p-8">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#4e4338]">Tên của bạn là gì nhỉ?</label>
              <input required type="text" className="w-full rounded-2xl border border-[#8e6a43]/12 bg-[#f8f2e7] px-5 py-4 text-[#2f261f] placeholder:text-[#a28f7d] outline-none transition focus:border-[#8e6a43]/35 focus:ring-4 focus:ring-[#8e6a43]/10" placeholder="Nguyễn Văn A" />
            </div>
            
            <div>
              <label className="mb-2 block text-sm font-medium text-[#4e4338]">Bạn có tham dự được không?</label>
              <select required className="w-full rounded-2xl border border-[#8e6a43]/12 bg-[#f8f2e7] px-5 py-4 text-[#2f261f] outline-none transition focus:border-[#8e6a43]/35 focus:ring-4 focus:ring-[#8e6a43]/10 [&>option]:text-slate-900">
                <option value="yes">Chắc chắn có mặt!</option>
                <option value="maybe">Mình sẽ cố gắng thu xếp</option>
                <option value="no">Tiếc quá, mình bận mất rồi</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#4e4338]">Gửi vài lời chúc cho mình nhé!</label>
              <textarea rows={4} className="w-full resize-none rounded-2xl border border-[#8e6a43]/12 bg-[#f8f2e7] px-5 py-4 text-[#2f261f] placeholder:text-[#a28f7d] outline-none transition focus:border-[#8e6a43]/35 focus:ring-4 focus:ring-[#8e6a43]/10" placeholder="Chúc bạn..."></textarea>
            </div>
            
            <button 
              disabled={status === "loading"} 
              type="submit" 
              className="mt-4 w-full rounded-2xl bg-[#8f6a44] py-4 text-base font-semibold text-[#fffaf4] transition hover:bg-[#7a5837] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Đang gửi..." : "Gửi Xác Nhận"}
            </button>
          </form>
        )}
      </div>
    </section>    </ScrollReveal>  );
}