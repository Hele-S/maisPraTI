import Atividade1.*;
import Atividade2.*;
import Atividade3.*;
import Atividade4.*;
import Atividade5.*;
import Atividade6.*;
import Atividade7.*;
import Atividade8.*;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int Exercicio = 0;
        System.out.println("---------------------");
        System.out.printf("Insira o número de um exerício da lista para executar: ");
        do {
            Exercicio = scanner.nextInt();
            if (Exercicio <= 8 && Exercicio != 0) {
                System.out.println("Executando exercício: " + Exercicio);
            } else {
                System.out.println("Finalizando correção...");
                break;
            }
            switch (Exercicio) {
                case 1:
                    TaskManager taskManager = new TaskManager();
                    taskManager.addTask("Task 0");
                    taskManager.addTask("Task 1");
                    taskManager.addTask("Task 2");

                    System.out.println("\nLista de tarefas:");
                    taskManager.displayTasks();

                    taskManager.setDone(1);

                    System.out.println("\nLista de tarefas atualizada:");
                    taskManager.displayTasks();

                    taskManager.removeTask(0);

                    System.out.println("\nLista de tarefas após remoção:");
                    taskManager.displayTasks();
                    break;
                case 2:
                    History history = new History(); //Tamanho máximo: 3 URLs

                    history.newAccess("https://classroom.google.com/u/0/c/NjcxNTM1OTA1NjE4/a/NzAzOTIzMzExODQz/details");
                    history.newAccess("https://classroom.google.com/u/0/c/NjcxNTM1OTA1NjE4?pli=1");
                    history.newAccess("https://www.w3schools.com/java/java_user_input.asp");

                    history.showHistory();

                    history.newAccess("https://stackoverflow.com");
                    history.newAccess("https://github.com");

                    history.clear();
                    history.showHistory();

                    break;
                case 3:
                    TextEditor text3 = new TextEditor("SAMPLE");
                    text3.undo();
                    text3.addText(" teste");
                    text3.undo();
                    text3.addText(" Edição 1");
                    text3.addText(" Edição 2");
                    text3.undo();
                    break;
                case 4:
                    UndoRedo text4 = new UndoRedo("SAMPLE");
                    text4.addText(" teste");
                    text4.addText(" teste");
                    text4.undo();
                    text4.undo();
                    text4.undo();
                    text4.redo();
                    text4.redo();
                    text4.redo();
                    break;
                case 5:
                    CardGame Cards = new CardGame();
                    Cards.fillHand();
                    Cards.draw();
                    Cards.discard(2);
                    Cards.change(2, 1);
                    break;
                case 6:
                    ClientLine queue = new ClientLine();
                    queue.addClient("1");
                    queue.addClient("2");
                    queue.addClient("3");
                    queue.addClient("4");
                    queue.callClient();
                    queue.callClient();
                    queue.showQueue();
                    break;
                case 7:
                    PrintQueue prints = new PrintQueue();
                    prints.addPrint(2, "Conteudo 1");
                    prints.addPrint(3, "Conteudo 2");
                    prints.showQueue();
                    prints.printNext();
                    prints.showQueue();
                    prints.printNext();
                    break;
                case 8:
                    ProcessesQueue OpSys = new ProcessesQueue();
                    OpSys.addProcess("BIOS/UEFI");
                    OpSys.addProcess("Bootloader");
                    OpSys.addProcess("Kernel");
                    OpSys.addProcess("Init System");
                    OpSys.Start();
                    break;
            }
            System.out.println("---------------------");
            System.out.printf("Insira o próimo exerício: ");
        } while (Exercicio <= 8 && Exercicio != 0);

    }
}