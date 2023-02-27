import React, { useState, useEffect } from "react";
import axios from "../Api/axios";
import { useStates } from "../States";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const EditSong = () => {
  const { editSong, setEditSong } = useStates();
  const [id, setId] = useState("");
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
  const [year, setYear] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setId(editSong?.id);
    setTitle(editSong?.title);
    setMovie(editSong?.movie);
    setImage(editSong?.img);
    setAudio(editSong?.url);
    setHero(editSong?.hero);
    setMusic(editSong?.music);
    setLyricist(editSong?.lyricist);
    setSinger(editSong?.singer);
    setLanguage(editSong?.language);
    setMode(editSong?.mode);
    setYear(editSong?.year);
  }, [editSong]);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/songs/updatesong/${id}`, {
        id: id,
        title: title,
        movie: movie,
        img: image,
        url: audio,
        hero: hero,
        music: music,
        lyricist: lyricist,
        singer: singer,
        language:language,
        mode:mode,
        year: year,
      })
      .then((res) => {
        if (res.data.includes("Successfully")) {
          toast.success(res.data);
          gotoAdminAllSong();
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };
  const gotoAdminAllSong = () => {
    navigate("/admin/allsongs");
  };
  return (
    <div className="flex flex-col h-[90vh] w-[100vw] justify-center items-center">
      <p className="text-mp-white font-bold text-4xl">Update Song</p>
      <div className="flex justify-center items-center h-full w-5/12">
        <form
          className="flex items-center flex-col w-full p-10 bg-mp-white rounded-xl h-5/6"
          onSubmit={handleUpdateSubmit}
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
              disabled
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
            />{" "}
          </div>{" "}
          <div className="flex mb-10">
            <TextField
              className="w-[250px] "
              sx={{ marginBottom: "10px",marginRight:'10px' }}
              id="standard-basic1"
              label="Mode"
              variant="standard"
              type={"text"}
              value={mode}
              onChange={(e) => setMode(e.target.value)}
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
            />{" "}
          </div>
          <div className="flex">
            <Button
              variant="contained"
              color="success"
              type="submit"
              sx={{ marginRight: "10px" }}
            >
              Update
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                gotoAdminAllSong();
                setEditSong({});
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

export default EditSong;
