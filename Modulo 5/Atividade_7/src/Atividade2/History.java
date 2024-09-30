package Atividade2;
public class History {
    private NodeItem head;

    public History() {
        this.head = null;
    }

    public void newAccess(String url) {
        NodeItem newNode = new NodeItem(url);
        if (head == null) {
            head = newNode;
        } else {
            NodeItem current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        System.out.println("Novo acesso em: " + url);
    }

    public void clear() {
        NodeItem current = head;
        int amount = 0;
        int removed = 0;

        while (current.next != null) {
            current = current.next;
            amount++;
        }
        if (amount > 3) {
            do {
                head = head.next;
                removed++;
            } while (amount-removed >= 3);

            System.out.println("Limpeza de histórico concluída, " + removed + " itens removidos.");
        } else {
            System.out.println("O histórico ainda não excedeu seu tamanho máximo.");
        }
    }

    public void showHistory() {
        if (head == null) {
            System.out.println("Histórico de pesquisa vazio.");
            return;
        }

        NodeItem current = head;
        int count = 1;
        while (current != null) {
            System.out.println(count + " - " + current);
            current = current.next;
            count++;
        }
    }
    
}
