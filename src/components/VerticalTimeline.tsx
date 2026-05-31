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
    description: "Chạy deadline đồ án, học hỏi từng lỗi và mỗi thất bại",
    icon: Bug,
    color: "#7d5c3e"
  },
  {
    year: "Năm 3",
    title: "AI chạy trên thực tế lần đầu",
    description: "Lần đầu đưa mô hình AI vào thực tế & bài nghiên cứu đầu tay",
    icon: Brain,
    color: "#6b5139"
  },
  {
    year: "Năm 4",
    title: "Cân bằng giữa công việc & đại học",
    description: "Chặng rút đích, chuẩn bị bước vào thế giới chuyên nghiệp",
    icon: Briefcase,
    color: "#8a735d"
  }
];

export default function VerticalTimeline() {
  return (
    <ScrollReveal>
      <section className="relative px-4 py-20 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[-8rem] h-96 w-96 rounded-full bg-amber-200/20 blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-[-6rem] h-80 w-80 rounded-full bg-[#d8b67e]/15 blur-3xl opacity-30" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#2a231d] sm:text-5xl">
            Hành Trình 4 Năm
          </h2>
          <p className="mt-4 text-lg text-[#5e544b]">
            Từ những ngày đầu tiên đầy hồi hộp đến chặng đích
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#8f6a44] via-[#8a735d] to-[#6b5139]" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`flex items-start ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${isEven ? "text-right pr-12" : "text-left pl-12"}`}>
                    <div className="inline-block rounded-2xl border border-[#8e6a43]/15 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8f6a44] shadow-[0_12px_30px_-18px_rgba(124,91,60,0.25)] backdrop-blur-md">
                      {milestone.year}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#2a231d] leading-snug">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-[#6b5a4a] leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Timeline dot with icon */}
                  <div className="relative z-10 flex shrink-0 w-0 justify-center">
                    <div className="absolute top-0 -translate-y-1/4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-[#f7f1e8] bg-white shadow-[0_12px_40px_-16px_rgba(124,91,60,0.45)]">
                      <div 
                        className="flex h-full w-full items-center justify-center rounded-full" 
                        style={{ backgroundColor: `${milestone.color}15` }}
                      >
                        <Icon size={24} color={milestone.color} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty space for the other half */}
                  <div className="w-1/2" />
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
