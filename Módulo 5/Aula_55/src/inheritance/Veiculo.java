package inheritance;

public class Veiculo {
    public String fabricante;
    public String modelo;
    public String tipo;
    public String categoria;
    public int anoFabricacao;
    public int capacidade;

    private String nrChassi;

    public Veiculo(String fabricante, String modelo, String tipo, String categoria, int anoFabricacao, int capacidade, String nrChassi) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.tipo = tipo;
        this.categoria = categoria;
        this.anoFabricacao = anoFabricacao;
        this.capacidade = capacidade;
        this.nrChassi = nrChassi;
    }

    void ligar(){
        System.out.println("O veículo está ligado");
    }

    void acelerar(){
        System.out.println("Estou acelerando");
    }
}
