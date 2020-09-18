// COM HERANÇA
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