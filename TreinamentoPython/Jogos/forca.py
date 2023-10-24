import random

def jogar():
    imprime_saudacoes("Este é um jogo de forca")

    palavra_secreta = selecionar_palavra()
    layout_inicial = criar_template_forca(palavra_secreta)
    tentativas = 7
    
    enforcou = False
    acertou = False

    print("\nA palavra secreta tem {0} letras".format(len(palavra_secreta)))
    print(layout_inicial)

    while(not enforcou and not acertou):
        index = 0
        letra_palpite = input("Digite uma letra")
        tentativas -= 1
        letra_palpite = letra_palpite.strip()
        letra_palpite = letra_palpite.lower()

        for letra in palavra_secreta:
            if(letra == letra_palpite):
                layout_inicial[index] = letra_palpite

            index += 1

        print(layout_inicial)
        acertou = "_" not in layout_inicial
        enforcou = tentativas < 0

    if(acertou):
        print("Você acertou, parabéns! \nFim do jogo")
    else:
        print("Fim do jogo. \nVocê perdeu ! -_-")

def imprime_saudacoes(mensagem):
    print("*****************************")
    print("** {} **".format(mensagem))
    print("*****************************")

def selecionar_palavra():
    palavras_disponiveis = []
    arquivo = open("palavras.txt", "r")

    for linha in arquivo:
        palavras_disponiveis.append(linha.strip())

    arquivo.close()

    index_aleatorio = random.randrange(0, len(palavras_disponiveis))
    palavra_secreta = palavras_disponiveis[index_aleatorio]

    return palavra_secreta

def criar_template_forca(palavra):
    layout = []
    for letra in palavra:
        layout.append("_")

    return layout

if(__name__ == "__main__"):
    jogar()

