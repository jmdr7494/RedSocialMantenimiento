package com.redsocial.auxiliares;

import java.util.Properties;

import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.Session;
import javax.mail.PasswordAuthentication;
import javax.mail.Message;
import javax.mail.Transport;
import javax.mail.MessagingException;

/**
 * 
 * @author Usuario
 *
 */
public class SendMail {

	static DatosUsuario userData = new DatosUsuario();

	public SendMail() {
		
	}
	
	private static Session getSession(){
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class",
				"javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");
		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(userData.getUserName(), userData.getPassword());
			}
		});
		return session;
	}
	public void sendMail(String email, String pwd) throws Exception{
		try {

			Message message = new MimeMessage(getSession());
			message.setFrom(new InternetAddress(userData.getUserName()));
			message.setRecipients(Message.RecipientType.TO,InternetAddress.parse(email));
			message.setSubject("Recupera tu contrasena");
			message.setText("La contrasena para acceder a tu cuenta es:"+pwd);
			Transport.send(message);
			System.out.println("Este es el pin " + pwd);

		} catch (MessagingException e) {
		}
	}
}