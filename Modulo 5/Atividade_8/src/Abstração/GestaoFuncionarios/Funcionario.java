package Abstração.GestaoFuncionarios;


public class Funcionario implements IFuncinarios {

    public String nome;
    public tipos tipo;
    public double salarioBase;
    public double salario;

    public Funcionario(String nome, String tipo, double salarioBase) {
        this.nome = nome;
        this.tipo = tipos.valueOf(tipo);
        this.salarioBase = salarioBase;
        this.salario = setSalario(salarioBase);
    }


    protected void promover(Funcionario funcionario, double novoSalario) {
        if (this.tipo == tipos.ESTAGIARIO) {
            this.tipo = tipos.DESENVOLVEDOR;
        } else if (this.tipo == tipos.DESENVOLVEDOR) {
            this.tipo = tipos.GERENTE;
        } else if (this.tipo == tipos.GERENTE) {
            System.out.println("Atualmente, não estamos promovendo gerentes.");
        } else {
            throw new IllegalArgumentException("Tipo de funcionário não reconhecido: (" + this.tipo + "), promoção cancelada.");
        }
        setSalario(novoSalario);
    }


    protected double setSalario(double novoSalarioBase) {
        this.salario = this.tipo.bonus * novoSalarioBase;
        return this.tipo.bonus * novoSalarioBase;
    }

    @Override
    public void trabalhando() {
        System.out.println(this.nome + " " + this.tipo.trabalho);
    }

}
