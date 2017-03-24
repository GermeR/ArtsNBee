package fr.iutinfo.skeleton.api;

import java.security.SecureRandom;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.hash.Hasher;
import com.google.common.hash.Hashing;

import fr.iutinfo.skeleton.common.dto.CommandeTermineeDto;

public class CommandeTerminee {

	final static Logger logger = LoggerFactory.getLogger(CommandeTerminee.class);
	private String login;
	private int ono;
	private double prix;
	private double frais;
	private String adresseLivraison;
	private String salt;
	private String search;
	
	public CommandeTerminee() {
	}
	
    public CommandeTerminee(String login, int ono, double prix, double frais, String adresseLivraison) {
		super();
		this.login = login;
		this.ono = ono;
		this.prix = prix;
		this.frais = frais;
		this.adresseLivraison = adresseLivraison;
	}

	public void initFromDto(CommandeTermineeDto dto) {
    	setLogin(dto.getLogin());
    	setOno(dto.getOno());
    	setPrix(dto.getPrix());
    	setFrais(dto.getFrais());
    	setAdresseLivraison(dto.getAdresseLivraison());
    }
    
    public CommandeTermineeDto convertToDto() {
        CommandeTermineeDto dto = new CommandeTermineeDto();
    	dto.setLogin(getLogin());
    	dto.setOno(getOno());
    	dto.setPrix(getPrix());
    	dto.setFrais(getFrais());
    	dto.setAdresseLivraison(getAdresseLivraison());
        return dto;
    }

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public int getOno() {
		return ono;
	}

	public void setOno(int ono) {
		this.ono = ono;
	}

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	public double getFrais() {
		return frais;
	}

	public void setFrais(double frais) {
		this.frais = frais;
	}

	public String getAdresseLivraison() {
		return adresseLivraison;
	}

	public void setAdresseLivraison(String adresseLivraison) {
		this.adresseLivraison = adresseLivraison;
	}

	public static Logger getLogger() {
		return logger;
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
    
    public void setSearch(String search) {
        this.search = search;
    }
    
    public String getSearch() {
		return search;
	}
}
