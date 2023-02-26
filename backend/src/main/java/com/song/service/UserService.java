package com.song.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.song.model.User;
import com.song.repository.UserRepository;
import com.song.serviceInt.UserServiceInt;

@Service
public class UserService implements UserServiceInt {

	@Autowired
	private UserRepository userRepository;

	@Override
	public List<User> getAllUsers() {
		return (List<User>) userRepository.findAll();
	}

	@Override
	public boolean updateUser(String uid, User user) {
		if (uid.equals(user.getUid()) && isExist(uid)) {
			userRepository.save(user);
			return true;
		}
		return false;
	}

	@Override
	public boolean deleteUser(String uid) {
		if (isExist(uid)) {
			userRepository.deleteById(uid);
			return true;
		}
		return false;
	}

	private boolean isExist(String uid) {
		Optional<User> user = userRepository.findById(uid);
		if (user.isEmpty())
			return false;
		return true;
	}

}
