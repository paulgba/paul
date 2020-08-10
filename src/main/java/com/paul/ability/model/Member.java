package com.paul.ability.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "members")
public class Member {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "m_id", unique = true, nullable = false, length = 50)
	private Long mId;
	
	@NonNull
    @NotEmpty
	@Column(name = "account", unique = true, nullable = false, length = 50)
	private String account;
	
	@NonNull
    @NotEmpty
	@Column(name = "password", unique = false, nullable = false, length = 50)
	private String password;
	
	@NonNull
    @NotEmpty
	@Column(name = "email", unique = false, nullable = false, length = 50)
	private String email;
	
	@Column(name = "create_time")
	private Date createTime;
	
	@Column(name = "update_time")
	private Date updateTime;
}
