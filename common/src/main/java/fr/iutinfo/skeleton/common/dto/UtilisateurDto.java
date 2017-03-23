package fr.iutinfo.skeleton.common.dto;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.security.Principal;

public class UtilisateurDto implements Principal {
    final static Logger logger = LoggerFactory.getLogger(UtilisateurDto.class);
    private String login; 
    private String password;
    private String nom; 
    private String prenom; 
    private String dateN; 
    private String fno; 
    private String mail; 
    private String dateDéb; 
    private String dateFin; 
    private String adresse; 
    private boolean optin; 
    private boolean optinPart; 
    private String role;
    
	public String getName() {
		return nom;
	}
	public void setName(String name) {
		this.nom = name;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getDateN() {
		return dateN;
	}
	public void setDateN(String dateN) {
		this.dateN = dateN;
	}
	public String getFno() {
		return fno;
	}
	public void setFno(String fno) {
		this.fno = fno;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getDateDéb() {
		return dateDéb;
	}
	public void setDateDéb(String dateDéb) {
		this.dateDéb = dateDéb;
	}
	public String getDateFin() {
		return dateFin;
	}
	public void setDateFin(String dateFin) {
		this.dateFin = dateFin;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public boolean isOptin() {
		return optin;
	}
	public void setOptin(boolean optin) {
		this.optin = optin;
	}
	public boolean isOptinPart() {
		return optinPart;
	}
	public void setOptinPart(boolean optinPart) {
		this.optinPart = optinPart;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public static Logger getLogger() {
		return logger;
	} 
}
