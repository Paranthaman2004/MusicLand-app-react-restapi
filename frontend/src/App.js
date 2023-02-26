import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar";
import { States } from "./States";
import Player from "./Pages/Player";
import HarizontalNavbar from "./Components/HarizontalNavbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Api/firebase";
import { AuthProvider } from "./AuthContext";
import Profile from "./Pages/Profile";
import LikedSongs from "./Pages/LikedSongs";
import Admin from "./admin/Admin";
import ViewAllSong from "./admin/ViewAllSong";
import AddSong from "./admin/AddSong";
import EditSong from "./admin/EditSong";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
          <States>
                <Routes>
                  {/* <Route path="/" element={<><Navbar /><Landing /></>}/> */}
                  <Route path="/" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/home/:id" element={<> <Navbar /><HarizontalNavbar /><Home /></>} />
                  <Route path="/profile" element={<><Navbar /><HarizontalNavbar /><Profile /></>} />
                  <Route path="/likedsongs" element={<><Navbar /><HarizontalNavbar /><LikedSongs /></>} />
                  <Route path="/admin" element={<Admin/>}/>
                  <Route path="/admin/allsongs" element={<ViewAllSong/>}/>
                  <Route path="/admin/addsong" element={<AddSong/>}/>
                  <Route path="/admin/editsong/:id" element={<EditSong/>}/>
                </Routes>
                <Player />
          </States>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
