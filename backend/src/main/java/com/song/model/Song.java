package com.song.model;

//import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Songs")
public class Song {
	@Id
	private int id;
	private String title;
	private String img;
	private String url;
//	@JsonProperty("album")
	private String movie;
	private String hero;
	private String mode;
	private String music;
	private String lyricist;
	private String singer;
	private int year;
	private String language;

	public Song() {
		super();
	}
	public Song(Integer id) {
		this.id = id;
	}
			
	public Song(Integer id, String title, String img, String url, String movie, String hero, String mode, String music,
			String lyricist, String singer,Integer year,String language) {
		super();
		this.id = id;
		this.title = title;
		this.img = img;
		this.url = url;
		this.movie = movie;
		this.hero = hero;
		this.mode = mode;
		this.music = music;
		this.lyricist = lyricist;
		this.singer = singer;
		this.year = year;
		this.language = language;
	}
	
	
	
	public void setId(int id) {
		this.id = id;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public void setMovie(String movie) {
		this.movie = movie;
	}
	public void setHero(String hero) {
		this.hero = hero;
	}
	public void setMode(String mode) {
		this.mode = mode;
	}
	public void setMusic(String music) {
		this.music = music;
	}
	public void setLyricist(String lyricist) {
		this.lyricist = lyricist;
	}
	public void setSinger(String singer) {
		this.singer = singer;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public int getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public String getImg() {
		return img;
	}

	public String getUrl() {
		return url;
	}

	public String getMovie() {
		return movie;
	}

	public String getHero() {
		return hero;
	}

	public String getMode() {
		return mode;
	}

	public String getMusic() {
		return music;
	}

	public String getLyricist() {
		return lyricist;
	}

	public String getSinger() {
		return singer;
	}
	public int getYear() {
		return year;
	}
	public String getLanguage() {
		return language;
	}

	@Override
	public String toString() {
		return "Song [id=" + id + ", title=" + title + ", img=" + img + ", url=" + url + ", movie=" + movie + ", hero="
				+ hero + ", mode=" + mode + ", music=" + music + ", lyricist=" + lyricist + ", singer=" + singer +", year=" + year + ", language=" + language + "]";
	}
}
