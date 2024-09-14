package Atividade7;

public class PrintQueue {
    private Node first;
    private Node last;

    public PrintQueue(){
        this.first = null;
        this.last = null;
    }

    private static class Node {
        int copies;
        String content;
        Node next;

        public Node(int copies, String content){
            this.copies = copies;
            this.content = content;
            this.next = null;
        }
    }

    public void addPrint(int copies, String content){
        Node newNode = new Node(copies, content);

        if(last == null){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
    }

    public String printNext(){
        if(this.first == null){
            throw new IllegalStateException("Fila vazia!");
        }
        int copies = this.first.copies;
        String content = this.first.content;
        this.first = this.first.next;

        if(this.first == null){
            this.last = null;
        }
        String finalPrint = "";
        System.out.println("Resultado da impressão: ");
        while (copies > 0){
            copies--;
            finalPrint += copies > 0 ? content + ", ": content + ";";
        }
        System.out.println(finalPrint != "" ? finalPrint:"Nenhuma cópia foi imprimida.");
        return finalPrint;
    }

    public void showQueue(){
        Node current = this.first;
        System.out.println(current != null ? "Impressões na fila: ":"Nenhuma impressão na fila");
        while (current != null) {
            System.out.printf("[" + String.valueOf(current.copies) + " x " + current.content + "]");
            System.out.printf(current.next != null ? ", ": ";");
            current = current.next;
        }
        System.out.println();
    }
}
