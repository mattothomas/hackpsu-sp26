"use client";

import { useState } from "react";

export default function RecordButton() {
  const [recording, setRecording] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6">
      <button
        onClick={() => setRecording((r) => !r)}
        aria-label={recording ? "Stop recording" : "Start recording"}
        className={`
          relative w-48 h-48 rounded-full
          flex items-center justify-center
          shadow-2xl
          transition-all duration-300 ease-in-out
          focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-4
          focus-visible:ring-offset-parchment focus-visible:ring-crimson
          active:scale-95
          ${
            recording
              ? "bg-crimson hover:bg-crimson-dark scale-105"
              : "bg-crimson hover:bg-crimson-dark"
          }
        `}
      >
        {/* Pulse ring when recording */}
        {recording && (
          <span className="absolute inset-0 rounded-full bg-crimson opacity-50 animate-ping" />
        )}

        {/* Microphone icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-20 h-20 relative z-10"
          aria-hidden="true"
        >
          <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.93V19H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-2.07A7 7 0 0 0 19 10Z" />
        </svg>
      </button>

      <p
        className="text-center font-bold text-xl"
        style={{ color: "var(--color-crimson)" }}
      >
        {recording ? "Recording… Tap to stop." : "Tap to Start"}
      </p>

      {!recording && (
        <p
          className="text-center text-lg leading-relaxed max-w-xs"
          style={{ color: "var(--color-ink-muted)" }}
        >
          Tell me about the house you grew up in, or how to make that famous
          lasagna.
        </p>
      )}
    </div>
  );
}
