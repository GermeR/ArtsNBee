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

import fr.iutinfo.skeleton.common.dto.SouhaitDto;

@Path("/souhait")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class SouhaitResource {
    final static Logger logger = LoggerFactory.getLogger(SouhaitResource.class);
    private static SouhaitDao dao = getDbi().open(SouhaitDao.class);

    public SouhaitResource() throws SQLException {
        if (!tableExist("Souhait")) {
        	logger.debug("Création de la table souhait.");
            dao.createSouhaitTable();
        } else {
        	logger.debug("Table souhait déjà existante.");
        }
    }

    @POST
    public SouhaitDto createSouhait(SouhaitDto dto) {
    	Souhait Souhait = new Souhait();
    	Souhait.initFromDto(dto);
    	int id = dao.insert(Souhait);
        dto.setOno(id);
        return dto;
    }

    @GET
    @Path("/{ono}:{login}")
    public SouhaitDto getSouhait(@PathParam("ono") int ono,@PathParam("login") String login) {
        Souhait Souhait = dao.findByName(ono,login);
        if (Souhait == null) {
            throw new WebApplicationException(404);
        }
        return Souhait.convertToDto();
    }

    @GET
    public List<SouhaitDto> getAllSouhaits(@QueryParam("q") String query) {
        List<Souhait> Souhaits;
        if (query == null) {
        	Souhaits = dao.all();
        } else {
            logger.debug("Search users with query: " + query);
            Souhaits = dao.search("%" + query + "%");
        }
        return Souhaits.stream().map(Souhait::convertToDto).collect(Collectors.toList());
    }

    @DELETE
    @Path("/{ono}:{login}")
    public void deleteSouhait(@PathParam("ono") int ono , @PathParam("login") String login) {
        dao.delete(ono, login);
    }

}
