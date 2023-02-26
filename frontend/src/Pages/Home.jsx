import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "../Components/Banner";
import PlaylistContainer from "../Components/PlaylistContainer";
import RecentSongs from "../Components/RecentSongs";

const Home = () => {
  return (
    <div className="flex flex-col">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Banner />
      <div className="ml-64 mt-4 rounded-xl mr-4 max-xl:ml-48">
        <div className="flex">
          <RecentSongs />
          <PlaylistContainer/>
        </div>
        <div className="h-96 w-full">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
