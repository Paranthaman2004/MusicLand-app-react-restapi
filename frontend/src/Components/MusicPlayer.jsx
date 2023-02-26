import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useStates } from "../States";
const MusicPlayer = () => {
  const {
    audioRef,
    sliderRef,
    endMinutes,
    setEndMinutes,
    endSeconds,
    setEndSeconds,
    isLoop,
    curSong,
    curMinutes,
    setCurMinutes,
    curSeconds,
    setCurSeconds,
    nextSong,
    setRecentPlaySongs,
  } = useStates();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [curMilliSeconds, setCurMilliSeconds] = useState(0);
  useEffect(() => {
    const seconds = Math.floor(audioRef.current.duration);
    setDuration(seconds);
    sliderRef.current.max = seconds;
  }, [audioRef?.current?.loadedmetadata, audioRef?.current?.readyState]);

  const onLoadedMetadata = () => {
    setMinutes(Math.floor(audioRef.current.duration / 60));
    setSeconds((audioRef.current.duration % 60).toFixed(0));

    setEndMinutes(curMinutes - minutes);
    setEndSeconds(curSeconds - seconds);
  };
  const ontimeupdate = (event) => {
    setCurMilliSeconds(Math.floor(audioRef.current.currentTime));
    setCurMinutes(Math.floor(event.target.currentTime / 60));
    setCurSeconds((event.target.currentTime % 60).toFixed(0));

    sliderRef.current.value = audioRef.current.currentTime;

    setEndMinutes(curMinutes - minutes);
    setEndSeconds(curSeconds - seconds);
  };

  const changeRange = () => {
    audioRef.current.currentTime = sliderRef.current.value;
    sliderRef.current.style.setProperty(
      "--seek-before-width",
      `${(sliderRef.current.value / curMilliSeconds) * 100}%`
    );
  };
  return (
    <div className="flex justify-center items-center">
      <p className="text-sm font-normal text-mp-gray">
        {curMinutes + ":" + (curSeconds < 10 ? "0" : "") + curSeconds}
      </p>
      <Box width={300} className="mx-5">
        <input
          type="range"
          className="w-full"
          defaultValue="0"
          ref={sliderRef}
          onChange={changeRange}
        />
        {/* <Slider
              className="w-full"
              defaultValue="0"
              value={audioRef.current.currentTime}
              ref={sliderRef}
              onChange={changeRange}
            /> */}
      </Box>
      <audio
        className="h-10 mx-3"
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        src={curSong.url}
        onTimeUpdate={ontimeupdate}
        onLoadedData={onloadeddata}
        loop={isLoop}
        onEnded={() => {
          setRecentPlaySongs((song) => {
            return [curSong,...song];
          });
          nextSong();
        }}
        autoPlay
      ></audio>
      <p className="text-sm font-normal text-mp-gray">
        {endMinutes +
          ":" +
          (Math.abs(endSeconds) <= 9 ? "0" : "") +
          Math.abs(endSeconds)}
      </p>
    </div>
  );
};

export default MusicPlayer;
