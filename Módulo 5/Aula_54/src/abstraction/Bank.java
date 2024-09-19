package abstraction;

import java.util.ArrayList;
import java.util.Date;

public class Bank {
    private String name;
    private String password;
    private double balance;
    private double withdrawThreshold;
    private ArrayList<String> history;

    public Bank(String name, String password, double balance) {
        this.name = name;
        this.password = password;
        this.balance = balance;
        this.history = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public double getBalance() {
        return balance;
    }

    public void getHistory() {
        for(String item:history){
            System.out.println(item);
        };
    }


    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("O valor depositado deve ser positivo");
        } else {
            this.balance += amount;
            register("Depósito de R$" + amount);
        }
    }

    public void withdraw(double amount) throws Exception {
        if (amount <= 0) {
            throw new IllegalArgumentException("O valor sacado deve ser positivo");
        }
        if (amount > this.withdrawThreshold) {
            throw new Exception("O valor é maior que o limite de saque da sua conta");
        }
        if (this.balance - amount <= 0) {
            throw new IllegalArgumentException("Transação cancelada, saldo insuficiente!");
        } else {
            this.balance -= amount;
            register("Saque de R$" + amount);
        }
    }

    public void transferenceSender(Bank recipient, double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("O valor transferido deve ser positivo");
        }
        if (this.balance - amount <= 0) {
            System.out.println("Transação cancelada, saldo insuficiente!");
        } else {
            this.balance -= amount;
            register("Transferência de R$" + amount + " enviada");
            recipient.balance += amount;
            recipient.register("Transferência de R$" + amount + " recebida");
        }
    }
    private void register(String newEntry) {
        Date date = new Date();
        history.add(date + ":" + newEntry);
    }

    public static void main(String[] args) {
        Bank Sender = new Bank("hele", "123", 500);
        Bank Receiver = new Bank("eleh", "321", 200);
        Sender.transferenceSender(Receiver, 50);
        Sender.getHistory();
        Receiver.getHistory();


    }


}





