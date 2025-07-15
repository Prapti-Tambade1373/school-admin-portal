package com.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Model.User;
import com.Repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepo;

	public Optional<User> findByUsername(String username) {
		return userRepo.findByUsername(username);
	}

	public User saveUser(User user) {
		return userRepo.save(user);
	}
}
