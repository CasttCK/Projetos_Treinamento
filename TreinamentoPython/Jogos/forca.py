def jogar():
    print("*****************************")
    print("** Este é um jogo de forca **")
    print("*****************************")

    palavra_secreta = "hiper"
    enforcou = False
    acertou = False

    while(not enforcou and not acertou):
        index = 0
        letraPalpite = input("Digite uma letra")

        for letra in palavra_secreta:
            if(letra == letraPalpite):
                print("Encontrei a letra {} na posição {}".format(letra, index))
                index += 1



    print("Fim do jogo")

if(__name__ == "__main__"):
    jogar()