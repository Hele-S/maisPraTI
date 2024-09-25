package Aula_46;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //Declarando variáeis primitivas
        byte byteVar = 127;
        short shortVar = 32000;
        int intVar = 2100000000;
        long longVar  = 9000000000000000000L;

        float floatVar = 3.141596F;
        double doubleVar = 3.14159265;

        char charVar = 'A';

        boolean booleanVar = true;

        //Impressão e fecha linha
        System.out.println("Deu bom");

        //Declarando variável String
        String name= "Hele";

        //Arredendodamento de variável (exclusivo do printf)
        System.out.printf("%.2f\n", floatVar);

        //Cálculo simples
        int a;
        int b;
        int c;
        double area;

        a = 5;
        b = 7;
        c =3;

        area =(double)( a +b ) /2 * c;

        System.out.println("area: " + area);

        //Recebendo informações do usuário
        //Salvando um novo escaner
        Scanner sc = new Scanner(System.in);
        //Recebendo o valor nome, tem que ser inserido no terminal
        String nome = sc.next();
        //Imprimindo o nome
        System.out.println("meu nome é: " + nome);
        //Recebendo o valor da idade
        int idade = sc.nextInt();
        //Imprimindo a idade
        System.out.println("Sua idade é: " +  idade);
    }
}