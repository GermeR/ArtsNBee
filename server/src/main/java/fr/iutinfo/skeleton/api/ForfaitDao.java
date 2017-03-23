package fr.iutinfo.skeleton.api;

import org.skife.jdbi.v2.sqlobject.*;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;

import java.util.List;

public interface ForfaitDao {
    @SqlUpdate("create table forfait(fno varchar(20) primary key, prix, nboeuvres integer);")
    void createForfaitTable();

    @SqlUpdate("insert into forfait (fno,prix,nboeuvres) values (:fno, :prix, :nbOeuvres);")
    @GetGeneratedKeys
    int insert(@BindBean() Forfait Forfait);

    @SqlQuery("select * from Forfait where fno = :fno")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Forfait findByName(@Bind("fno") String fno);

    @SqlQuery("select * from Forfait where search like :fno")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Forfait> search(@Bind("fno") String fno);

    @SqlUpdate("drop table if exists Forfait")
    void dropForfaitTable();

    @SqlUpdate("delete from Forfait where fno = :fno")
    void delete(@Bind("fno") String fno);

    @SqlQuery("select * from Forfait order by fno")
    @RegisterMapperFactory(BeanMapperFactory.class)
    List<Forfait> all();

    @SqlQuery("select * from Forfait where fno = :fno")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Forfait findById(@Bind("fno") int fno);

    void close();
}
