import Lists.CustomList;

public class Main {
    public static void main(String[] args) {
        CustomList list = new  CustomList();

        list.add(5);
        list.add(50);
        list.add(500);


        System.out.println(list.toString());
        list.remove(1);
        System.out.println(list.toString());

    }
}