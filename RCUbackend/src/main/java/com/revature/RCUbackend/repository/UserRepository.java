package com.revature.RCUbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.RCUbackend.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	public List<User> findAll();
}
