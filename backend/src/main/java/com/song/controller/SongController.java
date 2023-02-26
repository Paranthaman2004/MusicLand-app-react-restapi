package com.song.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.song.model.Song;
import com.song.service.SongService;

@RestController
@RequestMapping("/songs")
@CrossOrigin("*")
public class SongController {

	@Autowired
	private SongService songService;

	@GetMapping("/")
	public String Welcome() {
		return "Welcome to My Rest Api in Songs";
	}

	@GetMapping("/allsongs")
	public List<Song> getAllSongs() {
		return songService.getAllSongs();
	}
	
	@GetMapping("/{songid}")
	public Song getByIdSong(@PathVariable int songid) {
		return songService.getByIdSong(songid);
	}

	@PostMapping("/addsong")
	public String addSong(@RequestBody Song song) {
		boolean flag = songService.addSong(song);
		if (flag)
			return song.getTitle()+" Song Added Successfully";
		return "Already Song Id Exist";
	}

	@PutMapping("/updatesong/{id}")
	public String updateSong(@PathVariable int id, @RequestBody Song song) {
		Song song1 = songService.getByIdSong(id);
		boolean flag = songService.updateSong(id, song);
		if (flag)
			return song1.getTitle()+" Song Updated Successfully";
		return "Something went wrong!\nPlease Cheak the PathVariable and Song id does't is Matching or The Song does't Exist";
	}

	@DeleteMapping("/deletesong/{id}")
	public String deleteSong(@PathVariable int id) {
		Song song = songService.getByIdSong(id);
		boolean flag = songService.deleteSong(id);
		if (flag)
			return song.getTitle()+"   Song Deleted Successfully";
		return "Song Does Not Exist";
	}

	@GetMapping("/song/{songName}")
	public List<Song> getSongsBySongName(@PathVariable String songName) {
		return songService.getSongsBySongName(songName);
	}
	
	@GetMapping("/album/{movieName}")
	public List<Song> getSongsByMovieName(@PathVariable String movieName) {
		return songService.getSongsByMovieName(movieName);
	}
	
	@GetMapping("/hero/{heroName}")
	public List<Song> getSongsByHeroName(@PathVariable String heroName) {
		return songService.getSongsByHeroName(heroName);
	}
	
	@GetMapping("/music/{musicianName}")
	public List<Song> getSongsByMusicianName(@PathVariable String musicianName) {
		return songService.getSongsByMusicianName(musicianName);
	}
	
	@GetMapping("/lyric/{lyricistName}")
	public List<Song> getSongsByLyricistName(@PathVariable String lyricistName) {
		return songService.getSongsByLyricistName(lyricistName);
	}
	
	@GetMapping("/singer/{singerName}")
	public List<Song> getSongsBySingerName(@PathVariable String singerName) {
		return songService.getSongsBySingerName(singerName);
	}
	
	@GetMapping("/year/{year}")
	public List<Song> getSongsByYear(@PathVariable int year) {
		return songService.getSongsByYear(year);
	}
	
	@GetMapping("/song/movie/{songName}/{movieName}")
	public List<Song> getSongsBySongAndMovie(@PathVariable String songName,@PathVariable String movieName){
		return songService.getSongsBySongAndMovie(songName,movieName);
	}
}
