package com.paul.ability.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paul.ability.model.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    
}