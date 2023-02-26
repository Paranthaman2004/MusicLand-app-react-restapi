import React, { useState } from "react";
import { useStates } from "../States";

const RecentSongs = () => {
  const {
    setCurSong,
    curSong,
    setIsPlay,
    recentPlaySongs,
  } = useStates();
  const [select, setSelect] = useState(0);
  const clickedSong = (id) => {
    setSelect(id);
  };
  return (
    <div className="w-10/12 relative flex flex-col rounded-lg text-mp-white bg-mp-very-light-black h-96 overflow-scroll p-2">
      <div className="flex items-center absolute bg-mp-very-light-black">
        <img
          className="w-16 object-contain"
          src="https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/ziegel/recently-played.png"
          alt=""
        />
        <p className="text-xl ml-4 font-alata">Recently Played Songs</p>
      </div>
      <div className="my-3 mt-16">
        {recentPlaySongs.map((recentPlaySong, i) => {
          return (
            <div
              key={i}
              onClick={() => clickedSong(recentPlaySong.id)}
              onDoubleClick={() => {
                setCurSong(recentPlaySong);
                setIsPlay(false);
                setSelect(0)
              }}
              className={`flex my-1 py-2 cursor-pointer pl-3 rounded-xl hover:bg-mp-light-black items-center ${
                curSong.id === recentPlaySong.id && "bg-mp-black"
              } ${select===recentPlaySong.id && "bg-mp-light-black"}`}
            >
              <img
                className="w-14 h-14 object-contain rounded-full"
                src={recentPlaySong.img}
                alt=""
              />
              <div className="flex flex-col justify-center ml-5 w-9/12">
                <p
                  className={`text-base font-semibold ${
                    curSong.id === recentPlaySong.id && "text-mp-green"
                  } ${select===recentPlaySong.id && "text-mp-violet"}`}
                >
                  {recentPlaySong.title}
                </p>
                <p className="text-xs">
                  {recentPlaySong.singer}, {recentPlaySong.lyricist},{" "}
                  {recentPlaySong.music}
                </p>
              </div>
              {curSong.id === recentPlaySong.id ? (
                <div className="w-14 pt-3 mr-3 h-14">
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

export default RecentSongs;
