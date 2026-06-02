"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function ReflectionLetter() {
  return (
    <ScrollReveal>
      <section className="relative overflow-hidden px-4 py-20 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f7f1e8] via-white to-[#f4e4d1]" />
        <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#f4d3a4]/20 blur-3xl opacity-30" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <div className="flex justify-center mb-8">
          <div className="relative h-60 w-60 overflow-hidden rounded-2xl border-4 border-[#8f6a44]/30 shadow-lg">
            <Image
              src="/images/photo2.png"
              alt="Ảnh chân dung"
              width={300}
              height={300}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="rounded-3xl border border-[#8e6a43]/10 bg-white/50 backdrop-blur-xl p-5 xs:p-6 sm:p-12 shadow-[0_30px_90px_-42px_rgba(124,91,60,0.25)]">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#2a231d] text-center mb-8">
            Những Lời Tâm Sự
          </h2>

          <div className="space-y-6 text-center">
            <p className="font-[family-name:var(--font-playfair)] text-base xs:text-lg sm:text-xl leading-relaxed text-[#3e3126]">
              Sau bốn năm đại học, mình sắp chính thức tốt nghiệp. Đây là một dấu mốc mà mình đã mong chờ từ rất lâu, và sẽ thật vui nếu có bạn đến chung vui cùng mình trong ngày này.
            </p>

            <p className="font-[family-name:var(--font-playfair)] text-base xs:text-lg sm:text-xl leading-relaxed text-[#3e3126]">
              Sự có mặt của những người mình quý mến sẽ khiến khoảnh khắc ấy ý nghĩa hơn rất nhiều. Mình rất mong được gặp những người thân yêu, bạn bè và lưu lại vài tấm ảnh, vài câu chuyện để khép lại một chặng đường đáng nhớ. Nếu sắp xếp được thời gian, mình rất hy vọng bạn sẽ đến nhé!
            </p>

            <p className="font-[family-name:var(--font-playfair)] text-base xs:text-lg sm:text-xl leading-relaxed text-[#3e3126]">
              Mình rất mong được gặp bạn!
            </p>

            <div className="pt-6 border-t border-[#8e6a43]/15">
              <p className="font-[family-name:var(--font-playfair)] text-lg text-[#8f6a44] italic">
                &ldquo;Kết thúc là khởi đầu của một chương mới.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}
