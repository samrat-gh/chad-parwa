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
    <div className="absolute bottom-2 left-1/2 z-50 -translate-x-1/2 transform md:fixed">
      {showTrackList && (
        <div className="absolute right-0 bottom-full left-0 mb-2 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          {tracks.map((track, index) => (
            <button
              key={track.id}
              onClick={() => {
                setCurrentTrackIndex(index);
                setShowTrackList(false);
              }}
              className={cn(
                "w-full px-3 py-2 text-left text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-700",
                index === currentTrackIndex &&
                  "bg-orange-100 text-red-900 dark:bg-orange-900/30 dark:text-orange-100",
              )}
            >
              {track.title}
            </button>
          ))}
        </div>
      )}

      <div className="flex min-w-[320px] items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-lg dark:border-gray-700 dark:bg-gray-800">
        {/* Play/Pause Button */}
        <Button
          onClick={togglePlay}
          size="sm"
          className="h-8 w-8 flex-shrink-0 rounded-full bg-red-500 p-0 text-white hover:bg-red-600"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="ml-0.5 h-4 w-4" />
          )}
        </Button>

        {/* Time Display */}
        <span className="flex-shrink-0 font-mono text-sm text-gray-700 dark:text-gray-300">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        {/* Progress Bar */}
        <div
          className="relative h-2 flex-1 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-600"
          onClick={handleProgressClick}
          role="progressbar"
          aria-valuenow={progressPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Audio progress"
        >
          <div
            className="h-full rounded-full bg-red-500 transition-all duration-150"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Volume Control */}
        <Button
          onClick={() => setIsMuted(!isMuted)}
          variant="ghost"
          size="sm"
          className="h-8 w-8 flex-shrink-0 p-0 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </Button>

        <div
          className="relative h-2 w-16 flex-shrink-0 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-600"
          onClick={handleVolumeClick}
          role="slider"
          aria-valuenow={volumePercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Volume control"
        >
          <div
            className="h-full rounded-full bg-red-500 transition-all duration-150"
            style={{ width: `${volumePercentage}%` }}
          />
        </div>

        {/* Track Selector Button */}
        <Button
          onClick={() => setShowTrackList(!showTrackList)}
          variant="ghost"
          size="sm"
          className="h-8 w-8 flex-shrink-0 p-0 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Select track"
        >
          {showTrackList ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronUp className="h-4 w-4" />
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
