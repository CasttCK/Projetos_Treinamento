from flask import (
    Flask,
    render_template,
    request,
    redirect,
    session,
    flash
)

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
app.secret_key = 'aplicacao_teste'

@app.route('/')
def index():
    return render_template('lista.html', titulo = 'Jogos', jogos = jogos)

@app.route('/login')
def login():
    proxima = request.args.get('proxima')
    return render_template('login.html', proxima=proxima)

@app.route('/autenticar', methods=['POST'])
def autenticar_usuario():
    if(request.form['usuario'] == 'UserTI' and request.form['senha'] == '1234'):
        session['usuario_logado'] = request.form['usuario']
        flash(session['usuario_logado'] + ' logado com sucesso!')
        proxima_pagina = request.form['proxima']
        return redirect('/{}'.format(proxima_pagina))
    else:
        flash('Usuário não logado!')
        return redirect('/login')

@app.route('/logout')
def logout():
    session['usuario_logado'] = None
    flash('Logout feito com sucesso!')
    return redirect('/login')

@app.route('/novo')
def novo_jogo():
    if('usuario_logado' not in session or session['usuario_logado'] == None):
        return redirect('/login?proxima=novo')

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