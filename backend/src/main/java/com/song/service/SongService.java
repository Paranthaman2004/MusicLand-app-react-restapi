package com.song.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.song.model.Song;
import com.song.repository.SongRepository;
import com.song.serviceInt.SongServiceInt;

@Service
public class SongService implements SongServiceInt {

	@Autowired
	private SongRepository songRepository;

	@Override
	public List<Song> getAllSongs() {
		return (List<Song>) songRepository.findAll();
	}

	@Override
	public Song getByIdSong(int songid) {
		return songRepository.findById(songid).get();
	}

	@Override
	public Boolean addSong(Song song) {
		if (!songRepository.existsById(song.getId())) {
			songRepository.save(song);
			return true;
		}
		return false;
	}

	@Override
	public Boolean updateSong(int id, Song song) {
		if (id == song.getId() && isExist(id)) {
			songRepository.save(song);
			return true;
		}
		return false;
	}

	@Override
	public Boolean deleteSong(int id) {
		if (isExist(id)) {
			songRepository.deleteById(id);
			return true;
		}
		return false;

	}

	private boolean isExist(int id) {
		Optional<Song> song = songRepository.findById(id);
		if (song.isEmpty())
			return false;
		return true;
	}

	public List<Song> getSongsBySongName(String songName) {
		return songRepository.findBytitleContainingIgnoreCase(songName);
	}

	public List<Song> getSongsByMovieName(String movieName) {
		return songRepository.findBymovie(movieName);
	}

	public List<Song> getSongsByHeroName(String heroName) {
		return songRepository.findByhero(heroName);
	}

	public List<Song> getSongsByMusicianName(String musicianName) {
		return songRepository.findBymusicContainingIgnoreCase(musicianName);

	}

	public List<Song> getSongsByLyricistName(String lyricistName) {
		return songRepository.findBylyricistContainingIgnoreCase(lyricistName);

	}

	public List<Song> getSongsBySingerName(String singerName) {
		return songRepository.findBysingerContainingIgnoreCase(singerName);

	}

	public List<Song> getSongsBySongAndMovie(String songName, String movieName) {
		return songRepository.findByTitleContainingIgnoreCaseAndMovieContainingIgnoreCase(songName,movieName);
	}

	public List<Song> getSongsByYear(int year) {
		return songRepository.findByyear(year);
	}
}
