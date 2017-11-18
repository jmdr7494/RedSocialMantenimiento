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
	

	public static Usuario login(String email,String pwd) throws Exception {
		Usuario result = null;
		MongoBroker broker = MongoBroker.get();
		MongoCollection<Document> usuarios=broker.getCollection("Usuarios");
		Document criterio=new Document();
		criterio.append("email", email);
		criterio.append("pwd", Utilidades.Encriptar(pwd));
		
		FindIterable<Document> resultado=usuarios.find(criterio);
		Document usuario=resultado.first();
		
		if (usuario!=null) {
			result = new Usuario (usuario.getString(nombre), usuario.getString(emaill), usuario.getString(pwdd));
		}
		
		return result;
	}
	
	public static Usuario select(Usuario usuario) throws Exception {
		MongoBroker broker = MongoBroker.get();
		MongoCollection<Document> usuarios=broker.getCollection("Usuarios");
		Document criterio=new Document();
		criterio.append(emaill, usuario.getemail());
		
		FindIterable<Document> resultado=usuarios.find(criterio);
		Document doc=resultado.first();
		Usuario result=null;
		if (doc!=null) {
			ObjectId id = (ObjectId)doc.get( idd );
			result = new Usuario (id.toString(),doc.getString(nombre), doc.getString(emaill), doc.getString(pwdd));
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
		doc.append("pwd", usuario.getPwd());
		
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
		newValue.append("pwd", usuario.getPwd());
		Document updateOperationDocument = new Document("$set", newValue);
		
		MongoBroker broker= MongoBroker.get();
		MongoCollection<Document>usuarios=broker.getCollection(Usuarioss);
		usuarios.updateOne(filter, updateOperationDocument);
		
	}

}


