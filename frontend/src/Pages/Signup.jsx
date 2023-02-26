import React from "react";
import { TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useStates } from "../States";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { BiErrorCircle } from "react-icons/bi";
const Singup = () => {
  const {
    gotoLoginPage,
    SignUpWithPass,
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    signUpconfirmPassword,
    setSignUpconfirmPassword,
    username,
    setUsername,
    usernameError,
    emailError,
    passwordError,
    confirmPasswordError,
  } = useStates();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="flex w-screen h-screen p-24 justify-center items-center">
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
        className="text-base"
      />
      <div className="bg-white w-5/12 h-full flex justify-center items-center rounded-l-lg shadow-5xl ml-10 flex-col relative">
        <div className="font-alata flex items-center font-semibold text-4xl h-14 absolute top-3 left-0 ">
          <MusicNoteIcon fontSize="10px" className="text-mp-violet ml-2 " />
          <span className="text-mp-black">
            Mu<span className="text-mp-violet">sick</span>
          </span>
        </div>
        <div className="flex items-start flex-col mr-36 mt-10">
          <h1 className="text-3xl mb-2 font-semibold ">Join With Us</h1>
          <h4 className="text-xs text-slate-700">
            Welcome ! Please enter your details.
          </h4>
        </div>
        <form className="flex flex-col items-start mt-5 mr-12" onSubmit={SignUpWithPass}>
          <span className="mb-5 flex">
            <TextField
              className="w-72 mb-5"
              id="standard-basic1"
              label="Username"
              variant="standard"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && (
              <>
                <span className="group cursor-pointer flex absolute right-44  mt-4 justify-center items-center top-[170px]">
                  <p className="hidden group-hover:block border-spacing-1 text-mp-red text-base mr-36 absolute w-[200px] -left-40  ">
                    {usernameError}
                  </p>
                  <BiErrorCircle className="text-mp-red text-lg" />
                </span>
              </>
            )}
          </span>
          <span className="mb-5 ">
            <TextField
              className="w-72 mb-5 relative"
              id="standard-basic1"
              label="Email"
              variant="standard"
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
            />
            {emailError && (
              <>
               <span className="group cursor-pointer flex absolute right-44  mt-4 justify-center items-center top-[235px]">
                  <p className="hidden group-hover:block border-spacing-1 text-mp-red text-base mr-36 absolute w-[230px] -left-44 ">
                    {emailError}
                  </p>
                  <BiErrorCircle className="text-mp-red text-lg" />
                </span>
              </>
            )}
          </span>
          <span className="mb-5 ">
            <TextField
              className="w-72 mb-5 relative "
              id="standard-basic2"
              label="Password"
              variant="standard"
              type={"password"}
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
            />
            {passwordError && (
              <>
                <span className="group cursor-pointer flex absolute right-44  mt-4 justify-center items-center top-[300px]">
                  <p className="hidden group-hover:block border-spacing-1 text-mp-red text-base mr-36 absolute w-[200px] -left-36 ">
                    {passwordError}
                  </p>
                  <BiErrorCircle className="text-mp-red text-lg" />
                </span>
              </>
            )}
          </span>
          <span>
            <TextField
              className="w-72 relative"
              id="standard-basic3"
              label="Confirm Password"
              variant="standard"
              type={"password"}
              value={signUpconfirmPassword}
              onChange={(e) => setSignUpconfirmPassword(e.target.value)}
            />
            {confirmPasswordError && (
              <>
                <span className="group cursor-pointer flex absolute right-44  mt-4 justify-center items-center top-[370px]">
                  <p className="hidden group-hover:block border-spacing-1 text-mp-red text-base mr-36 absolute w-[300px] -left-52">
                    {confirmPasswordError}
                  </p>
                  <BiErrorCircle className="text-mp-red text-lg" />
                </span>
              </>
            )}
          </span>

          <span className="flex justify-between items-center mt-5 mr-10">
            <span className="relative right-2">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                size="small"
              />
            </span>
            <span className=" relative right-4 text-xs mr-5">I agree</span>
          </span>
          <span className="relative w-10/12 flex justify-center">
            <Button
              variant="contained"
              className="bg-mp-voilet"
              // onClick={SignUpWithPass}
              type="submit"
              disabled={!checked}
            >
              Sign Up
            </Button>
          </span>

          <div
            className="text-sm mt-6 ml-12 cursor-pointer duration-200 hover:scale-105"
            onClick={gotoLoginPage}
          >
            Already Have a Account ?
          </div>
        </form>
      </div>
      <div className="bg-white w-5/12 h-full shadow-xl mr-10  rounded-r-xl flex justify-center items-center shadow-90xl">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/917/376/original/working-on-music-by-musicians-web-template-cartoon-style-screen-web-template-for-mobile-phone-landing-page-template-ui-web-mobile-app-poster-banner-flat-illustration-vector.jpg"
          alt=""
          className="h-full rounded-r-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Singup;
