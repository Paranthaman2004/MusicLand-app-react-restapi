package com.song.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Users")
public class User {
	@Id
	private String uid;
	private String displayName;
	private String photoURL;
	private String email;
	@Column(name="premium")
	@JsonProperty("Premium")
	private String isPremium;
	private String password;
	public User() {
		super();
	}
	
	public User(String uid, String displayName, String photoURL, String email,String isPremium,String password) {
		super();
		this.uid = uid;
		this.displayName = displayName;
		this.photoURL = photoURL;
		this.email = email;
		this.isPremium = isPremium;
		this.password = password;
	}
	
	public String getUid() {
		return uid;
	}
	
	public String getDisplayName() {
		return displayName;
	}
	
	public String getPhotoURL() {
		return photoURL;
	}
	
	public String getEmail() {
		return email;
	}
	
	public String getIsPremium() {
		return isPremium;
	}
	

	public String  getPassword() {
		return password;
	}
	@Override
	public String toString() {
		return "User [uid=" + uid + ", displayName=" + displayName + ", photoURL=" + photoURL + ", email=" + email
				+ ", isPremium=" + isPremium + "]";
	}
	
}
