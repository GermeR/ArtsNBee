package fr.iutinfo.skeleton.api;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;

public class TestOeuvre {

	@Test
	public void testCreateOeuvre() {
		assertNotNull(new Oeuvre());
		assertNotNull(new Oeuvre(0, "", "turc", 100, 5, "ceci est une description", "test", "100*100*100", 1500, "thematique"));
		assertNotNull(new Oeuvre("", "turc", 100, 5, "ceci est une description", "test", "100*100*100", 1500, "thematique"));
	}
}
