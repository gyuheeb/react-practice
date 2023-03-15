package com.douzone.emaillist.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.douzone.emaillist.vo.EmaillistVo;

@Repository
public class EmaillistRepository {
	@Autowired
	private SqlSession sqlSession;

	public List<EmaillistVo> findAll() {
		return sqlSession.selectList("emaillist.findAll");
	}

	public void insert(EmaillistVo vo) {
		 sqlSession.insert("emaillist.insert", vo);
	}

	public void deleteByEmail(Long no) {
		 sqlSession.delete("emaillist.deleteByEmail", no);
			
	}

	
	
	
}