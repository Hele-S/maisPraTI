package Atividade1;

public class TaskManager {
    private NodeItem head;

    public TaskManager() {
        this.head = null;
    }

    public void addTask(String task) {
        NodeItem newNode = new NodeItem(task);
        if (head == null) {
            head = newNode;
        } else {
            NodeItem current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        System.out.println("Tarefa adicionada: " + task);
    }

    public void removeTask(int index) {
        if (head == null) {
            System.out.println("A lista está vazia");
            return;
        }
        if (index == 0) {
            System.out.println("Tarefa removida: " + head.content);
            head = head.next;
            return;
        }

        NodeItem current = head;
        NodeItem previous = null;
        int count = 0;

        while (current != null && count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        if (current == null) {
            System.out.println("Índice inválido.");
        } else {
            System.out.println("Tarefa removida: " + current.content);
            previous.next = current.next;
        }
    }
    public void setDone(int index) {
        NodeItem current = head;
        int count = 0;

        while(current != null && count < index) {
            current= current.next;
            count++;
        }

        if (current == null) {
            System.out.println("Índice inválido");
        } else{
            current.done = true;
            System.out.println("Tarefa conluída: " + current.content);
        }
    }

    public void displayTasks() {
        if (head == null) {
            System.out.println("Nenhuma tarefa disponível.");
            return;
        }

        NodeItem current = head;
        int count = 0;
        while (current != null) {
            System.out.println(count + " - " + current);
            current = current.next;
            count++;
        }
    }
}
