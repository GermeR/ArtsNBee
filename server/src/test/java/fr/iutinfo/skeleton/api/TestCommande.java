package fr.iutinfo.skeleton.api;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.sql.SQLException;

import org.junit.Test;

import fr.iutinfo.skeleton.api.ressource.CommandeResource;
import fr.iutinfo.skeleton.api.ressource.OeuvreResource;
import fr.iutinfo.skeleton.api.ressource.UtilisateurResource;

public class TestCommande {
	@Test
	public void testCreateCommande() {
		assertNotNull(new Commande());
	}

	@Test
	public void testAddCommande() {
		OeuvreResource resOeuvre = null;
		UtilisateurResource resUser = null;
		CommandeResource resComm = null;
		try {
			resOeuvre = new OeuvreResource();
			resUser = new UtilisateurResource();
			resComm = new CommandeResource();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		try {
			resOeuvre.deleteOeuvre(0);
			resUser.deleteUtilisateur("turc");
		}catch(Exception e) {
			
		}
		resOeuvre.createOeuvre(new Oeuvre("Adrien", "Adrien", 0.0, 0, "Adrien", "Adrien", "Adrien", 0.0, "Adrien", "Adrien").convertToDto());
		resUser.createUtilisateur(new Utilisateur("turc","turc","turc","turc","turc","turc","turc","turc","turc","turc",true,true,"turc").convertToDto());
		assertNotNull(resComm.createCommande(new Commande("turc",0,false,false,false,false,0,0).convertToDto()));
	}

	@Test
	public void testGetCommande() {
		CommandeResource res = null;
		OeuvreResource resU = null;
		try {
			res = new CommandeResource();
			resU = new OeuvreResource();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		assertNotNull(res.getAllCommandes(null));
		//
		assertNotNull(""+resU.getAllOeuvres(null).get(0).getOno());
	}

	@Test
	public void testDelCommande() {
		CommandeResource res = null;
		OeuvreResource resOeuvre = null;
		UtilisateurResource resUser = null;
		try {
			resOeuvre = new OeuvreResource();
			resUser = new UtilisateurResource();
			res = new CommandeResource();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		try {
			resOeuvre = new OeuvreResource();
			resUser = new UtilisateurResource();
			res = new CommandeResource();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		try {
			resOeuvre.deleteOeuvre(0);
			resUser.deleteUtilisateur("turc");
			resOeuvre.createOeuvre(new Oeuvre("Adrien", "Adrien", 0.0, 0, "Adrien", "Adrien", "Adrien", 0.0, "Adrien", "Adrien").convertToDto());
			resUser.createUtilisateur(new Utilisateur("turc","turc","turc","turc","turc","turc","turc","turc","turc","turc",true,true,"turc").convertToDto());
			res.createCommande(new Commande("turc",0,false,false,false,false,0,0).convertToDto());
		}catch(Exception e) {
		}
		
		try {
			res.getCommande("0");
		}catch (Exception e) {
			// Si le getUtilisateur ne fonctionne pas alors l'utilisateur "turc" à été supprimé du coup c'est pas cool
			assertTrue(false);
		}
		//
		res.deleteCommande(0);
		//
		try {
			res.getCommande("0");
		}catch (Exception e) {
			// Si le getUtilisateur ne fonctionne pas alors l'utilisateur "turc" à été supprimé du coup c'est cool
			assertTrue(true);
		}
	}
}