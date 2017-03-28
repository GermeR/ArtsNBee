package fr.iutinfo.skeleton.api.ressource;

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

import fr.iutinfo.skeleton.api.Commande;
import fr.iutinfo.skeleton.api.dao.CommandeDao;
import fr.iutinfo.skeleton.common.dto.CommandeDto;

@Path("/commande")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class CommandeResource {
    final static Logger logger = LoggerFactory.getLogger(CommandeResource.class);
    private static CommandeDao dao = getDbi().open(CommandeDao.class);

    public CommandeResource() throws SQLException {
        if (!tableExist("commande")) {
            logger.debug("Crate table Commandes");
            dao.createCommandeTable();
            dao.insert(new Commande("client", 1, false, false, false, false, 12, 1));
        }
    }

    @POST
	public CommandeDto createCommande(CommandeDto dto) {
    	Commande commande = new Commande();
		commande.initFromDto(dto);
		dao.insert(commande);
		return dto;
	}
    

    @PUT
    @Path("/{login}:{ono}")
    public void UpdateForfait(@PathParam("login") String login, @PathParam("ono") int ono, CommandeDto dto) {
    	Commande commande = new Commande();
    	commande.initFromDto(dto);
        dao.update(login, ono, commande);
    }

    @GET
    @Path("/{ono}")
    public CommandeDto getCommande(@PathParam("ono") String ono) {
        Commande Commande = dao.findByName(ono);
        if (Commande == null) {
            throw new WebApplicationException(404);
        }
        return Commande.convertToDto();
    }

    @GET
    public List<CommandeDto> getAllCommandes(@QueryParam("q") String query) {
        List<Commande> Commandes;
        if (query == null) {
        	Commandes = dao.all();
        } else {
            logger.debug("Search users with query: " + query);
            Commandes = dao.search("%" + query + "%");
        }
        return Commandes.stream().map(Commande::convertToDto).collect(Collectors.toList());
    }

    @DELETE
    @Path("/{ono}")
    public void deleteCommande(@PathParam("ono") int ono) {
        dao.delete(ono);
    }
}