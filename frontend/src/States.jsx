import { createContext, useContext, useEffect, useState, useRef } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, provider } from "./Api/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, getUser, logout } from "./Slice/userSlice";
import { toast } from "react-toastify";
import { useAuthValue } from "./AuthContext";
import axios from "./Api/axios";
import songServices from "./services/SongServices";
import LikedSongService from "./services/LikedSongService";
import LoginServices from "./services/LoginServices";
import SignupService from "./services/SignupService";
import allsongsjson from './songDB.json'
const Context = createContext();
export const States = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Login
  const user = useSelector(getUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Player

  const [songs, setSongs] = useState([]);
  const [songsCopy, setSongsCopy] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);
  const [isPlay, setIsPlay] = useState(true);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isLoop, setIsLoop] = useState(false);

  // const [curSongIndex, setCurSongIndex] = useState(0);
  const [curSong, setCurSong] = useState({});
  const audioRef = useRef();
  const sliderRef = useRef();
  const [endMinutes, setEndMinutes] = useState(0);
  const [endSeconds, setEndSeconds] = useState(0);

  const [curMinutes, setCurMinutes] = useState(0);
  const [curSeconds, setCurSeconds] = useState(0);
  // SignUp Variables
  const [username, setUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpconfirmPassword, setSignUpconfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [addFav, setAddFav] = useState(false);
  const [search, setSearch] = useState("");
  const [recentPlaySongs, setRecentPlaySongs] = useState([]);
  const [bannerSong, setBannerSong] = useState({});
  const [isPremium, setIsPremium] = useState("false");
  const [uid, setUid] = useState("");
  const [editSong, setEditSong] = useState();
  const [viewSong, setViewSong] = useState({});
  const [viewHero, setViewHero] = useState({});
  const [viewMovie, setViewMovie] = useState({});
  const [isViewSong, setIsViewSong] = useState(false);
  const [isViewHero, setIsViewHero] = useState(false);
  const [isViewMovie, setIsViewMovie] = useState(false);
  const [img, setImg] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZJYp5k4BrOGGYJXcBXtsa20lAMvfs6ifFw&usqp=CAU"
  );

  const validatePassword = () => {
    setUsernameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    if (!username.trim()) {
      setUsernameError("UserName is required!");
    }
    if (!signUpEmail.trim()) {
      setEmailError("Email is required!");
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(signUpEmail)
    ) {
      setEmailError("Email Address is Invalid!");
    }
    if (!signUpPassword.trim()) {
      setPasswordError("Password is required!");
    } else if (signUpPassword.length < 6) {
      setPasswordError("Password needs to be 6 Characters or more!");
    }
    if (!signUpconfirmPassword.trim()) {
      setConfirmPasswordError("Confirm Password is required!");
    } else if (signUpPassword !== signUpconfirmPassword) {
      setConfirmPasswordError("Passwords do not Match!");
    }
  };
  const gotoSignUpPage = () => {
    navigate("/signup");
  };

  const gotoLoginPage = () => {
    setUsernameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    navigate("/");
  };

  const gotoHomePage = () => {
    navigate(`/home/${uid}`);
  };

  const gotoProfilePage = () => {
    navigate("/profile");
  };

  const gotoLikedSongsPage = () => {
    navigate("/likedsongs");
  };

  const gotoAddSong = () => {
    navigate("/admin/addsong");
  };

  const gotoEditSong = (id) => {
    navigate(`/admin/editsong/${id}`);
  };
  //Sign in with Google Account
  const [isExist, setIsExist] = useState(false);
  const handleLogin = async () => {
    const response = await signInWithPopup(auth, provider);
    console.log(response);
    navigate(`/home/${response.user.uid}`);
    try {
      axios.get(`/login/isexistuser/${response.user.uid}`).then((res1) => {
        setIsExist(res1.data);
      });
    } catch (error) {}
    if (isExist) {
      LoginServices.getLoginUser(response.user.uid).then((res) => {
        response.user.photoURL = res.data.photoURL;
        setImg(res.data?.photoURL);
        setUsername(res.data?.displayName);
        setIsPremium(res.data?.isPremium);
        setUid(res.data?.uid);
      });
    } else {
      await SignupService.postUserDetails(response.user?.uid, {
        uid: response.user?.uid,
        displayName: response.user?.displayName,
        photoURL: response.user?.photoURL,
        email: response.user?.email,
        Premium: "false",
      }).then((res) => {
        // console.log(res);
      });
      setUid(response.user?.uid);
      setImg(response.user?.photoURL);
      setUsername(response.user?.displayName);
      await LikedSongService.getAllLikedSongs(response?.user.uid)
        .then((res) => {
          setLikedSongs(res.data);
        })
        .catch((err) => {
          // console.log(err.response);
        });
    }
    // console.log(isPremium);

    dispatch(setUser(response.user));
  };
  //Logout Account
  const handleLogout = async () => {
    dispatch(logout());
    await signOut(auth);
    setEmail("");
    setPassword("");
    setSignUpEmail("");
    setSignUpPassword("");
    setSignUpconfirmPassword("");
    setIsPlay(true);
    setIsPremium("false");
    navigate("/");
  };
  //Get all songs UseEffect
  useEffect(() => {
    const getSongs = async () => {
      songServices
        .getAllSongs()
        .then((res) => {
          setSongs(res.data);
          setSongsCopy(res.data);
        })
        .catch((err) => {
          // console.log(err.response);
        });
    };
    getSongs();
    const getLikedSongs = async () => {
      await LikedSongService.getAllLikedSongs(uid)
        .then((res) => {
          setLikedSongs(res.data);
        })
        .catch((err) => {
          // console.log(err.response);
        });
    };
    getLikedSongs();
    if(songs.length===0)
      setSongs(allsongsjson)
  }, []);
  useEffect(() => {
    if (songs.length !== 0)
      setCurSong(songs[Math.floor(Math.random() * songs.length)]);
  }, [songs]);

  const getLikedSongs = async () => {
    await LikedSongService.getAllLikedSongs(uid)
      .then((res) => {
        setLikedSongs(res.data);
      })
      .catch((err) => {
        // console.log(err.response);
      });
  };
  const addAndRemoveLike = (songid, isFav) => {
    if (!isFav) {
      axios.post(`/likedsongs/add/${uid}`, {
        songId: songid,
        uid: uid,
      });
      getLikedSongs();
    } else {
      axios.delete(`/likedsongs/delete/${uid}/${songid}`).then((res) => {
        // console.log(res);
      });
      getLikedSongs();
    }
    setAddFav(!addFav);
    getLikedSongs();
    getLikedSongs();
  };
  //When page Refreash but no Logout [Use Effects]
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        LoginServices.getLoginUser(user.uid)
          .then((res) => {
            setImg(
              res.data?.photoURL ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZJYp5k4BrOGGYJXcBXtsa20lAMvfs6ifFw&usqp=CAU"
            );
            setUsername(res.data?.displayName);
            setIsPremium(res.data?.Premium);
          })
          .catch((err) => {
            // console.log(err);
          });

        dispatch(setUser(user));
        audioRef.current?.pause();
      } else {
        dispatch(setUser(null));
      }
      setBannerSong(songs[Math.floor(Math.random() * songs.length)]);
      const getLikedSongs = async () => {
        await LikedSongService.getAllLikedSongs(uid)
          .then((res) => {
            setLikedSongs(res.data);
          })
          .catch((err) => {
            // console.log(err.response);
          });
      };
      getLikedSongs();
    });
  }, [user]);

  //Song UseEffect (Play and Pause)
  const togglePlayPause = () => {
    if (isPlay) audioRef.current.play();
    if (!isPlay) audioRef.current.pause();
    setIsPlay((prev) => !prev);
  };

  useEffect(() => {
    const getLikedSongs = () => {
      LikedSongService.getAllLikedSongs(uid)
        .then((res) => {
          setLikedSongs(res.data);
        })
        .catch((err) => {
          // console.log(err.response);
        });
    };
    getLikedSongs();
  }, [addFav]);
  //Previous Song
  const prevSong = () => {
    const index = songs.findIndex((x) => x.id === curSong.id);
    if (isShuffle) {
      setCurSong(songs[Math.floor(Math.random() * songs.length)]);
    } else if (index === 0) {
      setCurSong(songs[songs.length - 1]);
    } else {
      setCurSong(songs[index - 1]);
    }
    setIsPlay(false);
    audioRef.current.currentTime = 0;
  };
  //Next Song
  const nextSong = () => {
    const index = songs.findIndex((x) => x.id === curSong.id);
    if (isShuffle) {
      setCurSong(songs[Math.floor(Math.random() * songs.length)]);
    } else if (index === songs.length - 1) {
      setCurSong(songs[0]);
    } else {
      setCurSong(songs[index + 1]);
    }
    setIsPlay(false);
    audioRef.current.currentTime = 0;
  };
  //Sign in with email and Password
  const SignInWithPass = (e) => {
    // const auth = getAuth();
    e.preventDefault();
    if (email.length !== 0 && password.length !== 0) {
      // signInWithEmailAndPassword(auth, email, password)
      //   .then((userCredential) => {
      // Signed in
      if (email === "paranthaman" && password === "02062004") {
        navigate("/admin/allsongs");
        return;
      }
      LoginServices.getLoginUserByEmailAndPass(email, password)
        .then((res) => {
          LikedSongService.getAllLikedSongs(res.data.uid).then((result) => {
            setLikedSongs(result.data);
            console.log(result.data);
          });
          console.log(res);
          dispatch(setUser(res.data));
          setUsername(res.data?.displayName);
          setUid(res.data?.uid);
          if (res.data.photoURL !== "") setImg(res.data?.photoURL);
          setIsPremium(res.data?.Premium);
          getLikedSongs();
          navigate(`/home/${res.data?.uid}`);
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
      LikedSongService.getAllLikedSongs(uid)
        .then((res) => {
          setLikedSongs(res.data[0][1]);
          console.log(res);
        })
        .catch((err) => {
          // console.log(err.response);
        });

      audioRef.current.pause();

      // ...
      // })
      // .catch((error) => {
      //   if (error.code === "auth/wrong-password")
      //     toast.error("Please check the Password");
      //   if (error.code === "auth/user-not-found")
      //     toast.error("Please check the Email");
      //   if (error.code === "auth/invalid-email")
      //     toast.error("Please SignUp and Login");
      // });
    } else {
      if (email.length === 0) toast.error("Please Enter the Email");
      else toast.error("Please Enter the Password");
    }
  };
  //SignUp Using Email and Password
  const SignUpWithPass = async (e) => {
    // const auth = getAuth();
    e.preventDefault();
    validatePassword();
    if (
      !usernameError.trim() &&
      !emailError.trim() &&
      !passwordError.trim() &&
      !confirmPasswordError.trim()
    ) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((response) => {
          console.log(response);
          SignupService.postUserDetails(response.user?.uid, {
            uid: response.user?.uid,
            displayName: username,
            photoURL: "",
            email: response.user?.email,
            Premium: "false",
            password: signUpPassword,
          }).then((res) => {
            // console.log(res);
          });
          setUid(response.user?.uid);
          setUid(response.user?.uid);
          navigate(`/home/${response.user.uid}`);
        })
        .catch((err) => {
          if (err.code === "auth/email-already-in-use")
            toast.error("Account has been created Already with this Email Id");
        });
    }
    // setSignUpEmail("");
    // setSignUpPassword("");
    // setSignUpconfirmPassword("");
  };
  return (
    <Context.Provider
      value={{
        // handleCheck,
        handleLogin,
        gotoSignUpPage,
        handleLogout,
        gotoLoginPage,
        SignInWithPass,
        email,
        setEmail,
        password,
        setPassword,
        gotoHomePage,
        gotoLikedSongsPage,
        isPlay,
        setIsPlay,
        isShuffle,
        setIsShuffle,
        isLoop,
        setIsLoop,
        audioRef,
        endMinutes,
        setEndMinutes,
        endSeconds,
        setEndSeconds,
        curMinutes,
        setCurMinutes,
        curSeconds,
        setCurSeconds,
        curSong,
        setCurSong,
        togglePlayPause,
        sliderRef,
        nextSong,
        prevSong,
        SignUpWithPass,
        signUpEmail,
        setSignUpEmail,
        signUpPassword,
        setSignUpPassword,
        signUpconfirmPassword,
        setSignUpconfirmPassword,
        gotoProfilePage,
        user,
        img,
        setImg,
        username,
        setUsername,
        bannerSong,
        setBannerSong,
        songs,
        setSongs,
        songsCopy,
        setSongsCopy,
        likedSongs,
        isPremium,
        setIsPremium,
        recentPlaySongs,
        setRecentPlaySongs,
        getLikedSongs,
        search,
        setSearch,
        addFav,
        setAddFav,
        addAndRemoveLike,
        uid,
        gotoAddSong,
        editSong,
        setEditSong,
        usernameError,
        emailError,
        passwordError,
        confirmPasswordError,
        viewSong,
        setViewSong,
        isViewSong,
        setIsViewSong,
        isViewHero,
        setIsViewHero,
        isViewMovie,
        setIsViewMovie,
        viewHero,
        setViewHero,
        viewMovie,
        setViewMovie,
        allsongsjson
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStates = () => useContext(Context);
