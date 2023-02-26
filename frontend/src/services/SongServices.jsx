import axios from "../Api/axios";
class SongServices {
  getAllSongs() {
    return axios.get("/songs/allsongs");
  }
  
}
export default new SongServices();
