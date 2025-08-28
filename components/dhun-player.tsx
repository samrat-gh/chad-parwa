"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Track {
  id: string;
  title: string;
  src: string;
}

const tracks: Track[] = [
  { id: "1", title: "Mangal Dhoon", src: "/music/mangal_dhun.mp3" },
  {
    id: "2",
    title: "Dashain Tihar Sugam Pokharel",
    src: "/music/dashain_tihar_sugam_pokharel.mp3",
  },
  {
    id: "3",
    title: "Malashree Dhoon",
    src: "/music/dashain_malashree_dhun.mp3",
  },
];

export default function DhunPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [showTrackList, setShowTrackList] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    if (isPlaying) {
      audio.play().catch(console.error);
    }

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newVolume = clickX / rect.width;
    setVolume(Math.max(0, Math.min(1, newVolume)));
    setIsMuted(false);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;
  const volumePercentage = isMuted ? 0 : volume * 100;

  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50">
      {showTrackList && (
        <div className="absolute bottom-full mb-2 left-0 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          {tracks.map((track, index) => (
            <button
              key={track.id}
              onClick={() => {
                setCurrentTrackIndex(index);
                setShowTrackList(false);
              }}
              className={cn(
                "w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
                index === currentTrackIndex &&
                  "bg-orange-100 dark:bg-orange-900/30 text-red-900 dark:text-orange-100"
              )}>
              {track.title}
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-3 py-2 shadow-lg border border-gray-200 dark:border-gray-700 min-w-[320px]">
        {/* Play/Pause Button */}
        <Button
          onClick={togglePlay}
          size="sm"
          className="w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 text-white p-0 flex-shrink-0"
          aria-label={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 ml-0.5" />
          )}
        </Button>

        {/* Time Display */}
        <span className="text-sm font-mono text-gray-700 dark:text-gray-300 flex-shrink-0">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        {/* Progress Bar */}
        <div
          className="flex-1 h-2 bg-gray-200 dark:bg-gray-600 rounded-full cursor-pointer relative"
          onClick={handleProgressClick}
          role="progressbar"
          aria-valuenow={progressPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Audio progress">
          <div
            className="h-full bg-red-500 rounded-full transition-all duration-150"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Volume Control */}
        <Button
          onClick={() => setIsMuted(!isMuted)}
          variant="ghost"
          size="sm"
          className="w-8 h-8 p-0 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex-shrink-0"
          aria-label={isMuted ? "Unmute" : "Mute"}>
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </Button>

        <div
          className="w-16 h-2 bg-gray-200 dark:bg-gray-600 rounded-full cursor-pointer relative flex-shrink-0"
          onClick={handleVolumeClick}
          role="slider"
          aria-valuenow={volumePercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Volume control">
          <div
            className="h-full bg-red-500 rounded-full transition-all duration-150"
            style={{ width: `${volumePercentage}%` }}
          />
        </div>

        {/* Track Selector Button */}
        <Button
          onClick={() => setShowTrackList(!showTrackList)}
          variant="ghost"
          size="sm"
          className="w-8 h-8 p-0 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex-shrink-0"
          aria-label="Select track">
          {showTrackList ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronUp className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="metadata"
        autoPlay
      />
    </div>
  );
}
