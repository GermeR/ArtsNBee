package fr.iutinfo.skeleton.api.dao;

import org.skife.jdbi.v2.sqlobject.*;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;

import fr.iutinfo.skeleton.api.Souhait;

import java.util.List;

public interface SouhaitDao {
    @SqlUpdate("create table Souhait(ono integer, login varchar(20), primary key (ono, login), foreign key (ono) references oeuvre(ono), foreign key (login) references user(login));")
    void createSouhaitTable();

    @SqlUpdate("insert into Souhait (ono,login) values (:ono , :login)")
    @GetGeneratedKeys
    int insert(@BindBean() Souhait Souhait);

    @SqlQuery("select * from Souhait where login = :login AND ono = :ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Souhait findByName(@Bind("ono") int ono,@Bind("login") String login);

    @SqlQuery("select * from Souhait where search like :login")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Souhait> search(@Bind("nom") String nom);

    @SqlUpdate("drop table if exists Souhait")
    void dropSouhaitTable();

    @SqlUpdate("delete from Souhait where ono = :ono AND login = :login")
    void delete(@Bind("ono") int ono, @Bind("login") String login);

    @SqlQuery("select * from Souhait order by ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Souhait> all();

    @SqlQuery("select * from Souhait where login = :login")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Souhait> findById(@Bind("login") String login);
    
    @SqlQuery("select * from Oeuvre, Souhait where Souhait.login = :login and Oeuvre.ono = Souhait.ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Oeuvre> findOeuvres(@Bind("login") String login);

    void close();
}
