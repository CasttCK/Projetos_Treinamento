const registros = [
    {nome: 'JAVA', aplicacao: 'back-end'},
    {nome: '.NET', aplicacao: 'back-end'},
    {nome: 'React', aplicacao: 'front-end'},
    {nome: 'SQL', aplicacao: 'banco de dados'},
    {nome: 'React-Native', aplicacao: 'front-end'},
    {nome: 'HTML', aplicacao: 'front-end'},
    {nome: 'Javascript', aplicacao: 'front-end'}
];

const novoArray = registros.filter(registro => registro.aplicacao !== 'back-end')
console.log(novoArray);
