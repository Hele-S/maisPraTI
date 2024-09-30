package Abstração;

public abstract sealed class FormaPagamento permits Pix, Boleto, CartaoCredito{
    public abstract void processarPagamento(double valor);
    public abstract boolean validarPagamento();

}
