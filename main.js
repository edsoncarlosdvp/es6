import { soma } from './functions'

console.log(soma(1, 2))

// SINTAXE CURTA DE OBJETO

/*
const nome = "Edson"
const idade = 38

const usuario = {
    nome,
    idade,
    empresa: 'ENI'
}

console.log(usuario)*/

// TEMPLATE LITTERS

/*
const nome = "Edson"
const idade = 38

console.log(`Meu nome é ${nome} e tenho ${idade}`)*/

// SPREAD
/*
const usuario1 = {
    nome: 'Edson',
    idade: 38,
    empresa: 'ENI'
}

const usuario2 = { ...usuario1, nome: 'Carlos' }

console.log(usuario2)
*/

/*
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]
*/


// REST

/*
function soma(a, b, ...params) {
    return params
}*/

/*
function soma(...params) {
    return params.reduce((total, next) => total + next)
}*/

//console.log(arr3)

/*
const arr = [1, 2, 3, 4]

const [a, ...c] = arr
*/
/*
const usuario = {
    nome: 'Edson',
    idade: 38,
    empresa: 'ENI'
}

const { nome, ...resto } = usuario
*/

/* DESESTRUTURAÇÃO */
/*const usuario = {
    nome: 'Edson',
    idade: 38,
    endereco: {
        cidade: 'Nova Iguaçu',
        estado: 'RJ',
    }
}*/

//const { nome, idade, endereco: { cidade, estado } } = usuario

// TAMBÉM EM FUNÇÃO
//function mostraNome({ nome, idade }) {
//console.log(nome, idade)
//}
//mostraNome(usuario)

//console.log(nome, idade, cidade, estado)
/* VALORES PADRÃO */
/*const soma = (a = 3, b = 6) => a + b
console.log(soma(2))*/

/* Arrow Function */
//const arr = [1, 3, 4, 5, 6]
/*
const newArr = arr.map(item => {
    return item * 2;
})*/

// retornando a um array
//const teste = () => ['Maça', 'Melão', 'Uva']

// retornando a um objeto (colocar chaves entre parênteses)
//const teste = () => ({ nome: 'Edson Carlos' })
//linha abaixo equivale a de cima
//const newArr = arr.map(item => item * 2)

//console.log(teste())

/*
const arr = [1, 3, 4, 5, 8, 9]

const newArr = arr.map(function (item, index) {
    return item + index;
})

console.log(newArr)

const sum = arr.reduce(function (total, next) {
    return total + next
})

console.log(sum)

const filter = arr.filter(function (item) {
    return item % 2 === 0
})

console.log(filter)

const find = arr.find(function (item) {
    return item === 4
})

console.log(find)*/

/* COM HERANÇA
class List {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor() {
        super()

        this.usuario = 'Edson'
    }

    mostraUsuario() {
        console.log(this.usuario)
    }
}

const MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo Todo')
}

MinhaLista.mostraUsuario()
*/
/*class TodoList {
    constructor() {
        this.todos = []
    }

    addTodos() {
        this.todos.push('Novo todo')
        console.log(this.todos)
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.addTodos();
}*/