package Abstração;
public class SistemaPagamento {
    public static void main(String[] args) {
        FormaPagamento pix = new Pix();
        FormaPagamento Boleto = new Boleto();
        FormaPagamento Cartao = new CartaoCredito();

    }



}
