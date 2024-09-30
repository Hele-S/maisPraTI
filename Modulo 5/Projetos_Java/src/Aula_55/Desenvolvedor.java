package Aula_55;

public class Desenvolvedor extends Funcionario{
    public String area;
    public Gerente gerente;

    public Desenvolvedor(Empresa empresa, String nome, String area, String cargo, Gerente gerente) {
        super(cargo, nome, empresa);
        this.area = area;
        this.gerente = addressManager(gerente);
    }

    private Gerente addressManager(Gerente gerente) {
        if (gerente != null) {
            gerente.equipe.add(this);
            return gerente;
        }
        return null;
    }

    public static void main(String[] args) {
        Empresa tech = new Empresa();
        Gerente bob = new Gerente(tech,"bob","tal");
        Desenvolvedor teste = new Desenvolvedor(tech,"hele","front","junior",bob);
        System.out.println(bob.salario + ", " + teste.salario);
        System.out.println(tech.staff);
        tech.ShowStaff();
    }
}


