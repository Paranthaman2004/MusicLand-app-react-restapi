import axios from "../Api/axios";
class LikedSongService {
  getAllLikedSongs(uid) {
    return axios.get(`/likedsongs/uid/${uid}`);
  }
}
export default new LikedSongService();
