//import java.util.Arrays;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        //Formas de declarar arrays
//        int size = 5;
//        int[] vetor = new int [size];
//        vetor[0] = 10;
//        vetor[1] = 20;
//        vetor[2] = 30;
//        vetor[3] = 40;
//        vetor[4] = 50;
//
//        int[] vetorInicializado = {1, 2, 3, 4, 5};
//
//        String[] palavras = {"teste"};
//
//        System.out.println("elementos do array 'vetor");
//        for(int i = 0; i < vetor.length; i++){
//            System.out.println("Elemento na posição " + i +": " + vetor[i]);
//        }
//        System.out.println("Soma do array 'vetor'");
//        int sum = 0;
//        for(int i = 0; i < vetor.length; i++){
//            sum = sum + vetor[i];
//        }
//        System.out.println("Soma dos elementos de 'vetor': " + sum);
//        int ceiling = 0;
//        for(int i = 0; i < vetor.length; i++){
//            if (vetor[i] > ceiling){
//                ceiling = vetor[i];
//            }
//        }
//            System.out.println("Maior valor de 'vetor': " + ceiling);

        //revertendo o array
//        int[] vetorPaia = new int[5];
//        for(int i = 0; i < vetor.length; i++){
//           vetorPaia[i] = vetor[vetor.length-i-1];
//        }
//        vetor = vetorPaia;
//        System.out.println("elementos do array 'vetor");
//
//        for(int i = 0; i < vetor.length; i++){
//            System.out.println("Elemento na posição " + i +": " + vetor[i]);
//        }


        //Adicionando elemento no array
//        size++;
//        vetorPaia = vetor;
//        vetor = new int [size];
//        for (int i = 0; i < vetorPaia.length; i++) {
//            vetor[i] = vetorPaia[i];
//            System.out.println("Elemento Array maior - Posição "+ i +": " + vetor[i]);
//        }
//        vetor[5] = 60;
//        System.out.println("Elemento Array maior - Posição "+ 5 +": " + vetor[5]);


        //Emovendo elemento no array
//        int skip = 0;
//        vetorPaia = vetor;
//        vetor = new int [4];
//        for (int i = 0 ; i < vetorPaia.length ; i++){
//            if (vetorPaia[i] != 50 && vetorPaia[i] != 60) {
//                    vetor[i-skip] = vetorPaia[i];
//            } else {
//                skip++;
//                continue;
//            }
//                System.out.println("teste remoção - Posição " + (i-skip) + ": " + vetor[i-skip]);
//        }

        //Declarando matrizes
        int[][] matriz = {
                {10, 20, 30},
                {40, 50, 60},
                {70, 80, 90}
        };

        //Iterando sobre os elementos da matriz (for each do java)
//        for(int[] row : matriz){
//            for(int value : row){
//                System.out.printf(value + ", ");
//            }
//            System.out.println();
//        }
        //Somando diagonal primária e secundária(com for fica melhor)
//        int mainDiag = 0;
//        int secondDiag = 0;
//        int indexR = 0;
//        int indexC = 0;
//        for(int[] row : matriz){
//            for(int value : row){
//                if (indexR == indexC){
//                    mainDiag += value;
//                }
//                if (indexR == row.length-1-indexC) {
//                    secondDiag += value;
//                }
//                indexR++;
//            }
//            indexR = 0;
//            indexC++;
//        }
//        System.out.println("Principal: " + mainDiag);
//        System.out.println("Secundária: " + secondDiag);
//        System.out.println("Soma: " + (mainDiag + secondDiag));
        //Pesquisando elemento na matrix
        int target = 20;
        for (int i = 0 ; i < matriz.length; i++){
            for (int j = 0 ; j < matriz.length; j++){
                if (matriz[i][j] == target){
                    System.out.println(target + " encnotrado na posição: i = " + i + " j = "+ j);
                }
            }
        }
    }
}