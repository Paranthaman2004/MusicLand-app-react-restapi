import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../Slice/userSlice";
import { useStates } from "../States";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { VscLibrary } from "react-icons/vsc";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import logo  from '../Asserts/logo-no-background.png'
const Navbar = () => {
  // const user = useSelector(getUser);
  const { handleLogout,user } = useStates();
  const {
    gotoLoginPage,
    gotoSearchPage,
    gotoHomePage,
    gotoProfilePage,
    img,
    username,
    gotoLikedSongsPage,
    // handleCheck
  } = useStates();
  return (
    <>
      <div className="h-screen bg-mp-violet w-60 fixed max-xl:w-40">
        <div className="font-alata flex items-center font-semibold text-2xl h-14 absolute">
          {/* <MusicNoteIcon className="text-mp-green ml-2" /> */}
          <span className="text-mp-white">
            {/* Mu<span className="text-mp-green">sic</span> */}
            <img className="w-52 object-contain -ml-5" src={logo} alt="" />
          </span>
        </div>
        {/* {user == null ? (
          <div className="ml-32 mt-2">
            <Button
              className="text-mp-white"
              variant="contained"
              onClick={gotoLoginPage}
            >
              LogIn
            </Button>
          </div>
        ) : ( */}
          <div className="flex flex-col justify-between items-center h-full py-10 my-7">
            <div className="">
              <ul
                // role={"list"}
                className="text-base flex flex-col my-4 mr-16 duration-300 max-xl:justify-center max-xl:ml-16"
              >
                <li
                  onClick={gotoHomePage}
                  className=" text-mp-gray flex justify-evenly items-center text-xl w-30 duration-300 cursor-pointer hover:text-mp-white"
                >
                  <HomeIcon />
                  <p className="max-xl:hidden duration-300">Home</p>
                </li>
                <li
                  onClick={gotoSearchPage}
                  className="mt-4 text-mp-gray flex justify-evenly items-center text-xl w-30 duration-300 cursor-pointer hover:text-mp-white"
                >
                  <SearchOutlinedIcon />
                  <p className="max-xl:hidden duration-300">Search</p>
                </li>
                <li className="mt-4 text-mp-gray flex justify-evenly items-center text-xl w-30 duration-300 cursor-pointer hover:text-mp-white">
                  <VscLibrary />
                  <p className="max-xl:hidden duration-300">Library</p>
                </li>
              </ul>
              <ul>
                <li className="mt-7  text-mp-gray flex justify-evenly items-center text-xl w-44 duration-300 cursor-pointer hover:text-mp-white">
                  <AddBoxIcon />
                  <p className="max-xl:hidden duration-300">Create Playlist</p>
                </li>
                <li
                  onClick={gotoLikedSongsPage}
                  className="mt-4 pr-3 max-xl:pl-3 text-mp-gray flex justify-evenly items-center text-xl w-44 duration-300 cursor-pointer hover:text-mp-white"
                >
                  <FavoriteIcon />
                  <p className="max-xl:hidden duration-300">Liked Songs</p>
                </li>
              </ul>
            </div>
            <div className="flex items-center mb-24 flex-col">
              <Button
                className="text-mp-white"
                variant="contained"
                onClick={handleLogout}
              >
                Logout
              </Button>
              <div className="flex justify-center items-center mt-5">
                <img src={img} className="h-14 w-14 rounded-full" alt="" />
                <div className="flex items-start flex-col ml-3 duration-300 max-xl:hidden">
                  <p className="text-base text-mp-white">
                    {username?.length < 14
                      ? username
                      : username?.slice(0, 13) + "..."}
                  </p>
                  <p
                    className="text-mp-light-black text-sm cursor-pointer"
                    onClick={gotoProfilePage}
                  >
                    view profile
                  </p>
                </div>
              </div>
            </div>
          </div>
        {/* )} */}
      </div>
    </>
  );
};

export default Navbar;
