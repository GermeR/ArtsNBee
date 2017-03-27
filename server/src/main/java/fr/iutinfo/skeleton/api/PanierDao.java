package fr.iutinfo.skeleton.api;

import org.skife.jdbi.v2.sqlobject.*;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;

import java.util.List;

public interface PanierDao {
    @SqlUpdate("create table Panier(ono integer, login varchar(20), primary key (ono, login), foreign key (ono) references Oeuvre(ono), foreign key (login) references utilisateur(login));")
    void createPanierTable();

    @SqlUpdate("insert into Panier (login,ono) values (:login, :ono)")
    @GetGeneratedKeys
    int insert(@BindBean() Panier panier);

    @SqlQuery("select * from Panier where login = :login")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Panier findByName(@Bind("login") String login);

    @SqlQuery("select * from Panier where search like :login")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Panier> search(@Bind("login") String login);

    @SqlUpdate("drop table if exists Panier")
    void dropPanierTable();

    @SqlUpdate("delete from Panier where login = :login AND ono = :ono")
    void delete(@Bind("ono") int ono, @Bind("login") String login);

    @SqlQuery("select * from Panier order by ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Panier> all();

    @SqlQuery("select * from Panier where ono = :ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Panier findById(@Bind("ono") int ono);
    
    void close();
}
