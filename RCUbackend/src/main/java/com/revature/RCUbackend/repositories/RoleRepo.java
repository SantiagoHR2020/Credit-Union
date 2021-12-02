package com.revature.RCUbackend.repositories;



import com.revature.RCUbackend.models.ERole;
import com.revature.RCUbackend.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepo  extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(ERole name);


}
