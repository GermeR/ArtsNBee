package fr.iutinfo.skeleton.api;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.sql.SQLException;

import org.junit.Test;

public class TestUtilisateur {

	@Test
	public void testCreateUtilisateur() {
		assertNotNull(new Utilisateur());
	}

	@Test
	public void testAddUtilisateur() {
		UtilisateurResource res = null;
		try {
			res = new UtilisateurResource();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		assertNotNull(res.createUtilisateur(new Utilisateur("turc","turc","turc","turc","turc","turc","turc","turc","turc","turc",true,true,"turc").convertToDto()));
	}

	@Test
	public void testGetUtilisateur() {
		UtilisateurResource res = null;
		try {
			res = new UtilisateurResource();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		assertNotNull(res.getUtilisateur("turc"));
	}

	@Test
	public void testDelUtilisateur() {
		UtilisateurResource res=null;
		try {
			res = new UtilisateurResource();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		try {
			res.getUtilisateur("turc");
		}catch (Exception e) {
			// Si le getUtilisateur ne fonctionne pas alors l'utilisateur "turc" à été supprimé du coup c'est pas cool
			assertTrue(false);
		}
		//
		res.deleteUtilisateur("turc");
		//
		try {
			res.getUtilisateur("turc");
		}catch (Exception e) {
			// Si le getUtilisateur ne fonctionne pas alors l'utilisateur "turc" à été supprimé du coup c'est cool
			assertTrue(true);
		}
	}
}