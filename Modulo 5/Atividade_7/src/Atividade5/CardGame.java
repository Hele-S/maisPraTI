package Atividade5;

public class CardGame {
    private ChainedNode head;
    private ChainedNode tail;
    private ChainedNode current;

    public CardGame() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }

    public void showCards() {
        ChainedNode card = head;
        if (card.next != null) {
            while (card != null) {
                System.out.printf("[" + card.content + "] ");
                card = card.next;
            }
            System.out.println("");
        } else {
            System.out.println("Sua mão está vazia!");
        }
    }

    private void addCard() {
        int content = (int) Math.floor((Math.random() * 8) + 1);
        ChainedNode newCard = new ChainedNode(content);

        if (head == null) {
            head = newCard;
            tail = newCard;
            current = newCard;
        } else {
            newCard.prev = current;
            current.next = newCard;
            current = newCard;
            tail = newCard;
        }
    }

    public void fillHand() {
        if (head == null) {
            int count = 0;
            while(count < 5) {
                count++;
                addCard();
            }
        }
        showCards();
    }

    public void draw() {
        addCard();
        showCards();
    }

    public void change(int card1Index, int card2Index) {
        if (card1Index == card2Index) {
            System.out.println("Insira cartas diferentes!");
            return;
        }

        ChainedNode Card1 = null;
        ChainedNode Card2 = null;
        ChainedNode cardFound = head;
        int count = 0;
        while(card1Index > count) {
            if (cardFound == null) {
                break;
            }
            cardFound = cardFound.next;
            count++;
        }
        if (cardFound == head) {
            Card1 = head;
        } else if (cardFound != null){
            Card1 = cardFound.prev.next;
        }
        cardFound = head;
        count = 0;
        while(card2Index > count) {
            if (cardFound == null) {
                break;
            }
            cardFound = cardFound.next;
            count++;
        }
        if (cardFound == head) {
            Card2 = head;
        } else if (cardFound != null){
            Card2 = cardFound;
        }
        if (Card1 == null || Card2 == null) {
            System.out.println(Card1 == null ? "Posição 1: " + card1Index + " Não encontrada" : "");
            System.out.println(Card2 == null ? "Posição 2: " + card2Index + " Não encontrada" : "");
            return;
        }
        count = Card1.content;
        (Card1 == head ? head : Card1).content = Card2.content;
        (Card2 == head ? head : Card2).content = count;
        showCards();
    }

    public void discard(int cardIndex) {
        if (head != null) {
            ChainedNode index = head;
            int count = 0;
            while (index != null && count < cardIndex) {
                index = index.next;
                count++;
            }
            if (index == null) {
                System.out.println("Carta não encontrada!");
                return;
            }
            if (index == head) {
                head = head.next;
                if (head != null) {
                    head.prev = null;
                } else {
                    tail = null;
                }
            }
            else if (index == tail) {
                tail = tail.prev;
                if (tail != null) {
                    tail.next = null;
                }
            }
            else {
                ChainedNode prevNode = index.prev;
                ChainedNode nextNode = index.next;

                if (prevNode != null) {
                    prevNode.next = nextNode;
                }
                if (nextNode != null) {
                    nextNode.prev = prevNode;
                }
            }
            showCards();
        }
    }
}