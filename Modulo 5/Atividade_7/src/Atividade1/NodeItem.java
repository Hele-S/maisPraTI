package Atividade1;

public class NodeItem {
    String content;
    Boolean done;
    NodeItem next;

    public NodeItem(String content) {
        this.content = content;
        this.done = false;
        this.next = null;
    }

    public void taskFinished() {
        this.done = true;
    }

    @Override
    public String toString() {
        return content + " [ " + (done ? "Finished" : "Pending") + " ]";
    }
}

