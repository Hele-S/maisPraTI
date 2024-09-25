package Aula_49.util;
import java.time.LocalDate;

public class DataHora {
    public static void main(String[] args){
        LocalDate hoje = LocalDate.now();
        LocalDate parseDate = LocalDate.parse("dd-MM-yyyy");

        System.out.println(parseDate);
    }
}
