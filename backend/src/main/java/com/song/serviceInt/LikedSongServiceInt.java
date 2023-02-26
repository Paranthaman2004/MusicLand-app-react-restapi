package com.song.serviceInt;

import java.util.List;

import com.song.model.LikedSong;
import com.song.model.Song;

public interface LikedSongServiceInt {
	public List<Song> findLikedSong(String uid);
	public Boolean findIsLikedSong(String uid, String songid);
	public Boolean addLikedSong(LikedSong ls);
	public Boolean deleteSong(LikedSong ls);
}
