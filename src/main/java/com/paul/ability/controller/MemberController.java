package com.paul.ability.controller;

import java.util.Collection;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paul.ability.dao.MemberRepository;
import com.paul.ability.model.Member;
import com.paul.ability.service.interf.MemberService;

@RestController
@RequestMapping("/api/member")
@CrossOrigin(origins = "http://localhost:3000")
public class MemberController {

	@Autowired
    private MemberRepository memberRepository;
	
	@Autowired
	private MemberService memberService;
	
	@GetMapping("/queryMembers")
    public Collection<Member> queryMembers() {
		Collection<Member> a = memberRepository.findAll();
        return memberRepository.findAll();
    }
	
	@GetMapping("/getMember/{mId}")
    public ResponseEntity<?> getMember(@PathVariable Long mId) {
        Optional<Member> member = memberRepository.findById(mId);
        return member.map((response) -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
	
	@PostMapping("/createMember")
    public ResponseEntity<Member> createMember(@Valid @RequestBody Member member) {
        Member result = memberService.createMember(member);
        return ResponseEntity.ok().body(result);
    }
	
	@PutMapping("/updateMember/{mId}")
    public ResponseEntity<Member> updateMember(@Valid @RequestBody Member member) {
        Member result = memberRepository.save(member);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/deleteMember/{mId}")
    public ResponseEntity<?> deleteMember(@PathVariable Long mId) {
        memberRepository.deleteById(mId);
        return ResponseEntity.ok().build();
    }
}
