package fr.iutinfo.skeleton.common.dto;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.security.Principal;

public class CommandeTermineeDto implements Principal {

	final static Logger logger = LoggerFactory.getLogger(CommandeTermineeDto.class);
	private String login;
	private int ono;
	private double prix;
	private double frais;
	private String adresseLivraison;
	
	public String getAdresseLivraison() {
		return adresseLivraison;
	}
	public void setAdresseLivraison(String adresseLivraison) {
		this.adresseLivraison = adresseLivraison;
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
	public static Logger getLogger() {
		return logger;
	}
	@Override
	public String getName() {
		return login+":"+ono;
	}
}