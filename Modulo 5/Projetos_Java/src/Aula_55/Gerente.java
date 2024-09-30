package Aula_55;

import java.util.ArrayList;

public class Gerente extends Funcionario{
    public String setor;
    public ArrayList<Funcionario> equipe;

    public Gerente(Empresa empresa,String nome, String setor) {
        super("gerente", nome, empresa);
        this.setor = setor;
        this.equipe = new ArrayList<>();

    }
}
