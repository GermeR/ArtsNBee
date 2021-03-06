package fr.iutinfo.skeleton.api;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.sql.SQLException;

import org.junit.Test;

import fr.iutinfo.skeleton.api.ressource.OeuvreResource;

public class TestOeuvre {
	
	@Test
	public void testCreateOeuvre() {
		assertNotNull(new Oeuvre());
		assertNotNull(new Oeuvre(0, "", "turc", 100, 5, "ceci est une description", "test", "100*100*100", 1500, "thematique", "Ressources/img.jpg"));
		assertNotNull(new Oeuvre("", "turc", 100, 5, "ceci est une description", "test", "100*100*100", 1500, "thematique", "Ressources/img.jpg"));
	}
	
	@Test
	public void testAddOeuvre() {
		OeuvreResource res=null;
		try {
			res = new OeuvreResource();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		assertNotNull(res.createOeuvre(new Oeuvre("Adrien","Adrien",0.0,0,"Adrien","Adrien","Adrien",0.0,"Adrien","Adrien").convertToDto()));
	}
	
	@Test
	public void testGetOeuvre() {
		OeuvreResource res=null;
		try {
			res = new OeuvreResource();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		assertNotNull(res.getAllOeuvres(null));
		//
		res.createOeuvre(new Oeuvre("Adrien","Adrien",0.0,0,"Adrien","Adrien","Adrien",0.0,"Adrien","Adrien").convertToDto());
		//
		assertNotNull(res.getOeuvre("turc"));
	}
	
	@Test
	public void testDelOeuvre() {
		OeuvreResource res=null;
		try {
			res = new OeuvreResource();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		res.deleteOeuvre("turc");
		assertTrue(res.getOeuvre("turc").toString().equals("[]"));
	}
	
}