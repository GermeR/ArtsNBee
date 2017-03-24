package fr.iutinfo.skeleton.common.dto;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ForfaitDto {
	private String fno;
	private double prix;
	private int nbOeuvres;

	public int getNbOeuvres() {
		return nbOeuvres;
	}

	public void setNbOeuvres(int nbOeuvres) {
		this.nbOeuvres = nbOeuvres;
	}
	
	final static Logger logger = LoggerFactory.getLogger(ForfaitDto.class);
	

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	public static Logger getLogger() {
		return logger;
	}

	public String getFno(){
		return fno;
	}
	
	public void setFno(String fno) {
		this.fno = fno;
	}
}