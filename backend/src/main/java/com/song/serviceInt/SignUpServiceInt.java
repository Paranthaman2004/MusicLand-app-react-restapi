package com.song.serviceInt;

import com.song.model.User;

public interface SignUpServiceInt {

	public Boolean signUpUser(String uid,User user);
	public boolean isExist(String uid);
}
