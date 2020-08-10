package com.paul.ability.service.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paul.ability.dao.MemberRepository;
import com.paul.ability.model.Member;
import com.paul.ability.service.interf.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
	
	@Autowired
	private MemberRepository memberRepository;

	@Override
	public Member createMember(Member member) {
		Date now = new Date();
		member.setCreateTime(now);
		member.setUpdateTime(now);
		memberRepository.save(member);
		return member;
	}
}
