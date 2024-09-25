package inheritance;

public class Carro extends Veiculo{

    public boolean travaEletrica;
    public String tracao;
    public int nrPortas;
    public String cor;

    public Carro(boolean travaEletrica, String tracao, int nrPortas, String cor) {
        super("Honda","Sedan","Sport Touring","Esportivo", 2014,2,"nsei");
        this.travaEletrica = travaEletrica;
        this.tracao = tracao;
        this.nrPortas = nrPortas;
        this.cor = cor;
    }

    public void trocarMarcha(){
        System.out.println("Cambeando");
    }


    public static void main(String[] args) {
        Carro meuCarro = new Carro(true,"4x4",4,"Azul");
        meuCarro.ligar();
    }

}
