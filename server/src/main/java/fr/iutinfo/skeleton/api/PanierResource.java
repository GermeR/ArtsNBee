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
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.iutinfo.skeleton.common.dto.PanierDto;

@Path("/panier")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class PanierResource {
    final static Logger logger = LoggerFactory.getLogger(PanierResource.class);
    private static PanierDao dao = getDbi().open(PanierDao.class);

    public PanierResource() throws SQLException {
        if (!tableExist("Panier")) {
            logger.debug("Crate table Paniers");
            dao.createPanierTable();
            dao.insert(new Panier(1,"client"));
        }
    }

    @POST
	public PanierDto createPanier(PanierDto dto) {
    	Panier panier = new Panier();
		panier.initFromDto(dto);
		dao.insert(panier);
		return dto;
	}

    @GET
    @Path("/{login}")
    public PanierDto getCommande(@PathParam("login") String login) {
        Panier panier = dao.findByName(login);
        if (panier == null) {
            throw new WebApplicationException(404);
        }
        return panier.convertToDto();
    }

    @GET
    public List<PanierDto> getAllPaniers(@QueryParam("q") String query) {
        List<Panier> Paniers;
        if (query == null) {
        	Paniers = dao.all();
        } else {
            logger.debug("Search users with query: " + query);
            Paniers = dao.search("%" + query + "%");
        }
        return Paniers.stream().map(Panier::convertToDto).collect(Collectors.toList());
    }

    @DELETE
    @Path("/{ono}:{login}")
    public void deletePanier(@PathParam("ono") int ono , @PathParam("login") String login) {
        dao.delete(ono,login);
    }

}
