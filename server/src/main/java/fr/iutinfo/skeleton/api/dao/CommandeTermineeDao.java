package fr.iutinfo.skeleton.api.dao;

import org.skife.jdbi.v2.sqlobject.*;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;

import fr.iutinfo.skeleton.api.CommandeTerminee;

import java.util.List;

public interface CommandeTermineeDao {
    @SqlUpdate("create table CommandeTerminee(ono integer, login varchar(20), prix numeric(6,2), frais numeric(4,2), adresseLivraison varchar(100), primary key (ono, login), foreign key (ono) references Oeuvre(ono), foreign key (login) references user(login));")
    void createCommandeTermineeTable();

    @SqlUpdate("insert into CommandeTerminee (ono,login,prix,frais,adresseLivraison) values (:ono, :login, :prix, :frais, :adresseLivraison)")
    @GetGeneratedKeys
    int insert(@BindBean() CommandeTerminee CommandeTerminee);

    @SqlQuery("select * from CommandeTerminee where login = :login")
    @RegisterMapperFactory(BeanMapperFactory.class)
    CommandeTerminee findByName(@Bind("login") String login);

    @SqlQuery("select * from CommandeTerminee where login = :login AND ono =:ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    CommandeTerminee find(@Bind("ono") int ono,@Bind("login") String login);
    
    @SqlQuery("select * from CommandeTerminee where search like :login")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<CommandeTerminee> search(@Bind("login") String login);

    @SqlUpdate("drop table if exists CommandeTerminee")
    void dropCommandeTermineeTable();

    @SqlUpdate("delete from CommandeTerminee where ono = :ono and login = :login")
    void delete(@Bind("ono") int ono ,@Bind("login") String login);

    @SqlQuery("select * from CommandeTerminee order by ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<CommandeTerminee> all();

    @SqlQuery("select * from CommandeTerminee where ono = :ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    CommandeTerminee findById(@Bind("ono") int ono);

    void close();
}
