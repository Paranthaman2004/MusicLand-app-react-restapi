import React from "react";
import { useStates } from "../States";
import { IoMdClose } from "react-icons/io";
const ViewSongInAdmin = () => {
  const { viewSong, setIsViewSong, setCurSong, setIsPlay } = useStates();
  const CloseViewSong = () => {
    setIsViewSong(false);
  };
  return (
    <div className="flex justify-center items-center w-[100vw] fixed h-[100vh]">
      <div className="absolute h-4/6 bg-mp-white w-6/12 rounded-lg shadow-6xl text-mp-black p-5">
        <span
          className="float-right text-3xl cursor-pointer"
          onClick={() => CloseViewSong()}
        >
          <IoMdClose />
        </span>
        <div className="p-5 flex">
          <div className="">
            <img
              src={viewSong.img}
              className="h-40 w-40 object-contain rounded-md shadow-xl"
              alt=""
            />
          </div>
          <div className=" ml-10">
            <p className="text-4xl font-bold font-alata  italic tracking-wide">
              {viewSong.title}
            </p>
            <span className="text-4xl font-bold font-alata">
              from{"  "}
              <span className="italic underline">{viewSong.movie}</span>
            </span>
            <p>
              <button
                className="p-1 px-5 rounded-3xl bg-mp-violet font-alata hover:bg-mp-green duration-200 text-mp-white mt-7"
                onClick={() => {
                  setCurSong(viewSong);
                  setIsPlay(false);
                  CloseViewSong();
                }}
              >
                PLAY
              </button>
            </p>
          </div>
        </div>
        <div className="px-5">
          <table className="w-full text-[21px] my-2">
            <tr className="h-10" >
              <td className="font-poppins">Hero</td>
              <td className="font-alata">{viewSong.hero}</td>
            </tr>
            <tr className="h-10">
              <td className="font-poppins">Music</td>
              <td className="font-alata">{viewSong.music}</td>
            </tr>
            <tr className="h-10">
              <td className="font-poppins">Lyricist</td>
              <td className="font-alata">{viewSong.lyricist}</td>
            </tr>
            <tr className="h-10">
              <td className="font-poppins">Singer</td>
              <td className="font-alata">{viewSong.singer}</td>
            </tr>
            <tr className="h-10">
              <td className="font-poppins">Language</td>
              <td className="font-alata">{viewSong.language}</td>
            </tr>
            <tr className="h-10">
              <td className="font-poppins">Mode</td>
              <td className="font-alata">{viewSong.mode}</td>
            </tr>
            <tr className="h-10">
              <td className="font-poppins">Year</td>
              <td className="font-alata">{viewSong.year}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewSongInAdmin;
