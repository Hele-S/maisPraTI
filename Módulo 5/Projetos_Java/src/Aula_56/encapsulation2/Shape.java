package Aula_56.encapsulation2;

public abstract sealed class Shape permits Circle, Rectangle {
    public abstract double area();
}

final class Circle extends Shape {
    final private double radius;
    public Circle(double radius) {
        this.radius = radius;
    }

    public double area() {
        return Math.PI * radius * radius;
    }
}

final class Rectangle extends Shape {
    private final double width, height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    public double area(){
        return width * height;
    }

    public static void main(String[] args) {
        Shape teste = new Circle(2);
        System.out.println(teste.area());
    }
}
