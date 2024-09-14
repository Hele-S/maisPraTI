package Atividade3;

public class TextEditor {
    private String rootText;
    private String currentText;
    private NodeItem head;

    public TextEditor(String rootText) {
        this.rootText = rootText;
        this.currentText = rootText;
        this.head = null;
    }
    public void showText() {
        System.out.println("Texto atual: " + currentText);
    }
    private void newChange(NodeItem newNode) {
        if (head == null) {
            head = newNode;
        } else {
            NodeItem current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        currentText = newNode.content;
    }
    public void addText(String newText) {
        NodeItem newNode = new NodeItem("");
        newNode.content = currentText + newText;
        newChange(newNode);
        showText();
    }
    public void undo(){
        NodeItem current = head;
        if (head == null) {
            System.out.println("Nenhuma alteração foi realizada");
            return;
        }
        if (current.next == null) {
            head = null;
            currentText = rootText;
            showText();
            return;
        }
        while(current.next.next != null) {
            current = current.next;
        }
        current.next = null;
        currentText = current.content;
        showText();

    }

}
