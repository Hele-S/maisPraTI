package Atividade4;

public class ChainedNode {
    String content;
    ChainedNode next;
    ChainedNode prev;

    public ChainedNode(String content) {
        this.content = content;
        this.next = null;
        this.prev = null;
    }

    @Override
    public String toString() {
        return content;
    }
}

