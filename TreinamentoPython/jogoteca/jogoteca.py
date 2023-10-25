from flask import Flask, render_template, request, redirect

class Jogo:
    def __init__(self, nome, categoria, console):
        self.nome = nome
        self.categoria = categoria
        self.console = console

jogo1 = Jogo('Tetris', 'Puzzle', 'Atari')
jogo2 = Jogo('Counter-Strike', 'FPS', 'PC')
jogo3 = Jogo('God of war', 'Rack n Slash', 'PS2')
jogos = [jogo1, jogo2, jogo3]

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('lista.html', titulo = 'Jogos', jogos = jogos)

@app.route('/novo')
def novo_jogo():
    return render_template('novo_jogo.html', titulo = 'Novo jogo')

@app.route('/criar', methods=['POST',])
def criar_novo_jogo():
    nome = request.form['nome']
    categoria = request.form['categoria']
    console = request.form['console']

    novo_jogo = Jogo(nome, categoria, console)
    jogos.append(novo_jogo)

    return redirect('/')

app.run(debug=True)