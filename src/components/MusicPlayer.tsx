"use client";

import { useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false); // Changed to false to not auto-load YouTube
  const videoId = "JdqL89ZZwFw";
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?si=lgXXLJx2g009rppR&autoplay=1&controls=0`;

  return (
    <>
      {/* Hidden YouTube Player - Only load when playing */}
      {isPlaying && (
        <iframe
          key="youtube-player"
          width="0"
          height="0"
          src={youtubeUrl}
          title="Lofi Beats"
          style={{ display: "none" }}
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}

      {/* Music Player - Bottom Left */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 px-3 py-2 sm:px-4 sm:py-3 rounded-full bg-[#8f6a44]/95 backdrop-blur-md text-white shadow-[0_12px_35px_-18px_rgba(124,91,60,0.55)] flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
        <span className="text-base sm:text-lg">🎵</span>
        <span>{isPlaying ? "đang phát Lofi Beats" : "Lofi Beats"}</span>
        
        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="ml-1 sm:ml-2 px-2.5 py-1 sm:px-3 sm:py-1 bg-white/30 hover:bg-white/40 rounded-full transition-all text-[10px] sm:text-xs font-semibold uppercase"
        >
          {isPlaying ? "Tắt" : "Bật"}
        </button>
      </div>
    </>
  );
}
