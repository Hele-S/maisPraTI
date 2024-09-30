package Atividade3;

public class NodeItem {
    String content;
    NodeItem next;

    public NodeItem(String content) {
        this.content = content;
        this.next = null;
    }

    @Override
    public String toString() {
        return content;
    }
}

