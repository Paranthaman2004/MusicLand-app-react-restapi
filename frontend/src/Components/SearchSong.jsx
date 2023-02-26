import React,{useState} from "react";
import { useStates } from "../States";

const SearchSong = () => {
  const { likedSongs,setCurSong, curSong, setIsPlay } =
    useStates();
  const [select, setSelect] = useState(0);
  const clickedSong = (id) => {
    setSelect(id);
  };
//   const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
//   const newLikedSongs = shuffle(likedSongs);
  return (
    <div className="text-mp-white w-full text-xl ml-8">
      <p className="font-bold">Songs</p>
      <div className="h-80  bg-mp-light-black bg-opacity-30 w-5/6 max-xl:w-full mt-4 rounded-md py-2 ">
        {likedSongs.slice(0, 4).map((song, i) => {
          return (
            <div
              key={i}
              onClick={() => clickedSong(song.id)}
              onDoubleClick={() => {
                setCurSong(song);
                setIsPlay(false);
                setSelect(0);
              }}
              className={`flex my-1 cursor-pointer m-3 px-3 rounded-xl p-2 hover:bg-mp-light-black items-center ${
                curSong.id === song.id && "bg-mp-black"
              } ${select === song.id && "bg-mp-light-black"}`}
            >
              <img
                className="w-14 h-14 object-contain rounded-full"
                src={song.img}
                alt=""
              />
              <div className="flex flex-col justify-center ml-5 w-9/12">
                <p
                  className={`text-base font-semibold ${
                    curSong.id === song.id && "text-mp-green"
                  } ${select === song.id && "text-mp-violet"}`}
                >
                  {song.title}
                </p>
                <p className="text-xs">
                  {song.singer}, {song.lyricist}, {song.music}
                </p>
              </div>
              {curSong.id === song.id ? (
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

export default SearchSong;
