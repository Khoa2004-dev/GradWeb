"use client";

import { useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false); // Changed to false to not auto-load YouTube
  const videoId = "9kzE8isXlQY";
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
      <div className="fixed bottom-6 left-6 z-40 px-4 py-3 rounded-full bg-[#8f6a44] text-white shadow-[0_12px_35px_-18px_rgba(124,91,60,0.55)] flex items-center gap-3 text-sm font-medium">
        <span className="text-lg">🎵</span>
        <span>{isPlaying ? "đang phát Lofi Beats" : "Lofi Beats"}</span>
        
        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="ml-2 px-3 py-1 bg-white/30 hover:bg-white/40 rounded-full transition-all text-xs font-semibold uppercase"
        >
          {isPlaying ? "Tắt" : "Bật"}
        </button>
      </div>
    </>
  );
}
