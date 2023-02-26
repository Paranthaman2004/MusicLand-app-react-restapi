package com.song.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.song.model.LikedSong;
import com.song.model.Song;
import com.song.service.LikedSongService;

@RestController
@RequestMapping("/likedsongs")
@CrossOrigin("*")
public class LikedSongController {

	@Autowired
	private LikedSongService likedSongService;
	
	@GetMapping("/")
	public String index() {
		return "Welcome to My REST API for LikedSong";
	}


	@GetMapping("/uid/{uid}")
	public List<Song> findUserLikedSong(@PathVariable String uid){
		return  likedSongService.findLikedSong(uid);
	}
	
	@GetMapping("/{uid}/{songid}")
	public Boolean findIsFav(@PathVariable String uid,@PathVariable String songid) {
		return likedSongService.findIsLikedSong(uid,songid);
	}
	
	@PostMapping("/add/{uid}")
	public String addLikeSong(@PathVariable String uid,@RequestBody LikedSong ls) {
		boolean flag =  likedSongService.addLikedSong(ls);
		if(flag)
			return "Song Added Successfully";
		return "Song Added failed";
	}
	
	@DeleteMapping("/delete/{uid}/{songid}")
	public String deleteSong(@PathVariable String uid,@PathVariable int songid) {
		LikedSong ls = new LikedSong();
		ls.setSongId(songid);
		ls.setUid(uid);
		boolean flag = likedSongService.deleteSong(ls);
		if(flag)
			return "Song Deleted Successfully";
		return "Song Deleted Failed";
	}
	
}
