import React, { useEffect, useState } from "react";
import { useStates } from "../States";
import { BsFillPlayFill } from "react-icons/bs";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Tooltip from "@material-ui/core/Tooltip";
import { BsPlusCircleDotted } from "react-icons/bs";
import axios from "../Api/axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RiFullscreenFill } from "react-icons/ri";
import ViewSongInAdmin from "../Components/ViewSongInAdmin";
import ViewHeroSongs from "../Components/ViewHeroSongs";
import ViewMovieSongs from "../Components/ViewMovieSongs";
const ViewAllSong = () => {
  const {
    curSong,
    setCurSong,
    setIsPlay,
    gotoAddSong,
    setEditSong,
    setViewSong,
    setIsViewSong,
    isViewSong,
    isViewHero,
    setIsViewHero,
    setViewHero,
    setIsViewMovie,
    isViewMovie,
    setViewMovie,
    allSongsjson,
  } = useStates();
  const [select, setSelect] = useState(0);
  const [allSongs, setAllSongs] = useState([]);
  const clickedSong = (id) => {
    setSelect(id);
  };
  const getAllSongs = () => {
    fetch("http://localhost:8081/songs/allsongs")
      .then((res) => res.json())
      .then((result) => {
        setAllSongs(result);
      });
      if (allSongs.length === 0) setAllSongs(allSongsjson);
  };
  useEffect(() => {
    getAllSongs();
  }, []);
  const DeleteSong = (id) => {
    axios.delete(`/songs/deletesong/${id}`).then((res) => {
      if (res.data.includes("Successfully")) toast.success(res.data);
      else toast.error(res.data);
      getAllSongs();
    });
  };
  const navigate = useNavigate();
  const gotoEditSong = (song) => {
    axios.get(`/songs/${song.id}`).then((res) => {
      setEditSong(res.data);
    });
    navigate(`/admin/editsong/${song.title}`);
  };
  const ViewSong = (song) => {
    setViewSong(song);
    setIsViewSong(true);
  };
  const getHeroDetail = (hero) => {
    axios.get(`/artists/name/${hero}`).then((res) => {
      setViewHero(res.data);
    });
  };
  return (
    <div className="flex flex-col text-mp-white mb-24">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        className="text-base"
      />
      <div className="">
        {isViewSong && <ViewSongInAdmin />}
        {isViewHero && <ViewHeroSongs />}
        {isViewMovie && <ViewMovieSongs />}
      </div>
      <div className="font-alata flex items-center font-semibold text-4xl mt-10 absolute">
        <MusicNoteIcon
          className="text-mp-green ml-2"
          sx={{ fontSize: "35px" }}
        />
        <span className="text-mp-white">
          Mu<span className="text-mp-violet">sick</span>
        </span>
      </div>
      <h2 className="font-alata text-4xl flex justify-center font-bold mt-6">
        All Songs
      </h2>
      <div
        onClick={() => {
          gotoAddSong();
          setIsViewSong(false);
        }}
        className="flex text-xl justify-center items-center absolute right-10 top-10 cursor-pointer bg-mp-light-black rounded-lg hover:bg-mp-green p-2"
      >
        <BsPlusCircleDotted />
        <span className="ml-2 cursor-pointer">Add Song</span>
      </div>
      <div className="flex w-full text-xl font-alata mt-16">
        <p className="ml-10">#</p>
        <ul className="flex w-full justify-between px-36">
          <li>TITLE</li>
          <li className="-ml-10">HERO</li>
          <li className="-ml-16">ALBUM</li>
          <li></li>
        </ul>
      </div>
      {allSongs?.map((song, i) => {
        return (
          <div
            key={i}
            onClick={() => clickedSong(song.id)}
            onDoubleClick={() => {
              setCurSong(song);
              setSelect(0);
              setIsPlay(false);
            }}
            className={`flex pl-10 cursor-pointer my-2 items-center text-xl hover:bg-mp-light-black rounded-2xl p-2 m-3 ${
              curSong.id === song.id && "bg-mp-black"
            } ${select === song.id && "bg-mp-very-light-black"}`}
          >
            <p className="text-lg -ml-3 font-alata absolute">
              {select === song.id ? <BsFillPlayFill /> : `${i + 1}`}
            </p>
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
            <p className="ml-16 text-base font-bold w-3/12">
              <span
                className="hover:underline"
                onClick={() => {
                  setIsViewHero(true);
                  getHeroDetail(song.hero);
                }}
              >
                {song.hero}
              </span>
            </p>
            <p className="text-base font-semibold w-1/6">
              <span
                className="hover:underline"
                onClick={() => {
                  setIsViewMovie(true);
                  setViewMovie(song);
                }}
              >
                {song.movie}
              </span>
            </p>
            <Tooltip title="Edit" placement="top" arrow>
              <p
                onClick={() => gotoEditSong(song)}
                className="flex justify-center items-center text-xl p-2 bg-mp-light-black duration-200 hover:bg-mp-violet rounded-lg"
              >
                <FiEdit />
              </p>
            </Tooltip>
            <Tooltip title="Delete" placement="top" arrow>
              <p
                onClick={() => DeleteSong(song.id)}
                className="ml-16 flex justify-center items-center text-xl p-2 bg-mp-light-black duration-100 hover:bg-mp-red rounded-lg"
              >
                <MdDelete />
              </p>
            </Tooltip>
            <Tooltip title="View" placement="top" arrow>
              <p
                onClick={() => ViewSong(song)}
                className="ml-16 flex justify-center items-center text-xl p-2 bg-mp-light-black duration-100 hover:bg-mp-white hover:text-mp-black rounded-lg"
              >
                <RiFullscreenFill />
              </p>
            </Tooltip>
            {curSong.id === song.id ? (
              <div className="w-14 pt-3 mr-3 h-14 absolute right-2">
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
  );
};

export default ViewAllSong;
