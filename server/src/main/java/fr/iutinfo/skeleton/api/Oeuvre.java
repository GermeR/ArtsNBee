package fr.iutinfo.skeleton.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.iutinfo.skeleton.common.dto.OeuvreDto;

public class Oeuvre {
	
    final static Logger logger = LoggerFactory.getLogger(User.class);
	private int ono;
	private String ano;
	private String nom;
	private double prix;
	private int promo;
	private String description;
	private String type;
	private String dimension;
	private double poids;
	private String thematique;
	   
    public Oeuvre() {
	}
    
    /**
     * Constructeur avec ID spécifié (pour les reste des opérations)
     * @param ono
     * @param ano
     * @param nom
     * @param prix
     * @param promo
     * @param description
     * @param type
     * @param dimension
     * @param poids
     * @param thematique
     */
	public Oeuvre(int ono, String ano, String nom, double prix, int promo, String description, String type,
			String dimension, double poids, String thematique) {
		this.ono = ono;
		this.ano = ano;
		this.nom = nom;
		this.prix = prix;
		this.promo = promo;
		this.description = description;
		this.type = type;
		this.dimension = dimension;
		this.poids = poids;
		this.thematique = thematique;
	}
	
	/**
     * Constructeur avec ID non-spécifié (pour les insertions)
     * @param ono
     * @param ano
     * @param nom
     * @param prix
     * @param promo
     * @param description
     * @param type
     * @param dimension
     * @param poids
     * @param thematique
     */
	public Oeuvre(String ano, String nom, double prix, int promo, String description, String type,
			String dimension, double poids, String thematique) {
		this.ano = ano;
		this.nom = nom;
		this.prix = prix;
		this.promo = promo;
		this.description = description;
		this.type = type;
		this.dimension = dimension;
		this.poids = poids;
		this.thematique = thematique;
	}

    public void initFromDto(OeuvreDto dto) {    	
    	this.setOno(dto.getOno());
    	this.setAno(dto.getAno());
    	this.setNom(dto.getNom());
    	this.setPrix(dto.getPrix());
    	this.setPromo(dto.getPromo());
    	this.setDescription(dto.getDescription());
    	this.setType(dto.getType());
    	this.setDimension(dto.getDimension());
    	this.setPoids(dto.getPoids());
    	this.setThematique(dto.getThematique());   	
    }

    public OeuvreDto convertToDto() {
    	OeuvreDto dto = new OeuvreDto();
    	dto.setOno(this.getOno());
    	dto.setAno(this.getAno());
    	dto.setNom(this.getNom());
    	dto.setPrix(this.getPrix());
    	dto.setPromo(this.getPromo());
    	dto.setDescription(this.getDescription());
    	dto.setType(this.getType());
    	dto.setDimension(this.getDimension());
    	dto.setPoids(this.getPoids());
    	dto.setThematique(this.getThematique()); 
        return dto;
    }

	public int getOno() {
		return ono;
	}

	public void setOno(int ono) {
		this.ono = ono;
	}

	public String getAno() {
		return ano;
	}

	public void setAno(String ano) {
		this.ano = ano;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	public int getPromo() {
		return promo;
	}

	public void setPromo(int promo) {
		this.promo = promo;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDimension() {
		return dimension;
	}

	public void setDimension(String dimension) {
		this.dimension = dimension;
	}

	public double getPoids() {
		return poids;
	}

	public void setPoids(double poids) {
		this.poids = poids;
	}

	public String getThematique() {
		return thematique;
	}

	public void setThematique(String thematique) {
		this.thematique = thematique;
	}

	public static Logger getLogger() {
		return logger;
	}

    
}