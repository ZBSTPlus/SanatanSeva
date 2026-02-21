"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

const TempleAudioContext = createContext({
  isPlaying: false,
  toggle: () => {},
});

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/temple-bell.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.6;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggle = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      setIsPlaying(false);
    }
  };

  return (
    <TempleAudioContext.Provider value={{ isPlaying, toggle }}>
      {children}
    </TempleAudioContext.Provider>
  );
}

export const useTempleAudio = () => useContext(TempleAudioContext);
