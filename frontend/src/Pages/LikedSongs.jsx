import React from "react";
import LikedSongBanner from "../Components/LikedSongBanner";
import LikedSongsView from "../Components/LikedSongsView";

const LikedSongs = () => {
  return (
    <div className="ml-64 mt-2 mr-4">
      <LikedSongBanner />
      <LikedSongsView/>
    </div>
  );
};

export default LikedSongs;
