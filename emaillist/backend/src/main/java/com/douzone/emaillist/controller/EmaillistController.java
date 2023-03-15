package com.douzone.emaillist.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.douzone.emaillist.dto.JsonResult;
import com.douzone.emaillist.repository.EmaillistRepository;
import com.douzone.emaillist.vo.EmaillistVo;



@RestController
@RequestMapping("/api")
public class EmaillistController {
	@Autowired
	private EmaillistRepository emaillistRepository;
			 
	@GetMapping("/email")
	public ResponseEntity<JsonResult> readlist() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistRepository.findAll()));
		
	}
	
	@PostMapping("/email")
	public ResponseEntity<JsonResult> createmail(@RequestBody EmaillistVo emaillistVo) {
		emaillistRepository.insert(emaillistVo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistVo));
	}
	
	
	@DeleteMapping("/delete/{no}")
	public ResponseEntity<JsonResult> delete(@PathVariable("no") Long no){
		emaillistRepository.deleteByEmail(no);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistRepository.findAll()));
	}
	
	
}