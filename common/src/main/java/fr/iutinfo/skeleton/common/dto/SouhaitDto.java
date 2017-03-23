package fr.iutinfo.skeleton.common.dto;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.security.Principal;

public class SouhaitDto implements Principal {

	final static Logger logger = LoggerFactory.getLogger(SouhaitDto.class);
    private int ono;
    private String login;
    
	public int getOno() {
		return ono;
	}
	public void setOno(int ono) {
		this.ono = ono;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public static Logger getLogger() {
		return logger;
	}
	@Override
	public String getName() {
		return login+":"+ono;
	}
	
}