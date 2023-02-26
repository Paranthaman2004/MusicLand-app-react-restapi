package com.song.serviceInt;

import java.util.List;

import com.song.model.Artist;

public interface ArtistServiceInt {

	List<Artist> getAllArtists();

	Artist getByIdArtist(int artistId);

	Boolean addArtist(Artist artist);

	Boolean updateArtist(int id, Artist artist);

	Boolean deleteArtist(int id);


}
