import { useEffect, useRef, useState, FC } from "react";

import "../styles/index.css";
import "../styles/customize-progress-bar.css";

import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import { TrackType } from "../../../types";

type AudioPlayerType = {
  tracks: TrackType[];
  isPlaying: boolean;
  togglePlayPause: () => void;
  trackIndex: number;
  setTrackIndex: (index: number) => void;
  currentTrack: TrackType;
  setCurrentTrack: (track: TrackType) => void;
};

const AudioPlayer: FC<AudioPlayerType> = ({
  tracks,
  isPlaying,
  togglePlayPause,
  trackIndex,
  setTrackIndex,
  currentTrack,
  setCurrentTrack,
}) => {
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      // @ts-ignore
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  useEffect(() => {
    setCurrentTrack(tracks[trackIndex]);
  }, [tracks]);

  return (
    <>
      <div className="audio-player">
        {tracks.length > 0 ? (
          <div className="inner relative">
            <ProgressBar
              {...{ progressBarRef, audioRef, timeProgress, duration }}
            />
            {/* @ts-ignore */}
            <DisplayTrack
              {...{
                currentTrack,
                audioRef,
                setDuration,
                progressBarRef,
                handleNext,
              }}
            />
            <div className="absolute right-0 top-0 translate-y-full">
              {/*  @ts-ignore */}
              <Controls
                {...{
                  audioRef,
                  progressBarRef,
                  duration,
                  setTimeProgress,
                  tracks,
                  trackIndex,
                  setTrackIndex,
                  setCurrentTrack,
                  handleNext,
                  isPlaying,
                  togglePlayPause,
                }}
              />
            </div>
          </div>
        ) : (
          <div className="h-[74px] p-4">
            No Tracks to play, Add some to library
          </div>
        )}
      </div>
    </>
  );
};
export default AudioPlayer;
