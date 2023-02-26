import React from "react";
import { TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import SignWithGoogleImage from "../Asserts/btn_google_signin_light.png";
import { useStates } from "../States";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const Login = () => {
  const {
    handleLogin,
    gotoSignUpPage,
    email,
    password,
    setEmail,
    setPassword,
    SignInWithPass,
  } = useStates();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  
  return (
    <div className="flex flex-row-reverse w-screen h-screen p-24 justify-center items-center">
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
      <div className="bg-white w-5/12 h-full flex justify-center items-center rounded-r-lg shadow-5xl flex-col relative">
          <div className="font-alata flex items-center font-semibold text-4xl h-14 absolute top-3 left-0">
            <MusicNoteIcon fontSize="10px" className="text-mp-violet ml-2 " />
            <span className="text-mp-black">
              Mu<span className="text-mp-violet">sick</span>
            </span>
          </div>
        <div className="flex items-start flex-col mr-36">
          <h1 className="text-3xl mb-2 font-semibold ">Welcome back</h1>
          <h4 className="text-xs text-slate-700">
            Welcome back! Please enter your details.
          </h4>
        </div>
        <form className="flex flex-col items-start mt-5" onSubmit={SignInWithPass}>
          <span className="mb-5 ">
            <TextField
              className="w-72 mb-5"
              id="standard-basic"
              label="Email"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
          <TextField
            className="w-72"
            id="standard-basic"
            label="Password"
            variant="standard"
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="flex justify-between items-center mt-5 mr-10">
            <span className="relative right-2">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                size="small"
              />
            </span>
            <span className=" relative right-4 text-xs mr-5">
              Remeber me for 30 days
            </span>
            <a href="/" className="text-base text-blue">
              forget password?
            </a>
          </span>
          <span className="relative w-10/12 flex justify-center">
            <Button
              variant="contained"
              className="bg-mp-voilet"
              // onClick={SignInWithPass}
              type="submit"
            >
              Sign In
            </Button>
          </span>
          <div className="w-10/12 mt-4 ml-5 " onClick={handleLogin}>
            <img
              className="h-12 w-10/12 cursor-pointer duration-500 hover:scale-105"
              src={SignWithGoogleImage}
              alt=""
            />
          </div>
          <div
            className="text-sm mt-6 ml-20 cursor-pointer duration-200 hover:scale-105"
            onClick={gotoSignUpPage}
          >
            Create New Account ?
          </div>
        </form>
      </div>
      <div className="bg-white w-5/12 h-full shadow-xl rounded-l-xl flex justify-center items-center shadow-90xl">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/917/376/original/working-on-music-by-musicians-web-template-cartoon-style-screen-web-template-for-mobile-phone-landing-page-template-ui-web-mobile-app-poster-banner-flat-illustration-vector.jpg"
          alt=""
          className="h-full rounded-l-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Login;
