package com.song.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.song.model.User;


public interface UserRepository extends JpaRepository<User, String>{

    User findByEmailAndPassword(String email, String password);

    User findByEmail(String email);

    User findByemail(String email);


}