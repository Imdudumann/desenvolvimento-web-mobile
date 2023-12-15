import ITodo from "../interfaces/todo";

function salvarTodos(todos: ITodo[]) {
  window.sessionStorage.setItem("todos", JSON.stringify(todos));
}

function criarTodo() {
  const todos = listarTodos();

  const novoTodo: ITodo = {
    id: Date.now().toString(),
    texto: "Novo Todo, clique para editar",
    completo: false
  };

  salvarTodos([...todos, novoTodo]);
}

function listarTodos() {
  const todos = window.sessionStorage.getItem("todos");

  return todos ? JSON.parse(todos) as ITodo[] : [];
}

function atualizarTodo(id: string, texto: string) {
  const todos = listarTodos();

  const todosAtualizados = todos.map((t) => {
    if (t.id === id) {
      return {
        ...t,
        texto: texto
      };
    }

    return t;
  });

  salvarTodos(todosAtualizados);
}

function completarTodo(id: string) {
  const todos = listarTodos();

  const todosAtualizados = todos.map((t) => {
    if (t.id === id) {
      return {
        ...t,
        completo: !t.completo
      };
    }

    return t;
  });

  salvarTodos(todosAtualizados);
}

function removerTodo(id: string) {
  const todos = listarTodos();

  const todosAtualizados = todos.filter((t) => t.id !== id);

  salvarTodos(todosAtualizados);
}

function limparTodos() {
  window.sessionStorage.removeItem("todos");
}

export default {
  criarTodo,
  listarTodos,
  atualizarTodo,
  completarTodo,
  removerTodo,
  limparTodos
}