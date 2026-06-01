import { MapPin, Car } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

// 📍 Thay đổi URL dưới đây để sửa địa điểm trên bản đồ
// Cách lấy URL: Truy cập Google Maps → tìm địa điểm → Share → Embed a map → Copy iframe src URL
const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2312404166914!2d106.80047917458559!3d10.870008889284506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2sUniversity%20of%20Information%20Technology%20-%20VNUHCM!5e0!3m2!1sen!2sus!4v1780329322794!5m2!1sen!2sus";

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

        <div className="grid gap-6">
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
            <p className="mt-2 text-[#6b5a4a]">Khu phố 34, Phường Linh Xuân, Thành phố Hồ Chí Minh.</p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-[#8e6a43]/12 shadow-[0_12px_40px_-20px_rgba(124,91,60,0.25)]">
              <iframe
                src={MAP_EMBED_URL}
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
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#8e6a43]/10 text-[#7d5c3e] ring-1 ring-[#8e6a43]/15">
                  <Car className="h-5 w-5" />
                </span>
                <p className="text-sm leading-7 text-[#6b5a4a]">
                  <span className="font-semibold text-[#2f261f]">Điểm gửi xe:</span> Từ cổng chính rẽ trái đi thẳng để đến bãi gửi xe ở bãi xe sinh viên.
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