"use client";

import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import CountdownBanner from "@/components/CountdownBanner";
import VerticalTimeline from "@/components/VerticalTimeline";
import FunFacts from "@/components/FunFacts";
import ReflectionLetter from "@/components/ReflectionLetter";
import CodeEasterEgg from "@/components/CodeEasterEgg";
import MusicPlayer from "@/components/MusicPlayer";
import EventDetails from "@/components/EventDetails";
import RSVPForm from "@/components/RSVPForm";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handleComplete = useCallback(() => {
    setShowContent(true);
  }, []);

  return (
    <main>
      {!showContent && <LoadingScreen onComplete={handleComplete} />}
      <div
        className={`transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {showContent && (
          <>
            <MusicPlayer />
            <Hero />
            <CountdownBanner />
            <VerticalTimeline />
            <FunFacts />
            <ReflectionLetter />
            <CodeEasterEgg />
            <EventDetails />
            <RSVPForm />
            <footer className="pb-16 pt-8 text-center text-sm text-[#a28f7d]">
              <p>© {new Date().getFullYear()} - Hẹn gặp bạn tại buổi lễ nhé!</p>
            </footer>
          </>
        )}
      </div>
    </main>
  );
}