import { Button } from "@mui/material";
import React from "react";
import { useStates } from "../States";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const LikedSongBanner = () => {
  const { img, username, gotoProfilePage, likedSongs,setSongs,setCurSong,songs } = useStates();
  return (
    <div className="flex bg-gradient-to-b from-mp-very-light-black  to-mp-violet w-full  p-10 rounded-3xl items-center">
      <img
        className="h-60"
        src="http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/ziegel/liked-songs.png"
        alt=""
      />
      <div className="flex flex-col ml-10 text-mp-white font-alata">
        <span className="text-lg mt-8">PLAYLIST</span>
        <p className="text-8xl font-semibold  ">Liked Songs</p>
        <div className="flex mt-9 items-center">
          <img className="h-10 rounded-full" src={img} alt="" />
          <p
            onClick={gotoProfilePage}
            className="text-xl ml-2 hover:underline cursor-pointer"
          >
            {username.length < 13 ? username : username.slice(0, 13) + " ..."}
          </p>
          <p className="text-base ml-4">{likedSongs.length} songs</p>
        </div>
      </div>
      <div className="ml-20">
        <Button onClick={()=>{setSongs(likedSongs);setCurSong(songs[Math.floor(Math.random() * songs.length)])}} sx={{backgroundColor:'#1fdf64'}} className="p-4 w-20 h-12 border-spacing-1 border-mp-white">
          <PlayCircleIcon className="text-mp-violet text-xl" />
          <span className="text-mp-white ml-2">Play</span>
        </Button>
      </div>
    </div>
  );
};

export default LikedSongBanner;
