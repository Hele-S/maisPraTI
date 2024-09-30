package Aula_47;

public class Main {
    public static void main(String[] args) {
    //Convertendo celsius pra fahrenheit
//    Scanner sc = new Scanner(System.in);
//    double celsius = Double.parseDouble(sc.next());
//    double fahrenheit = celsius * 9/5 + 32;
//        System.out.println(fahrenheit);

    //Verificando maior idade
//    int idade =17;
//    if(idade >= 18) {
//        System.out.println("Você é maior de idade");
//    } else {
//        System.out.println("Você é menor de idade");
//    }

        //Par ou impar
//        Scanner sc = new Scanner(System.in);
//        int nmr = Integer.parseInt(sc.next());
//        if (nmr % 2 == 0) {
//            System.out.println("O número é par");
//        } else {
//            System.out.println("O número é impar");
//        }

        //Pesquisa dia da semana
//        int dia = 2;
//        switch(dia) {
//            case 1:
//                System.out.println("segunda feira");
//                break;
//            case 2:
//                System.out.println("terça feira");
//                break;
//            default:
//                System.out.println("não sei");
//        }

        //Verifica ano bissexto (condição incompleta
//        int year = sc.nextInt();
//        if (year % 4 == 0) {
//            System.out.println("O ano é bissexto");
//        } else {
//            System.out.println("O ano não é bissexto");
//        }

          //Calculadora paraguaia
//        Scanner sc = new Scanner(System.in);
//        System.out.printf("Digite o primeiro número: ");
//        float nmr1 = sc.nextFloat();
//        System.out.printf("Digite o segundo número: ");
//        float nmr2 = sc.nextFloat();
//        System.out.printf("Digite o operador: ");
//        String operation = sc.next();
//
//        switch (operation){
//            case "+":
//                System.out.println(nmr1 + nmr2);
//                break;
//            case "-":
//            System.out.println(nmr1 - nmr2);
//                break;
//            case "*":
//                System.out.println(nmr1 * nmr2);
//                break;
//            case "/":
//                System.out.println(nmr1 / nmr2);
//                break;
//        }

        //Login 3 tentativas
//        Scanner sc = new Scanner(System.in);
//        System.out.printf("Login: ");
//        String Login = sc.nextLine();
//        System.out.printf("Senha: ");
//        String Password = sc.nextLine();
//        int tentativas = 0;
//
//        while ((!Objects.equals(Login, "acertou")) || (!Objects.equals(Password, "miseravi"))){
//            tentativas++;
//            if (tentativas == 3){
//                System.out.println("BLOQUEADO");
//                break;
//            }
//            System.out.println("errou, tentativas restantes: " + (3-tentativas));
//            System.out.printf("Login: ");
//            Login = sc.nextLine();
//            System.out.printf("Senha: ");
//            Password = sc.nextLine();
//        }
//        if (tentativas < 3){
//            System.out.println("PASSOU");
//        }
        //Métodos de strings
//        String text = "Lorem Ipsum String";
//
//                int length = text.length();
//        System.out.println(length);
//
//        String minusculas = text.toLowerCase();
//        System.out.println(minusculas);
//
//        String maiusculas = text.toUpperCase();
//        System.out.println(maiusculas);
//
//        boolean contem = text.contains("Lorem");
//        System.out.println(contem);
//
//        String substitute = text.replace("Lorem", "XXX");
//        System.out.println(substitute);
//
//        String substring = text.substring(0, 4);
//        System.out.println(substring);

        //Métodos matemáticos
//        double num = 50.38;
//
//        double arredondado = Math.round(num);
//        System.out.println(arredondado);
//
//        double arrPraCima = Math.ceil(num);
//        System.out.println(arrPraCima);
//
//        double arrPraBaixo = Math.floor(num);
//        System.out.println(arrPraBaixo);
//
//        double raizQuadrada =Math.sqrt((num));
//        System.out.println(raizQuadrada);
//
//        double absoluto = Math.abs(num);
//        System.out.println(absoluto);
//
//        double random = Math.random();
//        System.out.println(random);

        //Fatorial de número
//        int target = 6;
//        int answer = 0;
//        while (target > 0) {
//            if (answer == 0) {
//                answer = target;
//            } else {
//                answer = answer * target;
//            }
//            target--;
//        }
//        System.out.println("Resposta: " + answer);

        //Fibonacci
//        int until = 10;
//        int prev1 = 1;
//        int prev2 = 0;
//        int stash = 0;
//        for (int i = 0; i < until; i++){
//            System.out.println(prev2);
//            stash = prev2;
//            prev2  = prev1;
//            prev1 = prev2 + stash;
//        }
    }
}


