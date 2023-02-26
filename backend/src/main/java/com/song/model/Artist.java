package com.song.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="artists")
public class Artist {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String img;
	private String role;
	
	public Artist() {
		super();
	}
	public Artist(int id, String name, String img, String role) {
		super();
		this.id = id;
		this.name = name;
		this.img = img;
		this.role = role;
	}
	public void setId(int id) {
		this.id = id;
		
	}
	public int getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public String getImg() {
		return img;
	}
	public String getRole() {
		return role;
	}
	@Override
	public String toString() {
		return "Artist [id=" + id + ", name=" + name + ", img=" + img + ", role=" + role + "]";
	}
	
	
}
