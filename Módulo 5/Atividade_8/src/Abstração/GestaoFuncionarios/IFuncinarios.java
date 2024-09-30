package Abstração.GestaoFuncionarios;

public interface IFuncinarios {

    void trabalhando();

    enum tipos{
        DESENVOLVEDOR("está tendo sindrome do impostor",1.15),
        ESTAGIARIO("está repensando suas esolhas de vida",1),
        GERENTE("está mandando currículo escondido", 1.3);

        public String trabalho;
        public double bonus;

        tipos(String trabalho, double bonus) {
            this.trabalho = trabalho;
            this.bonus = bonus;
        }
    }
}
