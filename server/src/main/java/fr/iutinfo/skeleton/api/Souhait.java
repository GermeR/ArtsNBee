package fr.iutinfo.skeleton.api;

import java.security.SecureRandom;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.hash.Hasher;
import com.google.common.hash.Hashing;

import fr.iutinfo.skeleton.common.dto.SouhaitDto;

public class Souhait {
	
    final static Logger logger = LoggerFactory.getLogger(User.class);
    public String getSearch() {
		return search;
	}

	public void setSearch(String search) {
		this.search = search;
	}

	public static Logger getLogger() {
		return logger;
	}

	private int ono;
    private String login;
    private String salt;
    private String search;
    
    public Souhait() {
	}
    
    public Souhait(int ono, String login) {
		super();
		this.ono = ono;
		this.login = login;
	}

	public String getSalt() {
        if (salt == null) {
            salt = generateSalt();
        }
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    private String generateSalt() {
        SecureRandom random = new SecureRandom();
        Hasher hasher = Hashing.sha256().newHasher();
        hasher.putLong(random.nextLong());
        return hasher.hash().toString();
    }
    
    public void initFromDto(SouhaitDto dto) {
    	setOno(dto.getOno());
    	setLogin(dto.getLogin());
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

	public SouhaitDto convertToDto() {
		SouhaitDto dto = new SouhaitDto();
	   	dto.setOno(getOno());
    	dto.setLogin(getLogin());
        return dto;
    }
}