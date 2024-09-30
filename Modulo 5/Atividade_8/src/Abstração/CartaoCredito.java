package Abstração;

public final class CartaoCredito extends FormaPagamento {
    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento de R$" + valor + " realizado com Cartão de Crédito.");
        } else {
            System.out.println("Falha ao validar o Cartão de Crédito.");
        }
    }

    @Override
    public boolean validarPagamento() {
        System.out.println("Validando Cartão de Crédito...");
        return true;
    }
}

