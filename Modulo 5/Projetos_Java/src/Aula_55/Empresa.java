package Aula_55;

import java.util.ArrayList;

public class Empresa {
    public ArrayList<Funcionario> staff = new ArrayList<>();

    public Empresa() {
        staff = new ArrayList<>();
    }

    public void ShowStaff(){
        for(Funcionario employee : staff){
            System.out.println("Nome: " + employee.nome + ", Salário: " + employee.salario);
        }
    }
}
