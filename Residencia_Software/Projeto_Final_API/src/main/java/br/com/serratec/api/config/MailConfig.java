/*
package br.com.serratec.api.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import br.com.serratec.api.model.Usuario;

@Configuration
public class MailConfig {
	
	@Autowired
	public Usuario usuarioAtual;
	
	String para = usuarioAtual.getEmail();
	String assunto;
	String texto;

	@Autowired
	public JavaMailSender javaMailSender;
	
	@Bean
	public void SendMail(String para, String assunto, String texto){
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("vini.kronemberger@gmail.com");
		message.setTo(para);
		message.setSubject(assunto);
		message.setText("<b>E-mail Teste</b>\n" + texto + "\n\nTeste realizado por Vinicius Kronemberger");
		javaMailSender.send(message);
	}
	
}
*/