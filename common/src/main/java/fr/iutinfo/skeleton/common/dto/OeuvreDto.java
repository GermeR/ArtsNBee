package fr.iutinfo.skeleton.common.dto;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OeuvreDto {

    final static Logger logger = LoggerFactory.getLogger(OeuvreDto.class);
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
	private String img;
	
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
	
	public String getImg(){
		return img;
	}
	
	public void setImg(String img){
		this.img = img;
	}
	public static Logger getLogger() {
		return logger;
	}
}