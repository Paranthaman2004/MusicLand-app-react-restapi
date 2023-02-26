import React from "react";
import { useStates } from "../States";

const Banner = () => {
  const {songs, bannerSong ,setCurSong,setIsPlay,setBannerSong,songsCopy, setSongs} = useStates();
  const changeBanner=()=>{
    if(songs?.length!==0)
        setBannerSong(songs[Math.floor(Math.random() * songs.length)]);
  }

  return (
      <div className="ml-64 mt-5 flex bg-mp-light-black rounded-xl h-64 p-4 mr-4 relative max-xl:ml-48">
      <img className="h-full w-60 rounded-md" src={bannerSong?.img} alt="" />
      <div className="flex flex-col text-mp-white">
        <p className="ml-5 text-5xl font-semibold">
          <span className="font-alata italic">{bannerSong?.title}</span>{" "}
          <p className="text-4xl">
            (From{" "}
            <span className="underline cursor-pointer">
              {bannerSong?.movie}
            </span>
            )
          </p>
        </p>
        <p className="text-base text-mp-gray mt-5 ml-7">
          <span className="text-mp-white text-xl mr-1">•</span>
          {bannerSong?.hero}
          <span className="text-mp-white text-xl ml-3 mr-1">•</span>
          {bannerSong?.music}
          <span className="text-mp-white text-xl ml-3 mr-1">•</span>
          {bannerSong?.lyricist}
          <span className="text-mp-white text-xl ml-3 mr-1">•</span>
          {bannerSong?.singer}
        </p>
        <div className="absolute bottom-7 pl-10">
            <button className="p-1 px-5 rounded-3xl bg-mp-violet font-alata" onClick={()=>{setCurSong(bannerSong);setIsPlay(false);changeBanner();setSongs(songsCopy)}}>PLAY</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
