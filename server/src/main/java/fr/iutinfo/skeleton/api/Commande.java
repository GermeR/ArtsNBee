package fr.iutinfo.skeleton.api;

import java.security.SecureRandom;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.hash.Hasher;
import com.google.common.hash.Hashing;

import fr.iutinfo.skeleton.common.dto.CommandeDto;

public class Commande {
	final static Logger logger = LoggerFactory.getLogger(Commande.class);
	private String login;
	private int ono;
	private boolean paiement, envoi, reception, remuneration;
	private double prix;
	private double frais;
	private String salt;
	private String search;	
	
	public Commande(){}

	public Commande(String login, int ono, boolean paiement, boolean envoi, boolean reception, boolean remuneration,
			double prix, double frais) {
		this.login = login;
		this.ono = ono;
		this.paiement = paiement;
		this.envoi = envoi;
		this.reception = reception;
		this.remuneration = remuneration;
		this.prix = prix;
		this.frais = frais;
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

	public boolean getPaiement() {
		return paiement;
	}

	public void setPaiement(boolean paiement) {
		this.paiement = paiement;
	}

	public boolean getEnvoi() {
		return envoi;
	}

	public void setEnvoi(boolean envoi) {
		this.envoi = envoi;
	}

	public boolean getRemuneration() {
		return remuneration;
	}

	public void setRemuneration(boolean remuneration) {
		this.remuneration = remuneration;
	}

	public boolean getReception() {
		return reception;
	}
	
	public void setReception(boolean reception) {
		this.reception = reception;
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
    
    public void initFromDto(CommandeDto dto) {
    	setLogin(dto.getLogin());
    	setOno(dto.getOno());
    	setPaiement(dto.isPaiement());
    	setEnvoi(dto.isEnvoi());
    	setReception(dto.isReception());
    	setRemuneration(dto.isRemuneration());
    	setPrix(dto.getPrix());
    	setFrais(dto.getFrais());
    }

    public CommandeDto convertToDto() {
        CommandeDto dto = new CommandeDto();
    	dto.setLogin(getLogin());
    	dto.setOno(getOno());
    	dto.setPaiement(getPaiement());
    	dto.setEnvoi(getEnvoi());
    	dto.setReception(getReception());
    	dto.setRemuneration(getRemuneration());
    	dto.setPrix(getPrix());
    	dto.setFrais(getFrais());
        return dto;
    }
}
