package web.struct;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

/**
 * Gere les connexions et interactions avec la base de donnée
 * 
 * @author Robin Germe
 * 
 */
public class MyBDD {
	private String DBPath = "";
	private Connection con = null;
	private Statement stmt = null;
	private ResultSet rs = null;
	private static MyBDD conn = new MyBDD("data/Database.db");

	public static final MyBDD getInstance() {
		return conn;
	}

	private MyBDD(String dBPath) {
		DBPath = dBPath;
	}

	public ArrayList<Personne> lister() {
		this.connect();
		ArrayList<Personne> pers = new ArrayList<>();
		String sql = "select * from users ;";
		try {
			rs = stmt.executeQuery(sql);
			while (rs.next()) {
				String login = ""; //TODO
				String mail = ""; //TODO
				Date naiss = null; //TODO
				String nom = ""; //TODO
				String prenom = ""; //TODO
				pers.add(new Personne(login,mail,naiss,nom,prenom));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		this.close();
		return pers;
	}


	public boolean addUser(String login, String nom, String prenom, String pass, String repass) throws SQLException {
		this.connect();
		
		String sql = "SELECT * FROM users WHERE login='" + login + "';";
		rs = stmt.executeQuery(sql);
		if (!login.equals("") && !pass.equals("") && pass.equals(repass)) {
			if (!rs.next()) {
				sql = "insert into users(login,nom,prenom,pass) values('" + login + "','" + nom + "','" + prenom + "','"
						+ pass + "');"; // TODO Sécuriser passwd
				stmt.execute(sql);
				this.close();
				return true;
			}
		}
		this.close();
		return false;
	}

	public Personne get(String login) {
		connect();
		String sql = "select * from users where login='" + login + "';";
		try {
			rs = stmt.executeQuery(sql);
			if (rs.next())
				System.out.println();
				//return new Personne();//TODO return personne
		} catch (SQLException e) {
			return null;
		}
		close();
		return null;
	}

	public boolean authorize(String login, String pass) {
		connect();
		if (pass == null || login == null)
			return false;
		String sql = "select pass from users where login ='" + login + "';";
		String billCipher = "";
		try {
			rs = stmt.executeQuery(sql);
			if (rs.next()) {
				billCipher = rs.getString(1); //TODO GET PASSWORD
			} else
				return false;
		} catch (SQLException e) {
			return false;
		}
		close();
		return pass.equals(billCipher);
	}

	/**
	 * ouverture de connexion sql
	 * 
	 * @return boolean
	 */
	public boolean connect() {
		try {
			Class.forName("org.sqlite.JDBC");
			con = DriverManager.getConnection("jdbc:sqlite:" + DBPath);
			stmt = con.createStatement();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			System.out.println("Erreur de connection");
			return false;
		} catch (SQLException e) {
			e.printStackTrace();
			System.out.println("Erreur de connection");
			return false;
		}
		return true;
	}

	/**
	 * fermeture de connexion sql
	 * 
	 * @return boolean
	 */
	public boolean close() {
		try {
			stmt.close();
			con.close();
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	/**
	 * creation de la table
	 */
	public void create() {
		this.connect();
		String query = "Create Table users(login text primary key, nom text , prenom text, pass text);";
		try {
			stmt.executeUpdate(query);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		this.close();
	}

	public void delete(String n) throws SQLException {
		connect();
		String query = "Delete from users where login = '" + n + "';";
		try {
			stmt.executeUpdate(query);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		close();
	}
}