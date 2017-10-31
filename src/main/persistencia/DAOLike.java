package main.persistencia;

import org.bson.Document;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;

import main.modelo.Like;

public class DAOLike {
	
	public static void insert(Like like) throws Exception {
		Document doc=new Document();
		doc.append("emailUsuario", like.getEmailUsuario());
		doc.append("idPublicacion", like.getId());		
		
		MongoBroker broker= MongoBroker.get();
		MongoCollection<Document>likes=broker.getCollection("Likes");
		likes.insertOne(doc);
		
	}
	

	
	public static void update (Like like) throws Exception {
		Document doc=new Document();
		doc.append("idPublicacion", like.getId());
		
		MongoBroker broker= MongoBroker.get();
		MongoCollection<Document>likes=broker.getCollection("Likes");
		likes.deleteOne(doc);
		
		Document doc2=new Document();
		doc2.append("emailUsuario", like.getEmailUsuario());
		doc2.append("idPublicacion", like.getId());
		
		likes.insertOne(doc2);
		
	}

	public static Like select(int id) throws Exception {
		Like result = null;
		MongoBroker broker = MongoBroker.get();
		MongoCollection<Document> likes=broker.getCollection("Likes");
		Document criterio=new Document();
		criterio.append("idPublicacion", id);
		
		FindIterable<Document> resultado=likes.find(criterio);
		Document like=resultado.first();
		
		if (like!=null) {
			result = new Like(like.getString("emailUsuario"), like.getInteger("idPublicacion"));
		}
		
		return result;
	}
	
	public static void delete(Like like) {
		Document bso=new Document();
		bso.append("idPublicacion", like.getId());
		
		MongoBroker broker= MongoBroker.get();
		MongoCollection<Document>likes=broker.getCollection("Likes");
		likes.deleteOne(bso);
		
	}
	
	public static long contador(int id) throws Exception {
	
		Document criterio=new Document();
		criterio.append("idPublicacion", id);
		return MongoBroker.get().getCollection("Likes").count(criterio);
	}


}

