import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import IconButton from "@mui/material/IconButton";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { IoShuffle } from "react-icons/io5";
import { RxLoop } from "react-icons/rx";
import { useStates } from "../States";
const Controls = () => {
  const {
    isPlay,
    isShuffle,
    setIsShuffle,
    isLoop,
    setIsLoop,
    togglePlayPause,
    nextSong,
    prevSong,
  } = useStates();
  return (
    <div className="flex text-mp-white cursor-pointer">
      <IconButton
        onClick={() => {
          setIsShuffle(!isShuffle);
          setIsLoop(false);
        }}
      >
        {isShuffle ? (
          <IoShuffle className="text-mp-violet mx-1" />
        ) : (
          <IoShuffle className="text-mp-white mx-1" />
        )}
      </IconButton>
      <IconButton sx={{ padding: "none" }}>
        <SkipPreviousIcon
          className=" text-mp-white mx-1"
          sx={{ padding: "none" }}
          fontSize="medium"
          onClick={prevSong}
        />
      </IconButton>
      <IconButton className="mx-1 text-mp-white text-xl">
        {isPlay ? (
          <PlayCircleIcon
            fontSize="large"
            className="mx-1 text-mp-white"
            onClick={togglePlayPause}
          />
        ) : (
          <PauseCircleIcon
            fontSize="large"
            className="mx-1 text-mp-white"
            onClick={togglePlayPause}
          />
        )}
      </IconButton>
      <IconButton>
        <SkipNextIcon
          className="mx-1 text-mp-white"
          sx={{ padding: "none" }}
          fontSize="medium"
          onClick={nextSong}
        />
      </IconButton>
      <IconButton
        onClick={() => {
          setIsLoop(!isLoop);
          setIsShuffle(false);
        }}
      >
        {isLoop ? (
          <RxLoop className="text-mp-violet mx-1 text-xl" />
        ) : (
          <RxLoop className="text-mp-white mx-1 text-xl" />
        )}
      </IconButton>
    </div>
  );
};

export default Controls;
