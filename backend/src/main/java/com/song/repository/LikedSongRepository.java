package com.song.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.song.model.LikedSong;

public interface LikedSongRepository extends JpaRepository<LikedSong,String> {

	@Query(nativeQuery = true, value = "SELECT DISTINCT uid,JSON_ARRAYAGG(song_id) OVER win song_id from liked_songs WINDOW win AS (PARTITION BY uid);")
	List<?> findAllLikedSong();

	@Query(nativeQuery = true, value = "SELECT ls.id from songs ls join liked_songs s where uid=:uid and ls.id=s.song_id")
	List<Integer> findLikedSong(@Param("uid") String uid);

	@Query(nativeQuery = true, value = "SELECT song_id from liked_songs  where uid=?")
	List<String> findIsFav(@Param("uid") String uid);

}
