print("*****************************")
print("Este é um jogo de adivinhação")
print("*****************************")

numero_oculto = 35
numero_tentativas = 5

while numero_tentativas > 0:
    if(numero_tentativas == 1):
        print("\nEssa é a sua última tentativa. Pense bem!")
    else:
        print("\nVocê tem {} tentativas restantes".format(numero_tentativas))

    palpite = int(input("Digite um palpite: "))
    acertou = palpite == numero_oculto
    maior = palpite > numero_oculto
    menor = palpite < numero_oculto

    if(palpite == numero_oculto):
        vitoria = True
        print("Parabéns, você acertou!!")
    else:
        if(maior):
            print("O número escolhido é maior do que o segredo!")
        elif(menor):
            print("O número escolhido é menor do que o segredo!")

    numero_tentativas -= 1