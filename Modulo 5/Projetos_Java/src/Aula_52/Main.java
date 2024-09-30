package Aula_52;


import Aula_52.reverseString.*;

public class Main {
    public static void main(String[] args) {
//        StackExemple stack = new StackExemple();
//
//        stack.push(1);
//        stack.push(2);
//        stack.push(3);
//        System.out.println("Elemento no topo: "  + stack.peek());
//        System.out.println("Elemento removido: "  + stack.pop());
//        System.out.println("Elemento no topo: "  + stack.peek());
        ReverseString nome = new ReverseString();
        nome.push("hele");
        nome.peekAll();
        nome.reverse();
    }
}