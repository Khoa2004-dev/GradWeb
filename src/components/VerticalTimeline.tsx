"use client";

import { BookOpen, Bug, Brain, Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const milestones = [
  {
    year: "Năm 1",
    title: "Dòng code 'Hello World' đầu tiên",
    description: "Bước vào giảng đường với rất nhiều hồi hộp và kỳ vọng",
    icon: BookOpen,
    color: "#8f6a44"
  },
  {
    year: "Năm 2",
    title: "Những đêm thức trắng fix bug",
    description: "Chạy deadline đồ án, học hỏi từ những sai lầm và thất bại",
    icon: Bug,
    color: "#7d5c3e"
  },
  {
    year: "Năm 3",
    title: "Va chạm thực tế",
    description: "Lần đầu tham gia các cuộc thi và những bài nghiên cứu đầu tiên",
    icon: Brain,
    color: "#6b5139"
  },
  {
    year: "Năm 4",
    title: "Thực tập & đại học",
    description: "Chặng cuối cùng, chuẩn bị bước vào hành trình mới với những trải nghiệm thực tế",
    icon: Briefcase,
    color: "#7d5c3e"
  }
];

export default function VerticalTimeline() {
  return (
    <ScrollReveal>
      <section className="relative overflow-hidden px-4 py-20 sm:py-32 bg-gradient-to-br from-[#f7f1e8]/40 to-[#e8dcc8]/20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[-8rem] h-96 w-96 rounded-full bg-amber-200/20 blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-[-6rem] h-80 w-80 rounded-full bg-[#d8b67e]/15 blur-3xl opacity-30" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-semibold text-[#2a231d] sm:text-5xl">
            Hành Trình 4 Năm
          </h2>
          <p className="mt-4 text-lg text-[#5e544b]">
            Từ những ngày đầu bỡ ngỡ đến vạch đích, mỗi bước đều là một kỷ niệm đáng nhớ.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line: shifted to left-6 on mobile, centered on md and up */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#8f6a44] via-[#7d5c3e] to-[#6b5139]" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  
                  {/* Content: full width with left padding on mobile, 50% width on md and up */}
                  <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <div className="inline-block rounded-2xl border border-[#8e6a43]/15 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8f6a44] shadow-[0_12px_30px_-18px_rgba(124,91,60,0.25)] backdrop-blur-md">
                      {milestone.year}
                    </div>
                    <h3 className="mt-4 text-lg sm:text-xl font-semibold text-[#2a231d] leading-snug">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-[#6b5a4a] leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Timeline dot with icon: smaller on mobile and aligned to the left vertical line */}
                  <div className="absolute left-6 md:left-1/2 top-2 md:top-0 -translate-x-1/2 -translate-y-1/4 md:-translate-y-1/4 z-10 flex h-10 w-10 md:h-16 md:w-16 items-center justify-center rounded-full border-4 border-[#f7f1e8] bg-white shadow-[0_12px_40px_-16px_rgba(124,91,60,0.45)]">
                    <div 
                      className="flex h-full w-full items-center justify-center rounded-full" 
                      style={{ backgroundColor: `${milestone.color}15` }}
                    >
                      <Icon className="h-4 w-4 md:h-6 md:w-6" color={milestone.color} strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Empty space for the other half, hidden on mobile */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}
