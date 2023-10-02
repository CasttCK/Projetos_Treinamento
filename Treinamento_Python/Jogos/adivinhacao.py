import random

print("*****************************")
print("Este é um jogo de adivinhação")
print("*****************************")

while True:
    try:
        print("Escolha um nível de dificuldade")
        dificuldade = int(input("(1) - Fácil \n(2) - Médio \n(3) - Difícil\n"))
        break
    except ValueError:
        print("Você digitou um valor errado.\nEscolha uma opção\n")

numero_oculto = quantidade_numeros = pontuacao_geral = pontuacao_possivel = 0
numero_tentativas = tentativas_restantes = 5

match(dificuldade):
    case 1:
        quantidade_numeros = 10
        numero_oculto = random.randrange(1, 11)
        pontuacao_geral = pontuacao_possivel = 100
    case 2:
        quantidade_numeros = 50
        numero_oculto = random.randrange(1, 51)
        pontuacao_geral = pontuacao_possivel = 500
    case 3:
        quantidade_numeros = 100
        numero_oculto = random.randrange(1, 101)
        pontuacao_geral = pontuacao_possivel = 1000

for rodada in range(numero_tentativas):
    if(tentativas_restantes == 1):
        print("\nEssa é a sua última tentativa. Pense bem!")
    else:
        print("\nVocê tem {} tentativas restantes".format(tentativas_restantes))

    palpite = int(input("Digite um número entre 1 e {}: ".format(quantidade_numeros)))
    acertou = palpite == numero_oculto
    maior = palpite > numero_oculto
    menor = palpite < numero_oculto

    if(palpite < 1 or palpite > 100):
        print("Você digitou um número errado e perdeu uma rodada")
        continue

    if(palpite == numero_oculto):
        vitoria = True
        print("Parabéns, você acertou!!")
        print("Você fez {0} pontos de {1} possíveis".format(pontuacao_geral, pontuacao_possivel))
        break
    else:
        if(maior):
            print("O número escolhido é maior do que o segredo!")
        elif(menor):
            print("O número escolhido é menor do que o segredo!")

        pontos_perdidos_rodada = abs(numero_oculto - palpite)
        pontuacao_geral -= pontos_perdidos_rodada

    tentativas_restantes -= 1

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