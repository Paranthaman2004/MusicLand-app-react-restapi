package com.song.serviceInt;


import com.song.model.User;

public interface LoginServiceInt {
	public User Login(String uid);
	public Boolean isExistUser(String uid);
}
