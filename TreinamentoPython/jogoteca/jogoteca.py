from flask import Flask, render_template


app = Flask(__name__)

@app.route('/home')
def main():
    jogos = ['Tetris', 'Crash', 'Spider-Man']
    return render_template('lista.html',
                           titulo_pagina = 'Jogoteca',
                           titulo_tabela = 'Jogos',
                           jogos = jogos)

app.run()