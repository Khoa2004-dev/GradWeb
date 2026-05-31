import { MapPin, Clock, Car } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function EventDetails() {
  return (
    <ScrollReveal>
      <section id="event" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a735d]">Event details</p>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#2a231d] sm:text-5xl">
            Thông tin sự kiện
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6b5a4a] sm:text-base">
            Tất cả thông tin được trình bày như một bộ thẻ cao cấp, đủ sang nhưng vẫn rất dễ đọc.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#8e6a43]/12 bg-white/75 p-6 shadow-[0_24px_80px_-48px_rgba(124,91,60,0.25)] backdrop-blur-xl sm:p-8">
            <div className="mb-8 flex items-center gap-3 text-[#7d5c3e]">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8e6a43]/10 ring-1 ring-[#8e6a43]/15">
                <Clock className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[#2a231d] sm:text-2xl">Timeline</h3>
                <p className="text-sm text-[#8a735d]">Những mốc chính trong buổi lễ</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                ["Nhận bằng tại hội trường", "07:30 - 09:30"],
                ["Chụp ảnh tự do", "09:30 - 11:00"],
                ["Ăn nhẹ và giao lưu", "11:30"],
              ].map(([label, time]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-2xl border border-[#8e6a43]/10 bg-[#f8f2e7] px-5 py-4"
                >
                  <span className="text-sm font-medium text-[#2f261f] sm:text-base">{label}</span>
                  <span className="text-sm text-[#6b5a4a]">{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#8e6a43]/12 bg-white/75 p-6 shadow-[0_24px_80px_-48px_rgba(124,91,60,0.25)] backdrop-blur-xl sm:p-8">
            <div className="mb-8 flex items-center gap-3 text-[#7d5c3e]">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8e6a43]/10 ring-1 ring-[#8e6a43]/15">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[#2a231d] sm:text-2xl">Địa điểm</h3>
                <p className="text-sm text-[#8a735d]">Thông tin đường đi và gửi xe</p>
              </div>
            </div>

            <p className="text-lg font-semibold text-[#2f261f]">Trường Đại học Công nghệ Thông tin (UIT)</p>
            <p className="mt-2 text-[#6b5a4a]">Khu phố 6, P. Linh Trung, TP. Thủ Đức</p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-[#8e6a43]/12 shadow-[0_12px_40px_-20px_rgba(124,91,60,0.25)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5739766621357!2d106.8048309110562!3d10.87312416214082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174db6e4d9c0001%3A0x1d6e3c5e4d9c0001!2sUniversity%20of%20Information%20Technology!5e0!3m2!1svi!2s!4v1234567890"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen={true}
                // loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-[#8e6a43]/10 bg-[#f8f2e7] p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8e6a43]/10 text-[#7d5c3e] ring-1 ring-[#8e6a43]/15">
                  <Car className="h-5 w-5" />
                </span>
                <p className="text-sm leading-7 text-[#6b5a4a]">
                  <span className="font-semibold text-[#2f261f]">Điểm gửi xe:</span> Bạn đi vào cổng chính và gửi xe ở bãi xe sinh viên bên tay phải.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}