package fr.iutinfo.skeleton.api.dao;

import org.skife.jdbi.v2.sqlobject.*;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;

import fr.iutinfo.skeleton.api.Forfait;

import java.util.List;

public interface ForfaitDao {
    @SqlUpdate("create table forfait(fno varchar(20) primary key, prix numeric, nboeuvres integer);")
    void createForfaitTable();

    @SqlUpdate("insert into forfait (fno,prix,nboeuvres) values (:fno, :prix, :nbOeuvres);")
    @GetGeneratedKeys
    int insert(@BindBean() Forfait Forfait);

    @SqlQuery("select * from Forfait where fno = :fno")
    @RegisterMapperFactory(BeanMapperFactory.class)
    Forfait findByFNO(@Bind("fno") String fno);

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
    
    @SqlUpdate("update Forfait set prix = :prix, nboeuvres = :nbOeuvres where fno = :fnoo")
	void update(@Bind("fnoo") String fno, @BindBean() Forfait forfait);

    void close();
}
