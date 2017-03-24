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

import fr.iutinfo.skeleton.common.dto.ForfaitDto;

@Path("/forfait")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ForfaitResource {
    final static Logger logger = LoggerFactory.getLogger(ForfaitResource.class);
    private static ForfaitDao dao = getDbi().open(ForfaitDao.class);

    public ForfaitResource() throws SQLException {
        if (!tableExist("Forfait")) {
        	logger.debug("Création de la table forfait.");
            dao.createForfaitTable();
            dao.insert(new Forfait("Classique", 5, 5));
        }else{
        	logger.debug("Table forfait déjà existante.");
        }
    }

    @PUT
    @Path("/{fno}")
    public void UpdateForfait(@PathParam("fno") String fno, ForfaitDto dto) {
    	Forfait forfait = new Forfait();
    	forfait.initFromDto(dto);
        dao.update(fno, forfait);
    }
    
    @POST
    public ForfaitDto createForfait(ForfaitDto dto) {
    	Forfait Forfait = new Forfait();
    	Forfait.initFromDto(dto);
    	dao.insert(Forfait);
        return dto;
    }

    @GET
    @Path("/{fno}")
    public ForfaitDto getForfait(@PathParam("fno") String fno) {
        Forfait Forfait = dao.findByFNO(fno);
        if (Forfait == null) {
            throw new WebApplicationException(404);
        }
        return Forfait.convertToDto();
    }

    @GET
    public List<ForfaitDto> getAllForfaits(@QueryParam("q") String query) {
        List<Forfait> Forfaits;
        if (query == null) {
        	Forfaits = dao.all();
        } else {
            logger.debug("Search users with query: " + query);
            Forfaits = dao.search("%" + query + "%");
        }
        return Forfaits.stream().map(Forfait::convertToDto).collect(Collectors.toList());
    }
    
    

    @DELETE
    @Path("/{fno}")
    public void deleteForfait(@PathParam("id") String id) {
        dao.delete(id);
    }

}
