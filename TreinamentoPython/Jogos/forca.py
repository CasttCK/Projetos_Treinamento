def jogar():
    print("*****************************")
    print("** Este é um jogo de forca **")
    print("*****************************")

    palavra_secreta = ""
    layout_inicial = []
    tentativas = 7
    
    enforcou = False
    acertou = False

    palavra_secreta = input("Digite uma palavra para começar o jogo")

    for letra in palavra_secreta:
        layout_inicial.append("_")

    print(layout_inicial)
    print("A palavra secreta tem {0} letras".format(len(palavra_secreta)))

    while(not enforcou and not acertou):
        index = 0
        letra_palpite = input("Digite uma letra")
        tentativas -= 1
        letra_palpite = letra_palpite.strip()
        letra_palpite = letra_palpite.lower()

        for letra in palavra_secreta:
            if(letra == letra_palpite):
                layout_inicial[index] = letra_palpite

            index -= 1

        print(layout_inicial)
        acertou = "_" not in layout_inicial
        enforcou = tentativas < 0

    if(acertou):
        print("Você acertou, parabéns! \nFim do jogo")
    else:
        print("Fim do jogo. \nVocê perdeu ! -_-")

if(__name__ == "__main__"):
    jogar()