package com.song.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.song.model.User;
import com.song.service.SignUpService;

@RestController
@RequestMapping("/signup")
@CrossOrigin("*")
public class SignUpController {

	@Autowired
	private SignUpService signUpService;

	@GetMapping("/")
	public String index() {
		return "Welcomet to REST API for Sign UP";
	}
	
	@PostMapping("/signupuser/{uid}")
	public String SignUpUser(@PathVariable String uid, @RequestBody User user) {
		boolean flag = signUpService.signUpUser(uid, user);
		if (flag)
			return "SignUp SuccessfullY";
		return "SingUp Failed or Already Have a Account";
	}

}
