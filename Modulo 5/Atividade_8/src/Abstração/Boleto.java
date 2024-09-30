package Abstração;

public final class Boleto extends FormaPagamento {
    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Boleto gerado no valor de R$" + valor + ". Pagamento pendente.");
        } else {
            System.out.println("Falha ao gerar o Boleto.");
        }
    }

    @Override
    public boolean validarPagamento() {
        System.out.println("Validando Boleto...");
        return true;
    }
}

