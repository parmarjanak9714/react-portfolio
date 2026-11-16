import { useState, useRef, useEffect } from "react";
import WelcomeRobot from "./WelcomeRobot";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const audioRef = useRef(null);

  // Stop audio when component is removed
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  // Start introduction voice
  const handleStartIntroduction = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/intro.mp3");
    }

    const audio = audioRef.current;

    audio.pause();
    audio.currentTime = 0;

    audio.onplay = () => setIsSpeaking(true);

    audio.onended = () => setIsSpeaking(false);

    audio.onerror = () => setIsSpeaking(false);

    audio.play().catch((error) => {
      setIsSpeaking(false);
      console.error("Audio playback error:", error);
    });
  };

  // Close popup and stop audio
  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsSpeaking(false);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-5">
          <div className="relative flex max-h-[94vh] w-full max-w-2xl flex-col items-center overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-3xl border border-cyan-400/30 bg-[#080f1d] px-4 py-7 text-center text-white shadow-2xl shadow-cyan-500/20 sm:px-8 sm:py-8">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-300 transition hover:bg-red-500 hover:text-white"
              aria-label="Close welcome popup"
            >
              ✕
            </button>

            {/* Heading */}
            <div className="mb-1 mt-2">
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-400">
                Welcome to
              </span>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Janak Parmar's Portfolio
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Your Personal AI Assistant
              </p>
            </div>

            {/* Full Robot */}
            <div className="h-[350px] w-full max-w-[420px] shrink-0 sm:h-[390px]">
              <WelcomeRobot isSpeaking={isSpeaking}/>
            </div>

            {/* Description */}
            <p className="mx-auto mb-5 max-w-md text-sm leading-7 text-gray-300">
              Hello! I am Janak's AI Assistant. I am here to introduce Janak
              Parmar and his development journey.
            </p>

            {/* Start Introduction */}
            <button
              onClick={handleStartIntroduction}
              className="shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-105 hover:shadow-cyan-500/40 active:scale-95"
            >
              ▶ Start Introduction
            </button>

            <p className="mt-4 text-xs text-gray-500">Powered by Janak AI</p>
          </div>
        </div>
      )}

      {/* Reopen Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[9998] flex items-center gap-2 rounded-full border border-cyan-400/40 bg-[#080f1d] px-5 py-3 text-sm font-semibold text-cyan-300 shadow-xl shadow-cyan-500/20 transition hover:scale-105 hover:bg-cyan-950"
        aria-label="Open AI welcome assistant"
      >
        <span className="text-xl">🤖</span>
        <span>Meet AI Assistant</span>
      </button>
    </>
  );
}
