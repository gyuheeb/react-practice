package com.douzone.emaillist.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LandingController {
	
	@RequestMapping("")
	public String index() {
		return "index";
	}
	
	@GetMapping("favicon.ico")
	@ResponseBody       //favicon 응답 x 
	public void returnNoFavivon() {
	}
}
