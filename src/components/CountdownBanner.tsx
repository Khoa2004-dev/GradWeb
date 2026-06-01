"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeCard = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="rounded-2xl border-2 border-[#8f6a44]/20 bg-gradient-to-br from-white/80 to-white/60 p-4 sm:p-6 min-w-[70px] sm:min-w-[100px]">
      <div className="text-3xl sm:text-4xl font-bold text-[#8f6a44] text-center font-mono">
        {String(value).padStart(2, "0")}
      </div>
    </div>
    <span className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#8a735d]">
      {label}
    </span>
  </div>
);

export default function CountdownBanner() {
  const [time, setTime] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date("2026-06-09T11:00:00").getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTime({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollReveal>
      <section className="relative px-4 py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f1e8] via-white to-[#f7f1e8] opacity-60" />
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-[#d8b67e]/20 blur-3xl opacity-40" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#2a231d] sm:text-5xl mb-3">
            Chỉ Còn Lại
          </h2>
          <p className="text-lg text-[#5e544b]">
            Để chúng mình gặp nhau, giao lưu, chia sẻ, và có những tấm hình kỷ niệm đáng nhớ.
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap">
          <TimeCard value={time.days} label="Ngày" />
          <div className="text-[#8a735d] text-2xl sm:text-3xl font-light mb-8 hidden sm:block">:</div>
          <TimeCard value={time.hours} label="Giờ" />
          <div className="text-[#8a735d] text-2xl sm:text-3xl font-light mb-8 hidden sm:block">:</div>
          <TimeCard value={time.minutes} label="Phút" />
          <div className="text-[#8a735d] text-2xl sm:text-3xl font-light mb-8 hidden sm:block">:</div>
          <TimeCard value={time.seconds} label="Giây" />
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#6b5a4a] font-medium tracking-wide">
            📍Trường Đại học Công nghệ Thông tin - Khu phố 34, Phường Linh Xuân, Thành phố Hồ Chí Minh
          </p>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}
