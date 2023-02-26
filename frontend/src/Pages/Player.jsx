import React from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { deepPurple } from "@mui/material/colors";
import Controls from "../Components/Controls";
import { useStates } from "../States";
import MusicPlayer from "../Components/MusicPlayer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../Api/axios";
import { useSelector } from "react-redux";
import { getUser } from "../Slice/userSlice";
const Player = () => {
  const { isPlay, curSong,addAndRemoveLike,uid } = useStates();
  const [isFav, setIsFav] = useState(false);
  const user = useSelector(getUser)
  useEffect(() => {
    setIsFav(false);
    axios.get(`/likedsongs/${uid}/${curSong.id}`).then((res) => {
      setIsFav(res.data);
    });
  }, [curSong]);
  return (
    <div className="w-full pl-10 h-24 left-38 bg-mp-light-black bottom-0 fixed">
      <div className="h-full flex items-center absolute left-5">
        <div
          className={`${
            !isPlay ? `animate-[spin_10s_linear_infinite]` : ""
          } hidden sm:block h-16 w-16 mr-4`}
        >
          <img className="h-16 w-16 rounded-full" src={curSong.img} alt="" />
        </div>
        <div
          onClick={() => {
            addAndRemoveLike(curSong.id,isFav);
            setIsFav(!isFav);
          }}
          className="cursor-pointer z-50"
        >
          {!isFav ? (
            <FavoriteBorder className="text-mp-white ml-2" />
          ) : (
            <Favorite
              className="text-mp-white ml-2"
              sx={{
                color: deepPurple[500],
                "&.Mui-checked": {
                  color: deepPurple[500],
                },
              }}
            />
          )}
        </div>

        <div className="text-base flex flex-col text-mp-white ml-3">
          <p className="font-alata">{curSong.title}</p>
          <p className="text-xs text-mp-gray">
            {curSong.movie}, {curSong.music}, {curSong.lyricist}
          </p>
        </div>
      </div>
      <div className=" relative w-full flex flex-col justify-center items-center">
        <Controls />
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Player;
