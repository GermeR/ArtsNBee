package fr.iutinfo.skeleton.api;

import fr.iutinfo.skeleton.common.dto.UserDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

import static fr.iutinfo.skeleton.api.BDDFactory.getDbi;
import static fr.iutinfo.skeleton.api.BDDFactory.tableExist;

@Path("/oeuvre")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class OeuvreResource {
    final static Logger logger = LoggerFactory.getLogger(OeuvreResource.class);
    private static OeuvreDao dao = getDbi().open(OeuvreDao.class);

    public OeuvreResource() throws SQLException {
        if (!tableExist("oeuvre")) {
            logger.debug("Crate table oeuvres");
            dao.createOeuvreTable();
            dao.insert(new Oeuvre("Robert", "La page blanche", 180.0, 0, "Blablabla", "Tableau", "180x180", 10, "J"));
        }
    }

    @POST
    public OeuvreDto createOeuvre(OeuvreDto dto) {
    	Oeuvre oeuvre = new Oeuvre();
    	oeuvre.initFromDto(dto);
        int id = dao.insert(oeuvre);
        dto.setId(id);
        return dto;
    }

    @GET
    @Path("/{name}")
    public UserDto getOeuvre(@PathParam("name") String name) {
        Oeuvre oeuvre = dao.findByName(name);
        if (oeuvre == null) {
            throw new WebApplicationException(404);
        }
        return oeuvre.convertToDto();
    }

    @GET
    public List<UserDto> getAllOeuvres(@QueryParam("q") String query) {
        List<Oeuvre> oeuvres;
        if (query == null) {
        	oeuvres = dao.all();
        } else {
            logger.debug("Search users with query: " + query);
            oeuvres = dao.search("%" + query + "%");
        }
        return oeuvres.stream().map(Oeuvre::convertToDto).collect(Collectors.toList());
    }

    @DELETE
    @Path("/{id}")
    public void deleteOeuvre(@PathParam("id") int id) {
        dao.delete(id);
    }

}
