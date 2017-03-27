package fr.iutinfo.skeleton.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.iutinfo.skeleton.common.dto.PanierDto;

public class Panier {

	final static Logger logger = LoggerFactory.getLogger(Panier.class);
	private int ono;
	private String login;


	public Panier() {
	}

	public Panier(int ono,String login) {
		setOno(ono);
		setLogin(login);
	}
	
	public void initFromDto(PanierDto dto) {
		this.setOno(dto.getOno());
		this.setLogin(dto.getLogin());
	}

	public PanierDto convertToDto() {
		PanierDto dto = new PanierDto();
		dto.setOno(this.getOno());
		dto.setLogin(this.getLogin());
		return dto;
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

	public int getOno() {
		return ono;
	}

	public void setOno(int ono) {
		this.ono = ono;
	}
}