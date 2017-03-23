package fr.iutinfo.skeleton.common.dto;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.security.Principal;

public class ForfaitDto implements Principal {
	private int fno;
	private double prix;
	public int getFno() {
		return fno;
	}

	public void setFno(int fno) {
		this.fno = fno;
	}

	public int getNbOeuvres() {
		return nbOeuvres;
	}

	public void setNbOeuvres(int nbOeuvres) {
		this.nbOeuvres = nbOeuvres;
	}

	private int nbOeuvres;
	
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

	public String getName() {
		return "" + fno;
	}

	public void setName(int str) {
		this.fno = str;
	}
}