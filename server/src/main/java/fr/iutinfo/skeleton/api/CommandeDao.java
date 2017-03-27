package fr.iutinfo.skeleton.api;

import org.skife.jdbi.v2.sqlobject.*;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;

import java.util.List;

public interface CommandeDao {
    @SqlUpdate("create table commande(ono integer, login varchar(20), paiement boolean, envoi boolean, reception boolean, remuneration boolean, prix numeric(6,2), frais numeric(4,2), primary key (ono, login), foreign key (ono) references Oeuvre(ono), foreign key (login) references utilisateur(login));")
    void createCommandeTable();

    @SqlUpdate("insert into commande (login,ono,paiement,envoi,reception,remuneration,prix,frais) values (:login, :ono, :paiement, :envoi, :reception, :remuneration, :prix, :frais)")
    @GetGeneratedKeys
    int insert(@BindBean() Commande commande);

    @SqlQuery("select * from commande where ono = :ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Commande findByName(@Bind("ono") String ono);

    @SqlQuery("select * from commande where search like :ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Commande> search(@Bind("login") String login);

    @SqlUpdate("drop table if exists commande")
    void dropCommandeTable();

    @SqlUpdate("delete from commande where ono = :ono")
    void delete(@Bind("ono") int ono);

    @SqlQuery("select * from commande order by ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Commande> all();

    @SqlQuery("select * from commande where ono = :ono")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Commande findById(@Bind("ono") int ono);
    
	@SqlUpdate("update commande set paiement = :paiement, envoi = :envoi, reception = :reception, remuneration = :remuneration, prix = :prix, frais = :frais where login = :log and ono = :onoo")
	void update(@Bind("log") String login, @Bind("onoo") int ono, @BindBean() Commande commande);

    void close();
}
