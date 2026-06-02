"use client";

import { Copy, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const codeSnippet = `def graduate(student):
    while student.status != "Graduated":
        student.study()
        student.train_models()
        student.drink_coffee()

    print("Trân trọng mời bạn đến ngày vui của mình!")
    return "2026-06-09"`;

export default function CodeEasterEgg() {
  const [isCopied, setIsCopied] = useState(false);
  const [isHighlighting, setIsHighlighting] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (isHighlighting) {
      const timer = setTimeout(() => setIsHighlighting(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isHighlighting]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      setIsCopied(true);
      setIsHighlighting(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <ScrollReveal>
      <section className="relative overflow-hidden px-4 py-20 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-[-10rem] h-96 w-96 rounded-full bg-[#6b5139]/10 blur-3xl opacity-30" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-semibold text-[#2a231d] sm:text-5xl">
            Easter Egg
          </h2>
          <p className="mt-4 text-lg text-[#5e544b]">
            Vì bạn là dân code, đây là một bài tóm tắt thú vị...
          </p>
        </div>

        <div
          className={`group relative rounded-2xl border border-[#8e6a43]/20 bg-gradient-to-br from-[#1f2937] to-[#0f172a] p-6 shadow-[0_30px_90px_-42px_rgba(0,0,0,0.5)] transition-all duration-300 sm:p-8 ${
            isHighlighting ? "ring-2 ring-[#8f6a44]/50" : ""
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ef4444]" />
              <div className="h-3 w-3 rounded-full bg-[#eab308]" />
              <div className="h-3 w-3 rounded-full bg-[#22c55e]" />
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-lg bg-[#8f6a44]/20 px-3 py-1.5 text-sm text-[#a8956a] transition-all duration-200 hover:bg-[#8f6a44]/30 hover:text-[#c9a84a]"
            >
              {isCopied ? (
                <>
                  <Check size={16} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <pre
            ref={preRef}
            className={`font-mono text-sm leading-relaxed text-[#e5e7eb] overflow-x-auto max-h-96 transition-colors duration-300 ${
              isHighlighting ? "text-[#fbbf24]" : ""
            }`}
          >
            <code>{codeSnippet}</code>
          </pre>
        </div>

        <p className="mt-6 text-center text-sm text-[#6b5a4a]">
          Nếu bạn hiểu code này, bạn sẽ tìm thấy sự liên tưởng ngộ nghĩnh với 4 năm học của tôi 😄
        </p>
      </div>
    </section>
    </ScrollReveal>
  );
}
