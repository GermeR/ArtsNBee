package fr.iutinfo.skeleton.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.iutinfo.skeleton.common.dto.ForfaitDto;

public class Forfait {
	final static Logger logger = LoggerFactory.getLogger(Forfait.class);
	public static Logger getLogger() {
		return logger;
	}

	private String fno;
	private double prix;
	private int nbOeuvres;
	
	public Forfait(){}
	
	public Forfait(String fno, double prix, int nbOeuvres) {
		super();
		this.fno = fno;
		this.prix = prix;
		this.nbOeuvres = nbOeuvres;
	}

	public String getFno() {
		return fno;
	}

	public void setFno(String fno) {
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
