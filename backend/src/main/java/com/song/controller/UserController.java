package com.song.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.song.model.User;
import com.song.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/")
	public String Welcome() {
		return "Welcome to My Rest Api in Users";
	}
	
	@GetMapping("/allusers")
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}
	
	@PutMapping("/updateuser/{uid}")
	public String updateUser(@PathVariable String uid,@RequestBody User user){
		boolean flag = userService.updateUser(uid,user);
		if(flag)
			return "User Details Successfully Updated";
		return "User id Not Exist in the Database";
	}
	
	@DeleteMapping("/deleteuser/{uid}")
	public String deleteUser(@PathVariable String uid) {
		boolean flag = userService.deleteUser(uid);
		if(flag)
			return "User Details Successfully Deleted";
		return "User Id is Not Exist in the Database";
	}
	
}
