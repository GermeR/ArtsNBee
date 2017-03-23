package fr.iutinfo.skeleton.api;

import java.security.SecureRandom;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.hash.Hasher;
import com.google.common.hash.Hashing;

import fr.iutinfo.skeleton.common.dto.CommandeDto;
import fr.iutinfo.skeleton.common.dto.ForfaitDto;

public class Forfait {
	final static Logger logger = LoggerFactory.getLogger(Forfait.class);
	public static Logger getLogger() {
		return logger;
	}

	private int fno;
	private double prix;
	private int nbOeuvres;
	private String salt;
	private String search;
	
	public Forfait(){}
	
	public Forfait(int fno, double prix, int nbOeuvres) {
		super();
		this.fno = fno;
		this.prix = prix;
		this.nbOeuvres = nbOeuvres;
	}

	public int getFno() {
		return fno;
	}

	public void setFno(int fno) {
		this.fno = fno;
	}

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	public int getNbOeuvres() {
		return nbOeuvres;
	}

	public void setNbOeuvres(int nbOeuvres) {
		this.nbOeuvres = nbOeuvres;
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
    
    public void initFromDto(ForfaitDto dto) {
    	setFno(dto.getFno());
    	setNbOeuvres(dto.getNbOeuvres());
    	setPrix(dto.getPrix());
    }
    
    public ForfaitDto convertToDto() {
        ForfaitDto dto = new ForfaitDto();
        dto.setFno(getFno());
    	dto.setNbOeuvres(getNbOeuvres());
    	dto.setPrix(getPrix());
        return dto;
    }   
}
