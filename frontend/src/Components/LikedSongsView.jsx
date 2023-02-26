import React from "react";
import { useState } from "react";
import { useStates } from "../States";
import Favorite from "@mui/icons-material/Favorite";
import { deepPurple } from "@mui/material/colors";
const LikedSongsView = () => {
  const { likedSongs, curSong, setCurSong, addAndRemoveLike } =
    useStates();
  const [select, setSelect] = useState(0);
  const clickedSong = (id) => {
    setSelect(id);
  };
  return (
    <div className="flex mt-4 text-mp-white flex-col mb-24">
      <div className="flex w-full text-xl font-alata">
        <p className="ml-10">#</p>
        <ul className="flex w-full justify-between px-36">
          <li>TITLE</li>
          <li className="ml-10">HERO</li>
          <li>ALBUM</li>
          <li></li>
        </ul>
      </div>
      <div className="">
        {likedSongs.map((song, i) => {
          return (
            <div
              key={i}
              onClick={() => clickedSong(song.id)}
              onDoubleClick={() => {
                setCurSong(song);
                setSelect(0);
              }}
              className={`flex pl-10 cursor-pointer my-2 items-center text-xl hover:bg-mp-light-black rounded-2xl p-2 ${
                curSong.id === song.id && "bg-mp-black"
              } ${select === song.id && "bg-mp-very-light-black"}`}
            >
              <p className="text-lg font-alata">{i + 1}</p>
              <img
                className="w-14 h-14 ml-7 rounded-full"
                src={song.img}
                alt=""
              />
              <div className="ml-4 w-3/12">
                <p
                  className={`text-base font-semibold font-alata tracking-wide ${
                    curSong.id === song.id && "text-mp-green"
                  } ${select === song.id && "text-mp-violet"}`}
                >
                  {song.title}
                </p>
                <p className="text-xs">
                  {song.music},{" " + song.lyricist},{" " + song.singer}
                </p>
              </div>
              <p className="ml-16 text-base font-bold w-3/12">{song.hero}</p>
              <p className="text-base font-semibold w-1/6">{song.movie}</p>
              <div
                onClick={() => {
                  addAndRemoveLike(song.id, true);
                }}
                className="cursor-pointer z-0"
              >
                <Favorite
                  className="text-mp-white ml-2"
                  sx={{
                    color: deepPurple[500],
                    "&.Mui-checked": {
                      color: deepPurple[500],
                    },
                  }}
                />
              </div>
              {curSong.id === song.id ? (
                <div className="w-14 pt-3 mr-3 h-14 absolute right-10">
                  <img
                    src="https://thumbs.gfycat.com/AcclaimedHeartfeltGoat-size_restricted.gif"
                    alt=""
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LikedSongsView;
