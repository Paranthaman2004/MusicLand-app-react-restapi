package com.song.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.song.model.LikedSong;
import com.song.model.Song;
import com.song.repository.LikedSongRepository;
import com.song.repository.SongRepository;
import com.song.serviceInt.LikedSongServiceInt;

@Service
public class LikedSongService implements LikedSongServiceInt {
	@Autowired
	private LikedSongRepository likedSongRepository;

	@Autowired
	private SongRepository songRepository;
	
	@Override
	public List<Song> findLikedSong(String uid) {
		List<Integer> likedSongId = likedSongRepository.findLikedSong(uid);
		List<Song> likedSongs = songRepository.findAllById(likedSongId);
		return likedSongs;
	}
	@Override
	public Boolean findIsLikedSong(String uid, String songid) {
		List<String> list = likedSongRepository.findIsFav(uid);
		for(int i=0;i<list.size();i++) {
			if(list.get(i).equals(songid))
				return true;
		}
		return false;
	}
	
	@Override
	public Boolean addLikedSong(LikedSong ls) {
		if(findIsLikedSong(ls.getUid(),String.valueOf(ls.getSongId())))
			return false;
		likedSongRepository.save(ls);
		return true;
	}

	@Override
	public Boolean deleteSong(LikedSong ls) {
		if(!findIsLikedSong(ls.getUid(),String.valueOf(ls.getSongId())))
			return false;
		List<LikedSong> likedSongs = likedSongRepository.findAll();
		for(LikedSong likedSong : likedSongs) {
			if(likedSong.getUid().equalsIgnoreCase(ls.getUid()) && likedSong.getSongId()==ls.getSongId()) {
				likedSongRepository.delete(likedSong);
				return true;
			}
		}
		return true;
	}

}
