package com.song.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.song.model.Artist;
import com.song.repository.ArtistRepository;
import com.song.serviceInt.ArtistServiceInt;

@Service
public class ArtistService implements ArtistServiceInt{


	@Autowired
	private ArtistRepository artistRepository;

	@Override
	public List<Artist> getAllArtists() {
		return (List<Artist>) artistRepository.findAll();
	}

	@Override
	public Artist getByIdArtist(int artistId) {
		return artistRepository.findById(artistId).get();
	}

	@Override
	public Boolean addArtist(Artist artist) {
		if (!isExist(artist.getId())) {
			artistRepository.save(artist);
			return true;
		}
		return false;
	}

	@Override
	public Boolean updateArtist(int id, Artist artist) {
		if (id == artist.getId() && isExist(id)) {
			artistRepository.save(artist);
			return true;
		}
		return false;
	}

	@Override
	public Boolean deleteArtist(int id) {
		if (isExist(id)) {
			artistRepository.deleteById(id);
			return true;
		}
		return false;

	}

	private boolean isExist(int id) {
		Optional<Artist> song = artistRepository.findById(id);
		if (song.isEmpty())
			return false;
		return true;
	}

    public Artist getByArtistName(String artistName) {
        return artistRepository.findByName(artistName).get();
    }

}
