package Polimorfismo;

public class Trem implements IMeioTransporte{
    @Override
    public void acelerar() {
        System.out.println("Trem saindo da estação...");
    }

    @Override
    public void frear() {
        System.out.println("Trem freiando");
    }
}
