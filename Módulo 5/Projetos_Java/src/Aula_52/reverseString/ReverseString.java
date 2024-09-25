package Aula_52.reverseString;

class Node {
    char data;
    Node next;

    public Node(char data) {
        this.data = data;
        this.next = null;
    }
}


public class ReverseString {

    private Node top;
    private Node bottom;

    public ReverseString() {
        this.top = null;
        this.bottom = null;
    }

    public void push(String data) {
        int index = data.length() - 1;
//        data.length();
        while (index >= 0) {
            Node newNode = new Node(data.charAt(index));
            newNode.next = this.top;
            this.top = newNode;
            if (this.bottom == null) {
                this.bottom = newNode;
            }


            index--;
        }
//        Node newNode = new Node(data);
    }

    public void peekAll() {
        System.out.println("String: " + Stringify());
    }

    private String Stringify() {
        Node nextChar = this.top;
        String output = "";
        while (nextChar != null) {
            output += nextChar.data;
            nextChar = nextChar.next;
        }
        return output;
    }

    public char pop() {
        if (isEmpty()) {
            throw new RuntimeException("stack is empty");
        } else {
            char removedData = this.top.data;
            this.top = this.top.next;
            return removedData;
        }
    }

    public char peek() {
        if (isEmpty()) {
            throw new RuntimeException("stack is empty");
        } else {
            return this.top.data;
        }
    }

    public boolean isEmpty() {
        return top == null;
    }

    public void reverse() {
        String input =  Stringify();
        String output = "";
        int index = input.length() - 1;
        while (index >= 0) {
            output += input.charAt(index);
            index--;
        }
        System.out.println("String invertida: " + output);
    }
}
