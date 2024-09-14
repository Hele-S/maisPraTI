import Lists.CustomList;

public class Main {
    public static void main(String[] args) {
        CustomList list = new  CustomList();

        list.add(1);
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);


        System.out.println(list.toString());
        list.remove(1);
        System.out.println(list.get(3));
    }
}