print("*****************************")
print("Este é um jogo de adivinhação")
print("*****************************")

numero_oculto = 35
numero_tentativas = 5

for rodada in numero_tentativas + 1:
    if(numero_tentativas == 1):
        print("\nEssa é a sua última tentativa. Pense bem!")
    else:
        print("\nVocê tem {} tentativas restantes".format(numero_tentativas))

    palpite = int(input("Digite um número entre 1 e 100: "))
    acertou = palpite == numero_oculto
    maior = palpite > numero_oculto
    menor = palpite < numero_oculto

    if(palpite < 1 or palpite > 100):
        print("Você digitou um número errado e perdeu uma rodada")
        continue

    if(palpite == numero_oculto):
        vitoria = True
        print("Parabéns, você acertou!!")
        break
    else:
        if(maior):
            print("O número escolhido é maior do que o segredo!")
        elif(menor):
            print("O número escolhido é menor do que o segredo!")

print("Fim de jogo!")

# FUNÇÃO .format()
# Você consegue usar a função para a interpolação passando o index do valor caso tenha mais de um parâmetro.
# Consegue também usar alguns parâmetros para trabalhar com números float conforme abaixo:
# {:f} - informa que é uma formatação float | {:.2} - Trabalha com duas casas depois da vírgula
# {:7.2f} - o número depois dos dois pontos informa quantos caracteres existe e vai preencher com espaços o que faltar
# {:07.2f} - a mesma coisa de cima, porém vai preencher com '0' o que faltar.

# Pode trabalhar com inteiros usando o d (digital) também da seguinte forma. O exemplo abaixo formata uma data:
# "Data: {:02d}/{:02d}/{:04d}".format(1, 6, 1996)
# O resultado será: Data: 01/06/1996