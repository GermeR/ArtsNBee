package fr.iutinfo.skeleton.api;

import static fr.iutinfo.skeleton.api.BDDFactory.getDbi;
import static fr.iutinfo.skeleton.api.BDDFactory.tableExist;

import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.iutinfo.skeleton.common.dto.OeuvreDto;
import fr.iutinfo.skeleton.common.dto.UtilisateurDto;

@Path("/oeuvre")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class OeuvreResource {
	final static Logger logger = LoggerFactory.getLogger(OeuvreResource.class);
	private static OeuvreDao dao = getDbi().open(OeuvreDao.class);

	public OeuvreResource() throws SQLException {
		if (!tableExist("oeuvre")) {
			logger.debug("Création de la table oeuvre.");
			dao.createOeuvreTable();
			dao.insert(new Oeuvre("artiste", "Tintin", 50.0, 0, "blablabla", "Toile", "180x180", 5.8, "Arts"));
			dao.insert(new Oeuvre("artiste", "Tintin au tibet", 100.0, 0, "blablabla", "Sculpture", "40x10", 10.0, "Arts"));
		}
	}
	@POST
	public OeuvreDto createOeuvre(OeuvreDto dto) {
		Oeuvre oeuvre = new Oeuvre();
		oeuvre.initFromDto(dto);
		int id = dao.insert(oeuvre);
		dto.setOno(id);
		return dto;
	}

	@GET
	@Path("/{name}")
	public List<OeuvreDto> getOeuvre(@PathParam("name") String name) {
		List<Oeuvre> oeuvre = dao.oeuvreDe(name);
		if (oeuvre == null) {
			throw new WebApplicationException(404);
		}
		return oeuvre.stream().map(Oeuvre::convertToDto).collect(Collectors.toList());
	}

	@GET
	@Path("/{ono}")
	public OeuvreDto getOeuvre(@PathParam("ono") int ono) {
		Oeuvre oeuvre = dao.findByName(ono);
		if (oeuvre == null) {
			throw new WebApplicationException(404);
		}
		return oeuvre.convertToDto();
	}
	
	@GET
	public List<OeuvreDto> getAllOeuvres(@QueryParam("q") String query) {
		List<Oeuvre> oeuvres;
		if (query == null) {
			oeuvres = dao.all();
		} else {
			logger.debug("Search users with query: " + query);
			oeuvres = dao.search("%" + query + "%");
		}
		return oeuvres.stream().map(Oeuvre::convertToDto).collect(Collectors.toList());
	}
	
	@PUT
	@Path("/{ono}")
	public void UpdateOeuvre(@PathParam("ono") int ono, OeuvreDto dto) {
		Oeuvre oeuvre = new Oeuvre();
		oeuvre.initFromDto(dto);
		dao.update(ono, oeuvre);
	}


	@DELETE
	@Path("/{id}")
	public void deleteOeuvre(@PathParam("id") int id) {
		dao.delete(id);
	}

}
