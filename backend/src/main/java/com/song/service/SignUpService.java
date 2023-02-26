package com.song.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.song.model.User;
import com.song.repository.UserRepository;
import com.song.serviceInt.SignUpServiceInt;

@Service
public class SignUpService implements SignUpServiceInt {
	
	@Autowired
	private UserRepository userRepository;
	
	public Boolean signUpUser(String uid,User user) {
		if(!isExist(uid) && uid.equals(user.getUid())) {
			userRepository.save(user);
			return true;
		}
		return false;
	}

	public boolean isExist(String uid) {
		Optional<User> user = userRepository.findById(uid);
		if(user.isEmpty())
			return false;
		return true;
	}
}
