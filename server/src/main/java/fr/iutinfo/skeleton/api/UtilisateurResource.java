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
import fr.iutinfo.skeleton.common.dto.UtilisateurDto;


@Path("/utilisateur")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UtilisateurResource {
    final static Logger logger = LoggerFactory.getLogger(UtilisateurResource.class);
    private static UtilisateurDao dao = getDbi().open(UtilisateurDao.class);

    public UtilisateurResource() throws SQLException {
        if (!tableExist("utilisateur")) {
            logger.debug("Creation de la table utilisateur");
            dao.createUtilisateurTable();
            dao.insert(new Utilisateur("Robert", "Robert", "Georgi", "Robert", "1977-04-22T01:00:00-05:00","Classique", "robert.georgi@gmail.com", "1977-04-22T01:00:00-05:00", "1978-04-22T01:00:00-05:00", "05 Rue des orgie à fleur", false, false, "Client"));
            dao.insert(new Utilisateur("Adrien", "Adrien","LeRageux", "Adrien", "1977-04-22T01:00:00-05:00","Premium", "adrien.lerageux@gmail.com", "1977-04-22T01:00:00-05:00", "1978-04-22T01:00:00-05:00", "05 Rue des rageux à fleur", true, true, "Artiste"));
        } else {
        	logger.debug("Table utilsiateur déjà existatne");
        }
    }

    @POST
    public UtilisateurDto createUtilisateur(UtilisateurDto dto) {
    	Utilisateur user = new Utilisateur();
        user.initFromDto(dto);
        user.resetPasswordHash();
        //int id = dao.insert(user);
        //dto.setId(id);
        return dto;
    }

    @GET
    @Path("/{name}")
    public UtilisateurDto getUtilisateur(@PathParam("name") String name) {
        Utilisateur user = dao.findByName(name);
        if (user == null) {
            throw new WebApplicationException(404);
        }
        return user.convertToDto();
    }

    @GET
    public List<UtilisateurDto> getAllUtilisateurs(@QueryParam("q") String query) {
        List<Utilisateur> users;
        if (query == null) {
            users = dao.all();
        } else {
            logger.debug("Search users with query: " + query);
            users = dao.search("%" + query + "%");
        }
        return users.stream().map(Utilisateur::convertToDto).collect(Collectors.toList());
    }
    
    @GET
    @Path("/{login}:{password}")
    public UtilisateurDto get(@PathParam("login") String login,@PathParam("password") String password) {
        Utilisateur Utilisateur = dao.findByAll(login,password);
        if (Utilisateur == null) {
            throw new WebApplicationException(404);
        }
        return Utilisateur.convertToDto();
    }

    @DELETE
    @Path("/{id}")
    public void deleteUtilisateur(@PathParam("login") String login) {
        dao.delete(login);
    }
}