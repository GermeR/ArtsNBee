package fr.iutinfo.skeleton.api;

import org.skife.jdbi.v2.sqlobject.*;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;

import java.util.List;

public interface OeuvreDao {
    @SqlUpdate("create table oeuvre(ono serial primary key, nom varchar(20),ano varchar(20), prix numeric(6,2), promo integer, description text, type varchar(20), dimension varchar(20), poids integer, thematique varchar(20), foreign key (ano) references user(login));")
    void createOeuvreTable();

    @SqlUpdate("insert into oeuvre (nom,ano,prix, promo, description, type, dimension, poids, thematique) values (:nom, :ano, :prix, :promo, :description, :type, :dimension, :poids, :thematique)")
    @GetGeneratedKeys
    int insert(@BindBean() Oeuvre oeuvre);

    @SqlQuery("select * from oeuvre where nom = :nom")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Oeuvre findByName(@Bind("nom") String nom);

    @SqlQuery("select * from oeuvre where search like :nom")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Oeuvre> search(@Bind("nom") String nom);

    @SqlUpdate("drop table if exists oeuvre")
    void dropOeuvreTable();

    @SqlUpdate("delete from oeuvre where ono = :ono")
    void delete(@Bind("ono") int ono);

    @SqlQuery("select * from oeuvre order by ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Oeuvre> all();

    @SqlQuery("select * from oeuvre where ono = :ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Oeuvre findById(@Bind("ono") int ono);

    void close();
}
