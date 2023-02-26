import React, { useEffect, useState } from "react";
import { useStates } from "../States";
import { IoMdClose } from "react-icons/io";
import axios from "../Api/axios";
import { FiEdit } from "react-icons/fi";
import Tooltip from "@material-ui/core/Tooltip";
import { RiFullscreenFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";

const ViewHeroSongs = () => {
  const {
    viewHero,
    setIsViewHero,
    setCurSong,
    setIsPlay,
    setViewHero,
    ViewSong,
    curSong,
    setEditSong,
    setIsViewSong
  } = useStates();
  const [heroSongs, setHeroSongs] = useState([]);
  const CloseViewHero = () => {
    setIsViewHero(false);
  };
  const [heroImg, setHeroImg] = useState("");
  const [heroName, setHeroName] = useState("");
  const [select, setSelect] = useState(0);

  const clickedSong = (id) => {
    setSelect(id);
  };

  const navigate = useNavigate();
  const gotoEditSong = (song) => {
    axios.get(`/songs/${song.id}`).then((res) => {
      setEditSong(res.data);
    });
    navigate(`/admin/editsong/${song.title}`);
  };
  useEffect(() => {
    setHeroImg(viewHero.img);
    setHeroName(viewHero.name);
    getHeroSongs(viewHero.name);
  }, [viewHero]);
  const getHeroSongs = (heroName) => {
    axios.get(`/songs/hero/${heroName}`).then((res) => {
      setHeroSongs(res.data);
    });
  };
  return (
    <div className="flex justify-center items-center w-[100vw] fixed h-[100vh]">
      <div className="absolute h-4/6 bg-mp-white w-6/12 rounded-lg shadow-6xl text-mp-white p-5">
        <span
          className="float-right text-3xl cursor-pointer text-mp-black"
          onClick={() => {
            setIsViewHero(false);
            CloseViewHero();
            setViewHero({});
          }}
        >
          <IoMdClose />
        </span>
        <div className="p-5 flex">
          <div className="">
            <img
              src={heroImg}
              className="h-40 w-40 object-contain rounded-md shadow-xl"
              alt=""
            />
          </div>
          <div className=" ml-10">
            <p className="text-4xl text-mp-black font-bold font-alata  italic tracking-wide">
              {heroName}
            </p>
          </div>
        </div>
        <div className="h-[300px] overflow-scroll">
          <div className="flex w-full text-xl font-alata text-mp-black">
            <p className="ml-10">#</p>
            <ul className="flex w-full justify-between px-36">
              <li>TITLE</li>
              <li className="">ALBUM</li>
              <li></li>
            </ul>
          </div>
          {heroSongs.map((song, i) => {
            return (
              <div
                key={i}
                onClick={() => clickedSong(song.id)}
                onDoubleClick={() => {
                  setCurSong(song);
                  setSelect(0);
                  setIsPlay(false);
                }}
                className={`flex pl-10 cursor-pointer my-2 bg-mp-very-light-black items-center text-xl hover:bg-mp-black rounded-2xl p-2 m-3 ${
                  curSong.id === song.id && "bg-mp-black"
                } ${select === song.id && "bg-mp-very-light-black"}`}
              >
                <p className="text-lg  font-alata" >
                  {`${i + 1}`}
                </p>
                <img
                  className="w-14 h-14 ml-7 rounded-full"
                  src={song.img}
                  alt=""
                />
                <div className="ml-4 mr-4 w-2/6">
                  <p
                    className={`text-base font-semibold font-alata tracking-wide ${
                      curSong.id === song.id && "text-mp-green"
                    } ${select === song.id && "text-mp-violet"}`}
                  >
                    {song.title}
                  </p>
                </div>
                <p className="text-base font-semibold w-2/6">
                  <span className="hover:underline">{song.movie}</span>
                </p>
                <Tooltip title="Edit" placement="top" arrow>
                  <p
                    onClick={() => gotoEditSong(song)}
                    className="flex justify-center items-center text-xl p-2 bg-mp-light-black duration-200 hover:bg-mp-violet rounded-lg"
                  >
                    <FiEdit />
                  </p>
                </Tooltip>
                {/* <Tooltip title="View" placement="top" arrow>
                  <p
                    onClick={() => {ViewSong(song);setIsViewSong(true)}}
                    className="ml-16 flex justify-center items-center text-xl p-2 bg-mp-light-black duration-100 hover:bg-mp-white hover:text-mp-black rounded-lg"
                  >
                    <RiFullscreenFill />
                  </p>
                </Tooltip> */}
                {curSong.id === song.id ? (
                  <div className="w-14 pt-3 mr-3 h-14 absolute right-7">
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
    </div>
  );
};

export default ViewHeroSongs;
