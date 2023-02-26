import React from "react";
import "react-image-picker-editor/dist/index.css";
import { useStates } from "../States";
import { BiPencil } from "react-icons/bi";
import axios from "../Api/axios";
const { Uploader } = require("uploader");
const Profile = () => {
  const uploader = Uploader({
    // Get production API keys from Upload.io
    apiKey: "free",
  });
  const { user, img, setImg, username,isPremium,uid,email,password } = useStates();

  const uploadFiles = () => {
    uploader.open({ maxFileCount: 1 }).then((files) =>
      files.length === 0
        ? ""
        : axios
            .put(`/users/updateuser/${uid}`, {
              "uid": uid,
              "displayName": username,
              "photoURL": `\n\n${files.map((x) => x.fileUrl).join("\n").replace("?w=600&h=600&fit=max&q=70","")}`,
              "email": email,
              "Premium":isPremium,
              "password":password
            })
            .then((res) => {
              // console.log(res);
              axios.get(`/login/${uid}`).then((res1) => {
                setImg(res1.data.photoURL);
              });
            })
            );
  };

  return (
    <div className="flex ml-64 mt-10 w-44 h-44cursor-pointer hover:bg-blend-darken rounded-full">
      <img
        src={img}
        alt="img"
        className=" relative w-44 h-44 cursor-pointer rounded-full"
      />
      <>
        <div
          onClick={uploadFiles}
          className="flex justify-center items-center absolute w-44 h-44  hover:bg-mp-light-black  cursor-pointer hover:bg-blend-darken rounded-full bg-black opacity-50 transition-opacity duration-500 group-hover:opacity-80"
        >
          <p className="text-mp-white z-50 absolute">
            <BiPencil />
          </p>
        </div>
      </>
    </div>
  );
};

export default Profile;
