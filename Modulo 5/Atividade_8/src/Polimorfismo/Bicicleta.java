package Polimorfismo;

public class Bicicleta implements IMeioTransporte {
    @Override
    public void acelerar() {
        System.out.println("Pedalando pedalando pedalando...");
    }

    @Override
    public void frear() {
        System.out.println("Freiando a bicicleta");
    }
}
