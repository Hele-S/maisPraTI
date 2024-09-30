package Aula_55;

public class Funcionario {
    public String cargo;
    public String nome;
    public double salario;
    public Empresa empresa;

    public Funcionario(String cargo, String nome, Empresa empresa) {
        this.cargo = cargo;
        this.nome = nome;
        this.salario = paycheck(cargo);
        this.empresa = signToCompany(empresa);
    }

    private Empresa signToCompany(Empresa company){
        company.staff.add(this);
        return company;
    }

    private double paycheck(String cargo) {
        return switch (cargo) {
            case "gerente" -> 2500;
            case "senior" -> 2000;
            case "pleno" -> 1500;
            case "junior" -> 1000;
            default -> 800;
        };
    }
}
