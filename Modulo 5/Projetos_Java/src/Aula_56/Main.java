package Aula_56;

import Aula_56.singleton.*;
import Aula_56.encapsulation.*;
import Aula_56.encapsulation2.*;

public class Main {
    public static void main(String[] args) {
        ConfigurationManager configManager = ConfigurationManager.getInstance();

        String dbUser = configManager.getProperty("db.user");
        System.out.println("Usuário do banco de dados" + dbUser);

    }
}
//BankAccount conta = new BankAccount("01",1000);
//BankTransaction depositTransaction = new BankTransaction(conta, 15000, BankTransaction.TransactionType.DEPOSIT);
//        System.out.println(depositTransaction.getDetails());
//        System.out.println(conta.getBalance());
//        conta.deposit(50);
//        depositTransaction.execute();
//        System.out.println(conta.getBalance());
//
//
//
//Point point = new Point(3,5);
//Point newPoint = new Point(2,4);
//
//        System.out.println("Ponto: " + newPoint);
//
//        System.out.println("X: " + point.x());
//
//        System.out.println("String: " + point.toString());
