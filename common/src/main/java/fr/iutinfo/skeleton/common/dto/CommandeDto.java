package fr.iutinfo.skeleton.common.dto;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.security.Principal;

public class CommandeDto implements Principal {

	final static Logger logger = LoggerFactory.getLogger(CommandeDto.class);
	private String login;
	private int ono;
	private boolean paiement, envoi, reception, remuneration;
	private double prix;
	private double frais;
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
	public boolean isPaiement() {
		return paiement;
	}
	public void setPaiement(boolean paiement) {
		this.paiement = paiement;
	}
	public boolean isEnvoi() {
		return envoi;
	}
	public void setEnvoi(boolean envoi) {
		this.envoi = envoi;
	}
	public boolean isReception() {
		return reception;
	}
	public void setReception(boolean reception) {
		this.reception = reception;
	}
	public boolean isRemuneration() {
		return remuneration;
	}
	public void setRemuneration(boolean remuneration) {
		this.remuneration = remuneration;
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