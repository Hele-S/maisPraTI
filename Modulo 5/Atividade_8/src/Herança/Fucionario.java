package Herança;

public class Fucionario {
    protected String name;
    protected String category;
    protected double salary;

    public Fucionario(String name, double salary, String category) {
        this.name = name;
        this.category = category;
        this.salary = salary;
    }

    public void working(){
        System.out.println("Funcionário exercendo sua função");
    }

    public static class Gerente extends Fucionario{

        public Gerente(String name, double salary) {
            super(name, salary, "manager");
        }

        @Override
        public void working(){
            System.out.println("Gerente exercendo sua função");
        }
    }

    public static class Desenvolvedor extends Fucionario{

        public Desenvolvedor(String name, double salary) {
            super(name, salary, "developer");
        }

        @Override
        public void working(){
            System.out.println("Desenvolvedor exercendo sua função");
        }
    }

    public double calculateBonus(){
        return this.category == "manager" ? 20:10;
    }

    public static void main(String[] args) {
        Gerente testeG = new Gerente("douglas",2000);

        System.out.println(testeG.calculateBonus());

        testeG.working();

    }
}
