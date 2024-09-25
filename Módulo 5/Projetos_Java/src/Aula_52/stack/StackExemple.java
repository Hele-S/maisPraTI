package Aula_52.stack;

class Node {
    int data;
    Node next;

    public Node(int data){
        this.data = data;
        this.next = null;
    }
}



public class StackExemple {

    private Node top;

    public StackExemple(){
        this.top = null;
    }

    public void push(int data) {
        Node newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    public int pop(){
        if(isEmpty()) {
            throw new RuntimeException("stack is empty");
        } else {
            int removedData = this.top.data;
            this.top = this.top.next;
            return removedData;
        }
    }

    public int peek(){
        if(isEmpty()) {
            throw new RuntimeException("stack is empty");
        } else {
            return this.top.data;
        }
    }

    public boolean isEmpty(){
        return top == null;
    }
}
