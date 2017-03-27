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

import fr.iutinfo.skeleton.common.dto.CommandeTermineeDto;

@Path("/facture")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class CommandeTermineeResource {
    final static Logger logger = LoggerFactory.getLogger(CommandeTermineeResource.class);
    private static CommandeTermineeDao dao = getDbi().open(CommandeTermineeDao.class);

    public CommandeTermineeResource() throws SQLException {
        if (!tableExist("commandeTerminee")) {
            logger.debug("Create table CommandeTerminee");
            dao.createCommandeTermineeTable();
            dao.insert(new CommandeTerminee("Robert",0,14265,0,"adresse @ adresse . rue . france"));
            dao.insert(new CommandeTerminee("Roberto",0,14265,0,"adresse @ adresse . rue . france"));
        }
    }

    @POST
    public CommandeTermineeDto createCommande(CommandeTermineeDto dto) {
    	CommandeTerminee Commande = new CommandeTerminee();
    	Commande.initFromDto(dto);
    	dao.insert(Commande);
        return dto;
    }

    @GET
    @Path("/{login}")
    public CommandeTermineeDto getCommande(@PathParam("login") String login) {
        CommandeTerminee Commande = dao.findByName(login);
        if (Commande == null) {
            throw new WebApplicationException(404);
        }
        return Commande.convertToDto();
    }
    @GET
    @Path("/{ono}:{login}")
    public CommandeTermineeDto getCommande(@PathParam("ono") int ono,@PathParam("login") String login) {
        CommandeTerminee Commande = dao.find(ono,login);
        if (Commande == null) {
            throw new WebApplicationException(404);
        }
        return Commande.convertToDto();
    }

    @GET
    public List<CommandeTermineeDto> getAllCommandes(@QueryParam("q") String query) {
        List<CommandeTerminee> Commandes;
        if (query == null) {
        	Commandes = dao.all();
        } else {
            logger.debug("Search users with query: " + query);
            Commandes = dao.search("%" + query + "%");
        }
        return Commandes.stream().map(CommandeTerminee::convertToDto).collect(Collectors.toList());
    }

    @DELETE
    @Path("/{ono}:{login}")
    public void deleteCommande(@PathParam("ono") int ono,@PathParam("login") String login) {
        dao.delete(ono,login);
    }

}
