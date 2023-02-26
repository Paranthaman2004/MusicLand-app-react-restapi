package com.song.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.song.model.Song;

public interface SongRepository extends JpaRepository<Song, Integer>{

	List<Song> findBytitleContainingIgnoreCase(String songName);

	List<Song> findBymovie(String movieName);

	List<Song> findByhero(String heroName);

	List<Song> findBymusicContainingIgnoreCase(String musicianName);

	List<Song> findBylyricistContainingIgnoreCase(String lyricistName);

	List<Song> findBysingerContainingIgnoreCase(String singerName);

	List<Song> findByTitleContainingIgnoreCaseAndMovieContainingIgnoreCase(String songName, String movieName);

	List<Song> findByyear(int year);

    boolean existsByTitle(String title);

}
