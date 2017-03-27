package fr.iutinfo.skeleton.api;

import java.util.List;

import org.skife.jdbi.v2.sqlobject.Bind;
import org.skife.jdbi.v2.sqlobject.BindBean;
import org.skife.jdbi.v2.sqlobject.GetGeneratedKeys;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.SqlUpdate;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;

public interface UtilisateurDao {
    @SqlUpdate("create table utilisateur(login varchar(20) primary key, password varchar(20)"+
    		", nom varchar(20), prenom varchar(20), dateN varchar(25), fno varchar(20), mail text,"+
    		" dateDeb varchar(25), dateFin varchar(25), adresse text,optin boolean, optinPart boolean,"+
    		" role varchar(5), foreign key (fno) references forfait(fno));")
    void createUtilisateurTable();

    @SqlUpdate("insert into utilisateur (login,password,nom,prenom,dateN,fno,mail,dateDeb,dateFin,adresse,optin,optinPart,role) values (:login,:password,:nom,:prenom,:dateN,:fno,:mail,:dateDeb,:dateFin,:adresse,:optin,:optinPart,:role)")
    @GetGeneratedKeys
    int insert(@BindBean() Utilisateur Utilisateur);

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
    Utilisateur findByLogin(@Bind("login") String login);
    
    @SqlQuery("select * from utilisateur where login = :login and password = :password")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Utilisateur findByLoginAndPassword(@Bind("login") String login, @Bind("password") String password);
    
	@SqlUpdate("update utilisateur set password = :password, nom = :nom, prenom = :prenom, dateN = :dateN, fno = :fno, mail = :mail , dateDeb = :dateDeb, dateFin = :dateFin, adresse = :adresse,optin = :optin, optinPart = :optinPart, role = :role where login = :log")
	void update(@Bind("log") String login, @BindBean() Utilisateur utilisateur);

    void close();
}
