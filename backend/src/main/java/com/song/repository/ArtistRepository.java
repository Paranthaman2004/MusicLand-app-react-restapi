package com.song.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.song.model.Artist;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Integer> {

    Optional<Artist> findByName(String artistName);
	
}
