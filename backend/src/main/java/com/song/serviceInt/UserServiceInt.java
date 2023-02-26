package com.song.serviceInt;

import java.util.List;

import com.song.model.User;

public interface UserServiceInt {

	public List<User> getAllUsers();

	public boolean updateUser(String uid, User user);

	public boolean deleteUser(String uid);

}
