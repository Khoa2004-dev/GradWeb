"use client";

import { useEffect, useState } from "react";

interface LogLine {
  id: string;
  text: string;
  isComplete: boolean;
}

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [showMessage, setShowMessage] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const logLines = [
      { id: "1", text: "$ Initializing graduation system...", delay: 300 },
      { id: "2", text: "$ Loading 4 years of memories...", delay: 1000 },
      { id: "3", text: "$ Compiling academic achievements...", delay: 1700 },
      { id: "4", text: "$ Building gratitude database...", delay: 2400 },
      { id: "5", text: "$ Generating celebration parameters...", delay: 3100 },
    ];

    logLines.forEach((line) => {
      timers.push(
        setTimeout(() => {
          setLogs((prev) => [...prev, { id: line.id, text: line.text, isComplete: false }]);
          
          timers.push(
            setTimeout(() => {
              setLogs((prev) =>
                prev.map((l) => (l.id === line.id ? { ...l, isComplete: true } : l))
              );
            }, 200)
          );
        }, line.delay)
      );
    });

    timers.push(
      setTimeout(() => {
        setShowMessage(true);
      }, 3800)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (!showMessage) return;

    const handleComplete = () => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 800);
    };

    const handleKeyPress = () => {
      handleComplete();
    };

    const handleClick = () => {
      handleComplete();
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleClick);
    };
  }, [showMessage, onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#f7f1e8] via-white to-[#ede1d0] cursor-pointer transition-opacity duration-800 ${isFading ? "opacity-0" : "opacity-100"}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-200/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-80 w-80 rounded-full bg-[#d8b67e]/10 blur-3xl" />
      </div>

      <div className="relative max-w-2xl px-6">
        <div className="rounded-2xl border border-[#8e6a43]/30 bg-white/60 backdrop-blur-xl p-8 shadow-[0_30px_90px_-42px_rgba(124,91,60,0.35)]">
          {/* Terminal header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#8e6a43]/20">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ef4444]" />
              <div className="h-3 w-3 rounded-full bg-[#eab308]" />
              <div className="h-3 w-3 rounded-full bg-[#22c55e]" />
            </div>
            <span className="text-xs text-[#8a735d] ml-3 font-mono">graduation-2026</span>
          </div>

          {/* Log lines */}
          <div className="font-mono text-sm space-y-2 mb-6 min-h-[120px]">
            {logs.map((log) => (
              <div key={log.id} className="flex items-center gap-2">
                <span className="text-[#8f6a44]">›</span>
                <span className={`transition-all duration-300 ${log.isComplete ? "text-[#7d5c3e]" : "text-[#8f6a44]"}`}>
                  {log.text}
                </span>
                {!log.isComplete && (
                  <span className="inline-block w-2 h-4 ml-1 bg-[#8f6a44]" style={{
                    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                  }} />
                )}
                {log.isComplete && <span className="text-[#8a735d]">✓</span>}
              </div>
            ))}
          </div>

          {/* Main message */}
          {showMessage && (
            <div className="animate-fade-in space-y-4">
              <div className="text-center">
                <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2a231d] mb-2">
                  Hành Trình Tốt Nghiệp
                </h1>
                <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#8f6a44] to-transparent rounded-full" />
              </div>

              <p className="text-center text-[#8a735d] font-mono text-sm">
                Nhấn phím bất kỳ hoặc click để tiếp tục...
              </p>

              <div className="text-center text-[#8f6a44]">
                <span className="inline-block animate-pulse">↓</span>
              </div>
            </div>
          )}
        </div>

        <style>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
}
