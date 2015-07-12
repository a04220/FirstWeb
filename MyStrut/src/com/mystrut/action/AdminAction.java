package com.mystrut.action;

import java.io.UnsupportedEncodingException;

import org.apache.struts2.ServletActionContext;

import com.alibaba.fastjson.JSONObject; //json数据格式包
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import com.mystrut.pojo.Admin;

public class AdminAction<JSONObject> extends ActionSupport implements ModelDriven<Admin>{
	private Admin model=new Admin();
	
	public Admin getModel()
	{
			return model;
	}

	
	
	
	public String execute() throws Exception{
		
		System.out.println(getModel().getLoginName());
		System.out.println(getModel().getLoginPwd());
		
		JSONObject jsonObject = null;
		
		if(getModel().getLoginName().equalsIgnoreCase("lgk")&&getModel().getLoginPwd().equalsIgnoreCase("123456")){	
			return SUCCESS;
		}else {
			return LOGIN;
		}
		
	}
	

	public void validate(){
		
	}
}

