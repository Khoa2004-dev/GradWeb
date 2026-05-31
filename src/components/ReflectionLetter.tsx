"use client";

import ScrollReveal from "./ScrollReveal";

export default function ReflectionLetter() {
  return (
    <ScrollReveal>
      <section className="relative px-4 py-20 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f7f1e8] via-white to-[#f4e4d1]" />
        <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#f4d3a4]/20 blur-3xl opacity-30" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <div className="rounded-3xl border border-[#8e6a43]/10 bg-white/50 backdrop-blur-xl p-8 sm:p-12 shadow-[0_30px_90px_-42px_rgba(124,91,60,0.25)]">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#2a231d] text-center mb-8">
            Những Lời Tâm Talktoanhưởng
          </h2>

          <div className="space-y-6 text-center">
            <p className="font-[family-name:var(--font-playfair)] text-xl leading-relaxed text-[#3e3126]">
              Bốn năm học không phải cứ chỉ là kiến thức lập trình. Đó là những đêm thức trắng khi code không chạy, những lần bug khiến tôi muốn bỏ cuộc, và rồi lại quay lại với sự kiên trì.
            </p>

            <p className="font-[family-name:var(--font-playfair)] text-xl leading-relaxed text-[#3e3126]">
              Đó là những bài báo cáo khoa học, những bài luận, những lần trình bày ý tưởng trước bảng. Đó là cảm giác lần đầu thấy mô hình AI của mình chạy đúng, hay khi một dự án đi từ ý tưởng đến sản phẩm thực tế.
            </p>

            <p className="font-[family-name:var(--font-playfair)] text-xl leading-relaxed text-[#3e3126]">
              Nhưng quan trọng hơn cả, là những người luôn bên cạnh. Những người thầy cô dạy dỗ tận tâm, những người bạn chia sẻ nỗi khó, những người trong gia đình luôn hỗ trợ và tin tưởng. Hôm nay, tôi muốn nói lời cảm ơn tới tất cả các bạn.
            </p>

            <div className="pt-6 border-t border-[#8e6a43]/15">
              <p className="font-[family-name:var(--font-playfair)] text-lg text-[#8f6a44] italic">
                "Kết thúc là khởi đầu của một chương mới. Cảm ơn vì đã đồng hành trong hành trình này."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}
