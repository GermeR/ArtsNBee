package fr.iutinfo.skeleton.api;

import org.skife.jdbi.v2.sqlobject.*;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;

import java.util.List;

public interface UtilisateurDao {
    @SqlUpdate("create table utilisateur(login varchar(20) primary key, password varchar(20), nom varchar(20), prenom varchar(20), dateN date, fno varchar(20), mail text, dateDéb date, dateFin date, adresse text,optin boolean, optinPart boolean, role varchar(5), foreign key (fno) references forfait(fno));")
    void createUtilisateurTable();

    @SqlUpdate("insert into utilisateur (login , password , nom , prenom , dateN , fno , mail , dateDéb , dateFin , adresse ,optin , optinPart , role ) values (:login , :password , :nom , :prenom , :dateN , :fno , :mail , :dateDéb , :dateFin , :adresse ,:optin , :optinPart , :role )")
    @GetGeneratedKeys
    int insert(@BindBean() Utilisateur Utilisateur);

    @SqlQuery("select * from utilisateur where login = :login")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Utilisateur findByName(@Bind("login") String login);

    @SqlQuery("select * from utilisateur where search like :login")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Utilisateur> search(@Bind("login") String login);

    @SqlUpdate("drop table if exists utilisateur")
    void dropUtilisateurTable();

    @SqlUpdate("delete from utilisateur where login = :login")
    void delete(@Bind("login") String login);

    @SqlQuery("select * from utilisateur order by login")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Utilisateur> all();

    @SqlQuery("select * from utilisateur where login = :login")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Utilisateur findById(@Bind("login") String login);

    void close();
}
