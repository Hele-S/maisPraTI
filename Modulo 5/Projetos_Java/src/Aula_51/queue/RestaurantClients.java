package Aula_51.queue;
//  Imagine um sistema de atendimento ao cliente onde temos uma lista de clientes aguardando para serem atendidos.
//  Cada cliente é adicionado à lista e, em seguida, é atendido na ordem em que chegou (fila).
public class RestaurantClients {
    public static class Node {
        int data;
        Node next;

        Node(int data){
            this.data = data;
            this.next = null;
        }

    }


}
