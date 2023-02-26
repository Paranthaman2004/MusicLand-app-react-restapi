package com.song.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.song.model.User;
import com.song.repository.UserRepository;
import com.song.serviceInt.LoginServiceInt;

@Service
public class LoginService implements LoginServiceInt{
	
	@Autowired
	private UserRepository userRepository;
	@Override
	public User Login(String uid) {
		return  userRepository.findById(uid).get();
	}
	@Override
	public Boolean isExistUser(String uid) {
		Optional<User> user = userRepository.findById(uid);
		if(user.isEmpty())
			return false;
		return true;
	}
    public boolean checkUser(String email, String password) {
        User user =  userRepository.findByEmailAndPassword(email,password);
		if(user==null)
			return false;
		return true;
    }
    public User getUser(String email, String password) {
        return userRepository.findByemail(email);
    }
    public boolean checkEmail(String email) {
		User user = userRepository.findByemail(email);
		if(user==null)
			return false;
        return true;
    }
}
