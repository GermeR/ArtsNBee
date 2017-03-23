package fr.iutinfo.skeleton.api;

import com.google.common.base.Charsets;
import com.google.common.hash.Hasher;
import com.google.common.hash.Hashing;
import fr.iutinfo.skeleton.common.dto.UtilisateurDto;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.security.Principal;
import java.security.SecureRandom;

public class Utilisateur implements Principal {
    final static Logger logger = LoggerFactory.getLogger(User.class);
    private String login; 
    private String password;
    private String nom; 
    private String prenom; 
    private String dateN; 
    private String fno; 
    private String mail; 
    private String dateDeb; 
    private String dateFin; 
    private String adresse; 
    private boolean optin; 
    private boolean optinPart; 
    private String role; 
    
    private String passwdHash;
    private String salt;
    
    public Utilisateur(String login, String password, String nom, String prenom, String dateN, String fno, String mail, String dateDeb, String dateFin, String adresse, boolean optin, boolean optinPart, String role) {
    	this.login = login; 
    	this.password = password;
    	this.nom = nom;
    	this.dateN = dateN;
    	this.fno = fno;
    	this.mail = mail;
    	this.dateDeb = dateDeb;
    	this.dateFin = dateFin;
    	this.adresse = adresse;
    	this.optin = optin;
    	this.optinPart = optinPart;
    	this.role = role;
    }

    public Utilisateur() {
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        passwdHash = buildHash(password, getSalt());
        this.password = password;
    }

    private String buildHash(String password, String s) {
        Hasher hasher = Hashing.sha256().newHasher();
        hasher.putString(password + s, Charsets.UTF_8);
        return hasher.hash().toString();
    }

    public boolean isGoodPassword(String password) {
        String hash = buildHash(password, getSalt());
        return hash.equals(getPasswdHash());
    }

    public String getPasswdHash() {
        return passwdHash;
    }

    public void setPasswdHash(String passwdHash) {
        this.passwdHash = passwdHash;
    }

    @Override
    public boolean equals(Object arg) {
        if (getClass() != arg.getClass())
            return false;
        Utilisateur user = (Utilisateur) arg;
        return login.equals(user.login) && passwdHash.equals(user.getPasswdHash()) && salt.equals((user.getSalt()));
    }

    @Override
    public String toString() {
        return login + ": " + prenom + ", " + nom + " <" + mail + ">";
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

    public void resetPasswordHash() {
        if (password != null && !password.isEmpty()) {
            setPassword(getPassword());
        }
    }

    public void initFromDto(UtilisateurDto dto) {    	
    	this.setLogin(dto.getLogin());
        this.setPassword(dto.getPassword());
        this.setName(dto.getName());
        this.setPrenom(dto.getPrenom());
        this.setDateN(dto.getDateN());
        this.setFno(dto.getFno());
        this.setMail(dto.getMail());
        this.setDateDéb(dto.getDateDéb());
        this.setDateFin(dto.getDateFin());
        this.setAdresse(dto.getAdresse());
        this.setOptin(dto.isOptin());
        this.setOptinPart(dto.isOptinPart());
        this.setRole(dto.getRole());
    }

    public UtilisateurDto convertToDto() {
    	UtilisateurDto dto = new UtilisateurDto();
    	dto.setLogin(this.getLogin());
    	dto.setPassword(this.getPassword());
    	dto.setName(this.getName());
    	dto.setPrenom(this.getPrenom());
    	dto.setDateN(this.getDateN());
    	dto.setFno(this.getFno());
    	dto.setMail(this.getMail());
    	dto.setDateDéb(this.getDateDeb());
    	dto.setDateFin(this.getDateFin());
    	dto.setAdresse(this.getAdresse());
    	dto.setOptin(this.isOptin());
    	dto.setOptinPart(this.isOptinPart());
    	dto.setRole(this.getRole());
        return dto;
    }

	@Override
	public String getName() {
		return nom;
	}
	
	public void setName(String name){
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

	public String getDateDeb() {
		return dateDeb;
	}

	public void setDateDéb(String dateDeb) {
		this.dateDeb = dateDeb;
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

	public static Logger getLogger() {
		return logger;
	}
}
