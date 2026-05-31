"use client";

import { useEffect, useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

interface Stat {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

function AnimatedCounter({ stat }: { stat: Stat }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    let animationId: number;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const duration = 2000; // 2 seconds
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const current = progress * stat.value;
            
            setCount(Math.floor(current));

            if (progress < 1) {
              animationId = requestAnimationFrame(animate);
            }
          };

          animationId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, [stat.value]);

  return (
    <div
      ref={ref}
      className="text-3xl sm:text-4xl font-bold text-[#8f6a44]"
    >
      {stat.prefix}
      {count.toLocaleString()}
      {stat.suffix}
    </div>
  );
}

const stats: Stat[] = [
  { label: "Ngày gắn bó tại giảng đường", value: 1460, suffix: " ngày" },
  { label: "Epochs đã train cho các model", value: 10000, prefix: "+", suffix: "" },
  { label: "Ly cà phê đã tiêu thụ", value: 500, prefix: "", suffix: "+" },
  { label: "Chặng đường khép lại trọn vẹn", value: 1, suffix: "" }
];

export default function FunFacts() {
  return (
    <ScrollReveal>
      <section className="relative px-4 py-20 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-[-10rem] h-96 w-96 rounded-full bg-[#d8b67e]/15 blur-3xl opacity-30" />
        <div className="absolute bottom-1/3 left-[-8rem] h-80 w-80 rounded-full bg-amber-200/15 blur-3xl opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#2a231d] sm:text-5xl">
            Con Số Biết Nói
          </h2>
          <p className="mt-4 text-lg text-[#5e544b]">
            Hành trình được kể bằng những con số, những kỷ niệm, và những lần bứt phá
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-[#8e6a43]/12 bg-white/70 p-8 shadow-[0_20px_40px_-28px_rgba(124,91,60,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-[#8e6a43]/25 hover:bg-white/80 hover:shadow-[0_25px_50px_-32px_rgba(124,91,60,0.35)]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8f6a44]/10 group-hover:bg-[#8f6a44]/15 transition-colors duration-300">
                <div className="h-6 w-6 rounded-full border-2 border-[#8f6a44]" />
              </div>
              <AnimatedCounter stat={stat} />
              <p className="mt-4 text-sm text-[#6b5a4a] leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}
