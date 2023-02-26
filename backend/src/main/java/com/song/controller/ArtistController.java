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

import com.song.model.Artist;
import com.song.service.ArtistService;

@RestController
@RequestMapping("/artists")
@CrossOrigin("*")
public class ArtistController {
	@Autowired
	private ArtistService artistService;

	@GetMapping("/")
	public String Welcome() {
		return "Welcome to My Rest Api in Artists";
	}

	@GetMapping("/allartists")
	public List<Artist> getAllArtists() {
		return artistService.getAllArtists();
	}
	
	@GetMapping("/{artistid}")
	public Artist getByIdArtist(@PathVariable int artistid) {
		return artistService.getByIdArtist(artistid);
	}
	@GetMapping("/name/{artistName}")
	public Artist getByArtistName(@PathVariable String artistName) {
		return artistService.getByArtistName(artistName);
	}

	@PostMapping("/addartist")
	public String addArtist(@RequestBody Artist Artist) {
		boolean flag = artistService.addArtist(Artist);
		if (flag)
			return "Artist Added Successfully";
		return "Already Artist Id Exist";
	}

	@PutMapping("/updateartist/{id}")
	public String updateArtist(@PathVariable int id, @RequestBody Artist artist) {
		artist.setId(id);
		boolean flag = artistService.updateArtist(id, artist);
		if (flag)
			return "Artist Updated Successfully";
		return "Something went wrong!\nPlease Cheak the PathVariable and Artist id does't is Matching or The Artist does't Exist";
	}

	@DeleteMapping("/deleteartist/{id}")
	public String deleteArtist(@PathVariable int id) {
		boolean flag = artistService.deleteArtist(id);
		if (flag)
			return "Artist Deleted Successfully";
		return "Artist Does Not Exist";
	}
}
