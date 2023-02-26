package com.song.serviceInt;

import java.util.List;

import com.song.model.Song;

public interface SongServiceInt {
	public List<Song> getAllSongs();

	public Song getByIdSong(int songid);
	
	public Boolean addSong(Song song);

	public Boolean updateSong(int id, Song song);

	public Boolean deleteSong(int id);

}
