package Atividade6;

public class ClientLine {
    private Node first;
    private Node last;

    public ClientLine(){
        this.first = null;
        this.last = null;
    }

    private static class Node {
        String name;
        Node next;

        public Node(String name){
            this.name = name;
            this.next = null;
        }
    }

    public void addClient(String name){
        Node newNode = new Node(name);

        if(last == null){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
    }

    public String callClient(){
        if(this.first == null){
            throw new IllegalStateException("Fila vazia!");
        }
        String name = this.first.name;
        this.first = this.first.next;

        if(this.first == null){
            this.last = null;
        }
        return name;
    }

    public void showQueue(){
        Node current = this.first;
        System.out.println(current != null ? "Fila de clientes:":"A fila está vazia.");
        while (current != null) {
            System.out.printf(current.name);
            System.out.printf(current.next != null ? ", ": ";");
            current = current.next;
        }
        System.out.println();
    }
}
