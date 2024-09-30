package Abstração;

public non-sealed class Pix extends FormaPagamento {
    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento de R$" + valor + " realizado via Pix.");
        } else {
            System.out.println("Falha ao validar o Pix.");
        }
    }

    @Override
    public boolean validarPagamento() {
        System.out.println("Validando Chave Pix...");
        return true;
    }
}
