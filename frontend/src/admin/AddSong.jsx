import React, { useState } from "react";
import axios from "../Api/axios";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
const AddSong = () => {
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [movie, setMovie] = useState("");
  const [image, setImage] = useState("");
  const [audio, setAudio] = useState("");
  const [hero, setHero] = useState("");
  const [music, setMusic] = useState("");
  const [lyricist, setLyricist] = useState("");
  const [singer, setSinger] = useState("");
  const [language, setLanguage] = useState("");
  const [mode, setMode] = useState("");
  const [year, setYear] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (id) {
      const song = {
        id: id,
        title: title,
        movie: movie,
        img: image,
        url: audio,
        hero: hero,
        music: music,
        lyricist: lyricist,
        singer: singer,
        language: language,
        mode: mode,
        year: year,
      };

      axios
        .post(`/songs/addsong`, song)
        .then((res) => {
          console.log(res);
          if (res.data.includes("Successfully")) {
            toast.success(res.data);
            navigate("/admin/allsongs");
          } else {
            toast.error(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError("Song Id is Required");
      toast.error("Song Id is must Required");
      console.log(error);
    }
  };
  const Reset = () => {
    setId("");
    setTitle("");
    setMovie("");
    setImage("");
    setAudio("");
    setHero("");
    setMusic("");
    setLyricist("");
    setSinger("");
    setLanguage("");
    setMode("");
    setYear("");
    setError("");
  };
  const gotoAdminAllSong = () => {
    navigate("/admin/allsongs");
  };
  return (
    <div className="flex flex-col h-[90vh] w-[100vw] justify-center items-center">
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
      <p className="text-mp-white font-bold text-4xl">Add Song</p>
      <div className="flex justify-center items-center h-full w-5/12">
        <form
          className="flex items-center flex-col w-full p-10 bg-mp-white rounded-xl"
          onSubmit={handleCreateSubmit}
        >
          <div className="flex mb-5">
            <TextField
              className="w-[250px]"
              id="standard-basic"
              sx={{ marginBottom: "5px", marginRight: "10px" }}
              label="Song Id"
              variant="standard"
              type={"text"}
              value={id}
              onChange={(e) => setId(e.target.value)}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <TextField
              className="w-[250px]"
              id="standard-basic1"
              sx={{ marginBottom: "5px", marginRight: "10px" }}
              label="Song Title"
              variant="standard"
              type={"text"}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="flex mb-5">
            <TextField
              className="w-[250px]"
              id="standard-basic1"
              sx={{ marginBottom: "5px", marginRight: "10px" }}
              label="Movie"
              variant="standard"
              type={"text"}
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
              required
            />
            <TextField
              className="w-[250px]"
              id="standard-basic1"
              sx={{ marginBottom: "5px", marginRight: "10px" }}
              label="Image"
              variant="standard"
              type={"text"}
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />{" "}
          </div>
          <div className="flex mb-5">
            <TextField
              className="w-[250px]"
              id="standard-basic1"
              sx={{ marginBottom: "5px", marginRight: "10px" }}
              label="Audio"
              variant="standard"
              type={"text"}
              value={audio}
              onChange={(e) => setAudio(e.target.value)}
              required
            />
            <TextField
              className="w-[250px]"
              id="standard-basic1"
              sx={{ marginBottom: "5px", marginRight: "10px" }}
              label="Hero"
              variant="standard"
              type={"text"}
              value={hero}
              onChange={(e) => setHero(e.target.value)}
              required
            />{" "}
          </div>
          <div className="flex mb-5">
            <TextField
              className="w-[250px]"
              id="standard-basic1"
              sx={{ marginBottom: "5px", marginRight: "10px" }}
              label="Music"
              variant="standard"
              type={"text"}
              value={music}
              onChange={(e) => setMusic(e.target.value)}
              required
            />
            <TextField
              className="w-[250px]"
              id="standard-basic1"
              sx={{ marginBottom: "5px", marginRight: "10px" }}
              label="Lyricist"
              variant="standard"
              type={"text"}
              value={lyricist}
              onChange={(e) => setLyricist(e.target.value)}
              required
            />{" "}
          </div>{" "}
          <div className="flex mb-5">
            <TextField
              className="w-[250px]"
              id="standard-basic1"
              sx={{ marginBottom: "5px", marginRight: "10px" }}
              label="Singer"
              variant="standard"
              type={"text"}
              value={singer}
              onChange={(e) => setSinger(e.target.value)}
              required
            />
            <TextField
              className="w-[250px] "
              sx={{ marginBottom: "10px,marginRight:'10px'" }}
              id="standard-basic1"
              label="Language"
              variant="standard"
              type={"text"}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              required
            />{" "}
          </div>{" "}
          <div className="flex mb-10">
            <TextField
              className="w-[250px] "
              sx={{ marginBottom: "10px", marginRight: "10px" }}
              id="standard-basic1"
              label="Mode"
              variant="standard"
              type={"text"}
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              required
            />
            <TextField
              className="w-[250px] "
              sx={{ marginBottom: "10px,marginRight:'10px'" }}
              id="standard-basic1"
              label="Year"
              variant="standard"
              type={"text"}
              value={year}
              onChange={(e) => setYear(e.target.value)}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              required
            />{" "}
          </div>
          <div className="flex">
            <Button
              variant="contained"
              color="success"
              type="submit"
              sx={{ marginRight: "10px" }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              sx={{ marginRight: "10px" }}
              color="secondary"
              onClick={Reset}
            >
              Reset
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                gotoAdminAllSong();
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSong;
