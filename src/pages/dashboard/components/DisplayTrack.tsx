import { BsMusicNoteBeamed } from "react-icons/bs";
import "../styles/index.css";
import "../styles/customize-progress-bar.css";
import { TrackType } from "../../../types";
import { FC } from "react";

type DisplayTrack = {
  currentTrack: TrackType;
  audioRef: any;
  setDuration: () => void;
  progressBarRef: any;
  handleNext: () => void;
};

const DisplayTrack: FC<DisplayTrack> = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    // @ts-ignore
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="audio-info">
        {/* <div className="audio-image"> */}
        {currentTrack.thumbnail ? (
          <div style={{ width: "72px", height: "72px" }}>
            <img
              src={currentTrack.thumbnail}
              alt="audio avatar"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="icon-wrapper">
            <span className="audio-icon">
              <BsMusicNoteBeamed />
            </span>
          </div>
        )}
        {/* </div> */}
        <div className="text flex items-center">
          <p className="text-xl text-[#282828] text-[19px] font-[500]">
            {currentTrack.title}
          </p>
          {/* <p className="text-xs">{currentTrack.author}</p> */}
        </div>
      </div>
    </div>
  );
};
export default DisplayTrack;
