package com.song.controller;

import org.hibernate.annotations.Check;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.song.model.User;
import com.song.service.LoginService;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class LoginController {

	@Autowired
	private LoginService loginService;

	@GetMapping("/")
	public String index() {
		return "Welcome to my REST API for Login";
	}

	@GetMapping("/{email}/{password}")
	public ResponseEntity<?> getUser(@PathVariable String email, @PathVariable String password) {
		boolean flag = loginService.checkUser(email, password);
		if (flag) {
			User user = loginService.getUser(email, password);
			return new ResponseEntity<User>(user, HttpStatus.OK);
		}
		flag = loginService.checkEmail(email);
		if (flag) {
			return new ResponseEntity<String>("Invalid Password", HttpStatus.NOT_FOUND);
		} else {

			return new ResponseEntity<String>("Invalid Email", HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/{uid}")
	public User login(@PathVariable String uid) {
		return loginService.Login(uid);
	}

	@GetMapping("/isexistuser/{uid}")
	public boolean isExistUser(@PathVariable String uid) {
		return loginService.isExistUser(uid);
	}
}
