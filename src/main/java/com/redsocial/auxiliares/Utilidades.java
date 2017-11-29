package com.redsocial.auxiliares;

import java.util.Calendar;
import java.util.GregorianCalendar;
 
/**
 * 
 * @author Usuario
 *
 */
public class Utilidades {
	
    
    /**
     * 
     * @return fecha actual en dia/mes/año horas:minutos
     */
    public static String obtenerFecha() {
		 Calendar fecha = new GregorianCalendar();
		 String fechaEnvio = "";
	     int year = fecha.get(Calendar.YEAR);
	     // Se le suma uno, porque calendar.month devuelve de 0-11
	     int month = fecha.get(Calendar.MONTH)+1;
	     int day = fecha.get(Calendar.DAY_OF_MONTH);
	     int hour = fecha.get(Calendar.HOUR_OF_DAY);
	     int minute = fecha.get(Calendar.MINUTE);
	     String monthS = (month<10)?"0"+month:""+month;
	     String dayS = (day<10)?"0"+day:""+day;
	     fechaEnvio = dayS+"/"+monthS+"/"+year+" "+hour+":"+minute;
	     return fechaEnvio;
    }
}