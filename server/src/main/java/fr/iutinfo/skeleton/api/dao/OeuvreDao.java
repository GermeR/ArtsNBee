package fr.iutinfo.skeleton.api.dao;

import org.skife.jdbi.v2.sqlobject.*;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;

import fr.iutinfo.skeleton.api.Oeuvre;

import java.util.List;

public interface OeuvreDao {
    @SqlUpdate("create table oeuvre(ono integer primary key autoincrement, nom varchar(20),ano varchar(20), prix numeric(6,2), promo integer, description text, type varchar(20), dimension varchar(20), poids integer, thematique varchar(20), img text, foreign key (ano) references user(login));")
    void createOeuvreTable();

    @SqlUpdate("insert into oeuvre (nom,ano,prix, promo, description, type, dimension, poids, thematique, img) values (:nom, :ano, :prix, :promo, :description, :type, :dimension, :poids, :thematique, 'Ressources/img.jpg')")
    @GetGeneratedKeys
    int insert(@BindBean() Oeuvre oeuvre);
    
    @SqlQuery("select * from oeuvre where ono = :ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Oeuvre findByName(@Bind("ono") int ono);

    @SqlQuery("select * from oeuvre where search like :nom")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Oeuvre> search(@Bind("nom") String nom);

    @SqlUpdate("drop table if exists oeuvre")
    void dropOeuvreTable();

    @SqlUpdate("delete from oeuvre where ono = :ono")
    void delete(@Bind("ono") int ono);

    @SqlUpdate("delete from oeuvre where nom = :nom")
    void delete(@Bind("nom") String nom);

    @SqlQuery("select * from oeuvre order by ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Oeuvre> all();

    @SqlQuery("select * from oeuvre where ono = :ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Oeuvre findById(@Bind("ono") int ono);
    
    @SqlQuery("select * from oeuvre where ano = :login")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Oeuvre> oeuvreDe(@Bind("login") String login);
    
    // Si un jour on veut associer le login aux nom etprénom de l'artiste
    /*@SqlQuery("select * from utilisateur where login = (select login from oeuvre where ono = :ono);")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Utilisateur oeuvreArtiste(@Bind("ono") int ono);*/
    
    //nom,prix, promo, description, type, dimension, poids, thematique
	@SqlUpdate("update oeuvre set nom = :nom, prix = :prix, description = :description, type = :type, dimension = :dimension, poids = :poids, thematique = :thematique, img = :img where ono = :no")
	void update(@Bind("no") int ono, @BindBean() Oeuvre oeuvre);
    void close();
    
    
}
