import { useAuthValue } from "../AuthContext";
import { useState, useEffect } from "react";
import { auth } from "../Api/firebase";
import { sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useStates } from "../States";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser } from "../Slice/userSlice";
import { Button } from "@mui/material";
import axios from "../Api/axios";
import SignupService from "../services/SignupService";

function VerifyEmail() {
  const dispatch = useDispatch();
  const { currentUser } = useAuthValue();
  const { username } = useStates();
  const user = useSelector(getUser);
  const [time, setTime] = useState(60);
  const { timeActive, setTimeActive } = useAuthValue();
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      currentUser
        ?.reload()
        .then(() => {
          if (currentUser?.emailVerified) {
            clearInterval(interval);
            SignupService.postUserDetails(currentUser.uid, {
                "uid": currentUser.uid,
                "displayName": username,
                "photoURL": "",
                "email": currentUser.email,
                "Premium":"false"
              })
              .then((res) => {
                // console.log(res);
              });
            dispatch(setUser(currentUser));
            navigate(`/home/${user?.uid}`);
            window.location.reload(false);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }, 1000);
  }, [navigate, currentUser]);

  useEffect(() => {
    let interval = null;
    if (timeActive && time !== 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setTimeActive(false);
      setTime(60);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeActive, time, setTimeActive]);

  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        setTimeActive(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="flex text-mp-white justify-center items-center h-screen text-xl">
      <div className="flex flex-col justify-center items-center">
        <h1>Verify your Email Address</h1>
        <p className="flex flex-col items-center mb-3">
          <strong>A Verification email has been sent to:</strong>
          <span>{currentUser?.email}</span>
        </p>
        <span>Follow the instruction in the email to verify your account</span>
        <div className="flex mt-8">
          <Button
            onClick={resendEmailVerification}
            disabled={timeActive}
            sx={{
              ":hover": {
                backgroundColor: "white",
              },
              backgroundColor: "gray",
              marginRight: "10px",
              display: "flex",
              color: "black",
              borderRadius: "5px",
            }}
          >
            Resend Email{" "}
          </Button>
          <span className="text-mp-violet"> {timeActive && time}</span>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
