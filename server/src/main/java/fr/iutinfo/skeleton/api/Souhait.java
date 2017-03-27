package fr.iutinfo.skeleton.api;

import java.security.SecureRandom;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.hash.Hasher;
import com.google.common.hash.Hashing;

import fr.iutinfo.skeleton.common.dto.SouhaitDto;

public class Souhait {
	
    final static Logger logger = LoggerFactory.getLogger(User.class);
	private int ono;
    private String login;
    
    public Souhait() {
	}
    
    public Souhait(int ono, String login) {
		super();
		this.ono = ono;
		this.login = login;
	}

    public void initFromDto(SouhaitDto dto) {
    	setOno(dto.getOno());
    	setLogin(dto.getLogin());
    }

	public SouhaitDto convertToDto() {
		SouhaitDto dto = new SouhaitDto();
	   	dto.setOno(getOno());
    	dto.setLogin(getLogin());
        return dto;
    }

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