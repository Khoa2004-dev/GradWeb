"use client";
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
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#8e6a43]/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#7d5c3e] shadow-[0_12px_30px_-18px_rgba(124,91,60,0.25)] backdrop-blur">
              Save the date
            </div>

            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-playfair)] text-5xl font-semibold tracking-tight text-[#2a231d] sm:text-6xl lg:text-7xl">
              Lễ Tốt Nghiệp
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5e544b] sm:text-lg">
              Trân trọng kính mời mọi người đến tham dự buổi lễ tốt nghiệp của em / Khoa, sự xuất hiện của mọi người trong ngày đặc biệt này sẽ là niềm hạnh phúc rất lớn đối với em / Khoa.  
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
                href="https://calendar.google.com/calendar/u/0/r/eventedit?text=L%E1%BB%85%20T%E1%BB%91t%20Nghi%E1%BB%87p&dates=20260609T073000/20260609T113000&location=Khu%20ph%E1%BB%91%206%2C%20P.%20Linh%20Trung%2C%20TP.%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c&details=L%E1%BB%85%20t%E1%BB%91t%20nghi%E1%BB%87p%20t%E1%BA%A1i%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20C%C3%B4ng%20ngh%E1%BB%87%20Th%C3%B4ng%20tin%20UIT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#8e6a43]/25 bg-[#f4e4d1] px-6 py-3.5 text-sm font-semibold text-[#5c4a35] backdrop-blur transition-all duration-300 hover:bg-[#ede1d0] hover:border-[#8e6a43]/40"
              >
                📅 Thêm vào Calendar
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#8e6a43]/12 bg-white/75 p-4 shadow-[0_20px_40px_-28px_rgba(124,91,60,0.25)] backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8a735d]">Thời gian</p>
                <p className="mt-2 text-sm font-semibold text-[#2f261f]">09.06.2026</p>
                <p className="text-sm text-[#6b5a4a]">11:00 - 12:00</p>
              </div>
              <div className="rounded-3xl border border-[#8e6a43]/12 bg-white/75 p-4 shadow-[0_20px_40px_-28px_rgba(124,91,60,0.25)] backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8a735d]">Địa điểm</p>
                <p className="mt-2 text-sm font-semibold text-[#2f261f]">Trường Đại học Công nghệ Thông tin - ĐHQG-HCM</p>
                <p className="text-sm text-[#6b5a4a]">Khu phố 34, Phường Linh Xuân, Thành phố Hồ Chí Minh.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#f4d3a4]/40 via-[#d5b285]/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#8e6a43]/12 bg-white/70 p-4 shadow-[0_30px_90px_-42px_rgba(124,91,60,0.45)] backdrop-blur-xl sm:p-5">
              <div className="flex items-center justify-between border-b border-[#8e6a43]/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#8a735d]">Custom image area</p>
                  <h2 className="mt-2 text-xl font-semibold text-[#2a231d]">Ảnh của bạn sẽ nằm ở đây</h2>
                </div>
                <div className="rounded-full border border-[#8e6a43]/15 bg-[#f7f1e8] px-3 py-1 text-xs font-medium text-[#7d5c3e]">
                  Optional
                </div>
              </div>

              <div className="mt-5 grid gap-4">
                <div className="relative min-h-[26rem] overflow-hidden rounded-[1.75rem] border border-[#8e6a43]/10 bg-[linear-gradient(180deg,#f8efe0_0%,#e8d5ba_100%)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.7),transparent_26%),radial-gradient(circle_at_75%_15%,rgba(255,255,255,0.5),transparent_20%),radial-gradient(circle_at_50%_70%,rgba(143,106,68,0.14),transparent_38%)]" />
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/55 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="max-w-sm rounded-[1.5rem] border border-white/55 bg-white/55 p-6 text-center shadow-[0_18px_50px_-26px_rgba(124,91,60,0.35)] backdrop-blur-md">
                      <p className="text-[11px] uppercase tracking-[0.35em] text-[#8a735d]">Upload / Replace</p>
                      <h3 className="mt-3 text-2xl font-semibold text-[#2a231d]">Đặt ảnh custom của bạn ở đây</h3>
                      <p className="mt-3 text-sm leading-6 text-[#6b5a4a]">
                        Khu vực này được chừa riêng để bạn thay bằng ảnh thật của buổi lễ, ảnh chân dung hoặc ảnh kỷ niệm theo ý muốn.
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-5 left-5 rounded-full border border-white/50 bg-white/60 px-4 py-2 text-xs font-medium text-[#6d5439] backdrop-blur">
                    1200 × 1600 recommended
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}