import adivinhacao
import forca

print("*****************************")
print("****** Escolha um jogo ******")
print("*****************************")

print("Escolha um jogo")
jogo_escolhido = int(input("(1) - Adivinhação \n(2) - Forca \n"))

if(jogo_escolhido == 1):
    adivinhacao.jogar()
elif(jogo_escolhido == 2):
    forca.jogar()