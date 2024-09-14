package Atividade5;

public class ChainedNode {
    int content;
    ChainedNode next;
    ChainedNode prev;

    public ChainedNode(int content) {
        this.content = content;
        this.next = null;
        this.prev = null;
    }
}

