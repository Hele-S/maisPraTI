package Encapsulamento;

// Exercício 1
public class Produto {
    private String name;
    private double rootPrice;
    private int amount;
    private double currentPrice;

    public Produto(String name, double rootPrice, int amount) {
        this.name = name;
        this.rootPrice = checkPrice(rootPrice);
        this.amount = checkAmount(amount);
        this.currentPrice = this.rootPrice;
    }

    private double checkPrice(double value) {
        if (value > 0) {
            return value;
        } else {
            throw new IllegalArgumentException("Valor de preço inválido");
        }
    }

    private int checkAmount(int value) {
        if (value > 0) {
            return value;
        } else {
            throw new IllegalArgumentException("Valor de quantidade inválido");
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getRootPrice() {
        return rootPrice;
    }

    public void setRootPrice(double rootPrice) {
        this.rootPrice = checkPrice(rootPrice);
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = checkAmount(amount);
    }
    
    public double getCurrentPrice() {
        return this.currentPrice;
    }

    // Exercício 2
    protected void applyDiscount(double percetage) {

        if (percetage < 50 && percetage > 0) {
            this.currentPrice = (double) Math.round((this.rootPrice - (this.rootPrice * percetage /100))*100) /100;
        } else {
            throw new IllegalArgumentException("Valor de desconto inválido");
        }
    }
    public static void main(String[] args) {
        Produto teste = new Produto("coisa",140.42,4);
        System.out.println(teste.getCurrentPrice());
        teste.applyDiscount(20);
        System.out.println(teste.getCurrentPrice());
    }
}
