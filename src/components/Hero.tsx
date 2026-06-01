"use client";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <ScrollReveal>
      <section className="relative overflow-hidden px-4 pt-8 pb-16 sm:pt-12 sm:pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute top-24 right-[-4rem] h-72 w-72 rounded-full bg-[#d8b67e]/15 blur-3xl" />
        <div className="absolute bottom-0 left-[-6rem] h-80 w-80 rounded-full bg-[#9c7d5a]/8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),transparent_65%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl items-center">
        <div className="grid gap-7 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#8e6a43]/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#7d5c3e] shadow-[0_12px_30px_-18px_rgba(124,91,60,0.25)] backdrop-blur">
              Save the date
            </div>

            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-playfair)] text-5xl font-semibold tracking-tight text-[#2a231d] sm:text-6xl lg:text-7xl">
              Lễ Tốt Nghiệp
            </h1>

            <p className="mt-6 text-base leading-8 text-[#5e544b] sm:text-lg">
              Trân trọng kính mời mọi người đến tham dự buổi lễ tốt nghiệp này của mình, sự xuất hiện của mọi người trong ngày đặc biệt này sẽ là niềm hạnh phúc rất lớn đối với bản thân mình.  
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#rsvp"
                className="inline-flex items-center justify-center rounded-full bg-[#8f6a44] px-6 py-3.5 text-sm font-semibold text-[#fffaf4] shadow-[0_18px_40px_-20px_rgba(124,91,60,0.55)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#7a5837]"
              >
                Xác nhận tham dự
              </a>
              <a
                href="#event"
                className="inline-flex items-center justify-center rounded-full border border-[#8e6a43]/15 bg-white/60 px-6 py-3.5 text-sm font-semibold text-[#3e3126] backdrop-blur transition-colors duration-300 hover:border-[#8e6a43]/30 hover:bg-white"
              >
                Xem thông tin sự kiện
              </a>
              <a
                href="https://calendar.google.com/calendar/u/0/r/eventedit?text=L%E1%BB%85%20t%E1%BB%91t%20nghi%E1%BB%87p%20c%E1%BB%A7a%20Khoa&dates=20260609T110000/20260609T120000&location=Khu%20ph%E1%BB%91%2034%2C%20Ph%C6%B0%E1%BB%9Dng%20Linh%20Xu%C3%A2n%2C%20TP.%20H%E1%BB%93%20Ch%C3%AD%20Minh&details=L%E1%BB%85%20t%E1%BB%91t%20nghi%E1%BB%87p%20c%E1%BB%A7a%20Khoa%20t%E1%BA%A1i%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20C%C3%B4ng%20ngh%E1%BB%87%20Th%C3%B4ng%20tin%20UIT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#8e6a43]/25 bg-[#f4e4d1] px-6 py-3.5 text-sm font-semibold text-[#5c4a35] backdrop-blur transition-all duration-300 hover:bg-[#ede1d0] hover:border-[#8e6a43]/40"
              >
                📅 Thêm vào Lịch
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#8e6a43]/12 bg-white/75 p-4 shadow-[0_20px_40px_-28px_rgba(124,91,60,0.25)] backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8a735d]">Thời gian</p>
                <p className="mt-2 text-sm font-semibold text-[#2f261f] space-y-2">09.06.2026</p>
                <p className="text-sm text-[#6b5a4a] space-y-2">11:00 - 12:00</p>
              </div>
              <div className="rounded-3xl border border-[#8e6a43]/12 bg-white/75 p-4 shadow-[0_20px_40px_-28px_rgba(124,91,60,0.25)] backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8a735d]">Địa điểm</p>
                <p className="mt-2 text-sm font-semibold text-[#2f261f] space-y-2">Trường Đại học Công nghệ Thông tin</p>
                <p className="text-sm text-[#6b5a4a] space-y-2">Khu phố 34, Phường Linh Xuân, TP. Hồ Chí Minh.</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[#8e6a43]/10 shadow-[0_20px_60px_-30px_rgba(124,91,60,0.35)]">
            <Image
              src="/images/photo1.png"
              alt="Ảnh cá nhân"
              width={300}
              height={300}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}