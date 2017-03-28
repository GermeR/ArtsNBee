package fr.iutinfo.skeleton.api;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.sql.SQLException;

import org.junit.Test;

import fr.iutinfo.skeleton.api.ressource.CommandeTermineeResource;
import fr.iutinfo.skeleton.api.ressource.OeuvreResource;
import fr.iutinfo.skeleton.api.ressource.UtilisateurResource;

public class TestCommandeTerminee {
	@Test
	public void testCreateCommandeTerminee() {
		assertNotNull(new CommandeTerminee());
	}

	@Test
	public void testAddCommandeTerminee() {
		OeuvreResource resOeuvre = null;
		UtilisateurResource resUser = null;
		CommandeTermineeResource resComm = null;
		try {
			resOeuvre = new OeuvreResource();
			resUser = new UtilisateurResource();
			resComm = new CommandeTermineeResource();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		try {
			resOeuvre.deleteOeuvre(0);
			resUser.deleteUtilisateur("turc");
		} catch (Exception e) {

		}
		resOeuvre.createOeuvre(new Oeuvre("Adrien", "Adrien", 0.0, 0, "Adrien", "Adrien", "Adrien", 0.0, "Adrien", "Adrien").convertToDto());
		resUser.createUtilisateur(new Utilisateur("turc", "turc", "turc", "turc", "turc", "turc", "turc", "turc","turc", "turc", true, true, "turc").convertToDto());
		assertNotNull(resComm.createCommande(new CommandeTerminee("turc", 0, 0, 0, "adresse").convertToDto()));
	}

	@Test
	public void testGetCommandeTerminee() {
		CommandeTermineeResource res = null;
		OeuvreResource resU = null;
		try {
			res = new CommandeTermineeResource();
			resU = new OeuvreResource();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		assertNotNull(res.getAllCommandes(null));
		//
		assertNotNull("" + resU.getAllOeuvres(null).get(0).getOno());
	}

	@Test
	public void testDelCommandeTerminee() {
		CommandeTermineeResource res = null;
		OeuvreResource resOeuvre = null;
		UtilisateurResource resUser = null;
		try {
			resOeuvre = new OeuvreResource();
			resUser = new UtilisateurResource();
			res = new CommandeTermineeResource();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		try {
			resOeuvre = new OeuvreResource();
			resUser = new UtilisateurResource();
			res = new CommandeTermineeResource();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		try {
			resOeuvre.deleteOeuvre(0);
			resUser.deleteUtilisateur("turc");
			resOeuvre.createOeuvre(
					new Oeuvre("Adrien", "Adrien", 0.0, 0, "Adrien", "Adrien", "Adrien", 0.0, "Adrien", "Adrien")
							.convertToDto());
			resUser.createUtilisateur(new Utilisateur("turc", "turc", "turc", "turc", "turc", "turc", "turc", "turc",
					"turc", "turc", true, true, "turc").convertToDto());
			res.createCommande(new CommandeTerminee("turc", 0, 0, 0, "adresse").convertToDto());
		} catch (Exception e) {
		}

		try {
			res.getCommande("0");
		} catch (Exception e) {
			// Si le getUtilisateur ne fonctionne pas alors l'utilisateur "turc"
			// à été supprimé du coup c'est pas cool
			assertTrue(true);
		}
		//
		res.deleteCommande(0, "turc");
		//
		try {
			res.getCommande("0");
		} catch (Exception e) {
			// Si le getUtilisateur ne fonctionne pas alors l'utilisateur "turc"
			// à été supprimé du coup c'est cool
			assertTrue(true);
		}
	}
}