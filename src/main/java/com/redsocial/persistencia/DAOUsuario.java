package com.redsocial.persistencia;

import java.util.ArrayList;

import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Component;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.redsocial.auxiliares.Utilidades;
import com.redsocial.modelo.Usuario;


/**
 * 
 * @author Usuario
 *
 */
@Component
public class DAOUsuario {
	
	private final static String nombre = "nombre";
	private final static String pwdd = "pwd";
	private final static String pwrd = "password";
	private final static String emaill = "email";
	private final static String Usuarioss = "Usuarios";
	private final static String idd = "_id";
	
	public static Usuario insertUserConPWD(Usuario usuario, String pwd) {
		
		
		Document bso=new Document();
		
		bso.put(nombre, usuario.getNombre());
		String pwdencriptada=Utilidades.Encriptar(pwd);
		bso.append(pwdd, pwdencriptada);
		bso.append(emaill, usuario.getemail());
		
		MongoBroker broker= MongoBroker.get();
		MongoCollection<Document>usuarios=broker.getCollection(Usuarioss);
		usuarios.insertOne(bso);
		
		Usuario user=null;
		try {
			user = DAOUsuario.select(usuario.getemail(),pwd);
		} catch (Exception e) {
			
		}
		
		return user;
		
	}

	public static Usuario select(String email,String pwd) throws Exception {
		Usuario result = null;
		MongoBroker broker = MongoBroker.get();
		MongoCollection<Document> usuarios=broker.getCollection("Usuarios");
		Document criterio=new Document();
		criterio.append("email", email);
		
		FindIterable<Document> resultado=usuarios.find(criterio);
		Document usuario=resultado.first();
		
		if (usuario!=null) {
			String desEncriptada = Utilidades.Desencriptar(usuario.getString(pwdd));
			if (pwd.equals(desEncriptada)) {
				result = new Usuario (usuario.getString(nombre), usuario.getString(emaill), usuario.getString(pwdd));
			}
		}
		
		return result;
	}
	
	public static Usuario selectSinPWD(String email) throws Exception {
		MongoBroker broker = MongoBroker.get();
		MongoCollection<Document> usuarios=broker.getCollection(Usuarioss);
		Document criterio=new Document();
		criterio.append(emaill, email);
		
		FindIterable<Document> resultado=usuarios.find(criterio);
		Document usuario=resultado.first();
		Usuario result=null;
		if (usuario!=null) {
			result = new Usuario (usuario.getString(nombre), usuario.getString(emaill), usuario.getString(pwdd));
		}
		
		return result;
		
	}
	
	public static String selectEmail(String email) {
		String result = "";
		MongoBroker broker = MongoBroker.get();
		MongoCollection<Document> usuarios=broker.getCollection(Usuarioss);
		Document criterio=new Document();
		criterio.append(emaill, email);
		
		FindIterable<Document> resultado=usuarios.find(criterio);
		Document usuario=resultado.first();
		
		if (usuario==null) {
			result="ok";
		}else {
			result="ko";
		}
		
		return result;
	}
	
	public static void delete(String id) {
		
		MongoBroker broker= MongoBroker.get();
		MongoCollection<Document>usuarios=broker.getCollection(Usuarioss);
		usuarios.deleteOne(new Document(idd, new ObjectId(id)));
		
	}
public static ArrayList<Usuario> selectAll () {
		
		ArrayList<Usuario> result = new ArrayList<Usuario>();
		MongoBroker broker = MongoBroker.get();
		MongoCollection<Document> usuarios=broker.getCollection(Usuarioss);
		FindIterable<Document> it = usuarios.find();
		MongoCursor<Document> cursor = it.iterator();
	
		while (cursor.hasNext()) {
			Document doc = cursor.next();
			ObjectId id = (ObjectId)doc.get( idd );
			Usuario usu = new Usuario(id.toString(),doc.getString(nombre), doc.getString(emaill), doc.getString(pwdd));
			result.add(usu);
		}

		return result;
	}
public static Usuario insert(Usuario usuario) {
	Document doc=new Document();
	doc.append(nombre, usuario.getNombre());
	doc.append(emaill, usuario.getemail());
	doc.append(pwrd, usuario.getPwd());
	
	MongoBroker broker= MongoBroker.get();
	MongoCollection<Document>usuarios=broker.getCollection(Usuarioss);
	usuarios.insertOne(doc);
	
	ObjectId id = (ObjectId)doc.get( idd );
	 Usuario result = null;
	 if (id!=null) {
		 result = usuario;
	 }
	
	 return result;
}

public static void update (Usuario usuario) throws Exception {
	
	Document filter = new Document(idd, new ObjectId(usuario.getid()));
	Document newValue = new Document();
	newValue.append(nombre, usuario.getNombre());
	newValue.append(emaill, usuario.getemail());
	newValue.append(pwrd, usuario.getPwd());
	Document updateOperationDocument = new Document("$set", newValue);
	
	MongoBroker broker= MongoBroker.get();
	MongoCollection<Document>usuarios=broker.getCollection(Usuarioss);
	usuarios.updateOne(filter, updateOperationDocument);
	
}

}


