package Atividade8;

public class ProcessesQueue {
    private Node first;
    private Node last;

    public ProcessesQueue() {
        this.first = null;
        this.last = null;
    }

    private static class Node {
        String process;
        Node next;

        public Node(String process) {
            this.process = process;
            this.next = null;
        }
    }

    public void addProcess(String process) {
        Node newNode = new Node(process);

        if (last == null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
    }

    public void Start() {
        if (this.first != null) {
            System.out.printf("Iniciando Sistema Operacional: \n// ");
            while (this.first != null) {
                executeNext();
            }
            System.out.println();
            System.out.println("Processos finalizados.");
        } else {
            System.out.println("Nenhum processo encontrado na fila");
        }
    }

    private String executeNext() {
        if (this.first == null) {
            throw new IllegalStateException("Fila vazia!");
        }
        String process = this.first.process;
        this.first = this.first.next;

        if (this.first == null) {
            this.last = null;
        }
        System.out.printf(this.first != null ? process + " => " : process + " \\\\");
        return process;
    }
}
