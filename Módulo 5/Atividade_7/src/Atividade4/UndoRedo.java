package Atividade4;

public class UndoRedo {
    private String rootText;
    private String currentText;
    private ChainedNode head;
    private ChainedNode tail;
    private ChainedNode current;

    public UndoRedo(String rootText) {
        this.rootText = rootText;
        this.currentText = rootText;
        this.head = null;
        this.tail = null;
        this.current = null;
    }

    public void showText() {
        System.out.println("Texto atual: " + currentText);
    }

    private void addNode() {
        ChainedNode newNode = new ChainedNode("");

        if (head == null) {
            head = newNode;
            tail = newNode;
            current = newNode;
        } else {
            newNode.prev = current;
            current.next = newNode;
            current = newNode;
            tail = newNode;
        }
    }

    public void addText(String newText) {
        addNode();
        current.content = currentText + newText;
        currentText = current.content;
        System.out.printf("Ação adicionada. ");
        showText();
    }

    public void undo(){
        if (current != null) {
            if (current.prev != null) {
                current = current.prev;
                currentText = current.content;
            } else {
                if (head != null) {
                    currentText = rootText;
                    head = null;
                } else {
                    System.out.println("Não existem ações para desfazer.");
                    return;
                }
//                current = null;
            }

            System.out.printf("Ação desfeita. ");
            showText();
            } else {
            System.out.println("Não existem ações para desfazer.");
            }
    }
    public void redo(){
        if (current != null) {
            if (head == null) {
                head = current;
                currentText = head.content;
            } else {
            if (current.next != null) {
                current = current.next;
                currentText = current.content;
            } else {

                System.out.println("Não existem ações para refazer.");
                return;
                }
            }
            System.out.printf("Ação refeita. ");
            showText();
        }else {
            System.out.println("Não existem ações para refazer.");
        }
    }
}
