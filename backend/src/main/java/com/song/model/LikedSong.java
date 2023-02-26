package com.song.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "likedSongs")
public class LikedSong {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String uid;
	private int songId;

	public LikedSong() {
		super();
	}

	public LikedSong(String uid, int songId) {
		super();
		this.uid = uid;
		this.songId = songId;
	}
	
	public void setId(int id) {
		this.id = id;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public void setSongId(int songId) {
		this.songId = songId;
	}

	public String getUid() {
		return uid;
	}

	public int getSongId() {
		return songId;
	}

	@Override
	public String toString() {
		return "LikedSong [uid=" + uid + ", songId=" + songId + "]";
	}
}
