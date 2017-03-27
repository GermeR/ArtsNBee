package fr.iutinfo.skeleton.common.dto;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SouhaitDto{

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
}