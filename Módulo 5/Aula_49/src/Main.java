import util.Utilitários;
public class Main {
    public static void main(String[] args) {
        // Classe para calcular área do retângulo
        Geometria geo = new Geometria();
        double areaRetangulo = geo.calcularAreaRetangulo(5,10);
        System.out.println("Área no retângulo: " + areaRetangulo);

        double mult = Geometria.multiplicar(4,6);
        System.out.println("Print da static 'multiplicar': " + mult);

        // Classe para depositar valores e consultar
        ContaBancaria conta = new ContaBancaria();
        conta.depositar(1000);
        System.out.println("Valor do saldo: " + conta.consultaSaldo());

        Utilitários.print("Olá mundo");
    }
}