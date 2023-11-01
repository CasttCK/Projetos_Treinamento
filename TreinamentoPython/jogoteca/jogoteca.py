from flask import (
    Flask,
    render_template,
    request,
    redirect,
    session,
    flash,
    url_for
)

class Usuario:
    def __init__(self, nome, nickname, senha):
        self.nome = nome
        self.nickname = nickname
        self.senha = senha

usuario1 = Usuario('Usuario TI', 'UserTI', '1234')
usuario2 = Usuario('Vinicius Kronemberger', 'CasttCK', 'Castt')
usuarios = { usuario1.nickname : usuario1,
             usuario2.nickname : usuario2 }

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
    if(request.form['usuario'] in usuarios):
        usuario = usuarios[request.form['usuario']]
        if(request.form['senha'] == usuario.senha):
            session['usuario_logado'] = usuario.nickname
            flash(usuario.nome + ' logado com sucesso!')
            proxima_pagina = request.form['proxima']
            if proxima_pagina != 'None':
                return redirect(proxima_pagina)

            return redirect(url_for('novo_jogo'))

    else:
        flash('Usuário não logado!')
        return redirect(url_for('login'))

@app.route('/logout')
def logout():
    session['usuario_logado'] = None
    flash('Logout feito com sucesso!')
    return redirect(url_for('login'))

@app.route('/novo')
def novo_jogo():
    if('usuario_logado' not in session or session['usuario_logado'] == None):
        return redirect(url_for('login', proxima=url_for('novo_jogo')))

    return render_template('novo_jogo.html', titulo='Novo jogo')

@app.route('/criar', methods=['POST',])
def criar_novo_jogo():
    nome = request.form['nome']
    categoria = request.form['categoria']
    console = request.form['console']

    novo_jogo = Jogo(nome, categoria, console)
    jogos.append(novo_jogo)

    return redirect(url_for('index'))

app.run(debug=True)