package Polimorfismo;

public class Carro implements IMeioTransporte {
    @Override
    public void acelerar() {
        System.out.println("Pisando fundo");
    }

    @Override
    public void frear() {
        System.out.println("Carro freiando...");
    }
}
