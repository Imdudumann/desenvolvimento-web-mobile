import { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import todoService from './service/todo';
import ITodo from './interfaces/todo';
import Button from './components/Button/Button';

function App() {
  const [todos, setTodos] = useState<ITodo[]>(todoService.listarTodos());

  useEffect(() => {}, [todos]);

  const criarTodo = () => {
    todoService.criarTodo();

    setTodos(todoService.listarTodos());
  }

  const limparTodos = () => {
    todoService.limparTodos();

    setTodos([]);
  }

  const atualizarTodo = (id: string, title: string) => {
    todoService.atualizarTodo(id, title);

    setTodos(todoService.listarTodos());
  }

  const removerTodo = (id: string) => {
    todoService.removerTodo(id);

    setTodos(todoService.listarTodos());
  }

  const completarTodo = (id: string) => {
    todoService.completarTodo(id);

    setTodos(todoService.listarTodos());
  }

  return (
    <div id='container'>
      <h4>TODO List</h4>

      <div className='lista'>
        {todos && todos.map((todo: ITodo) => (
          <Todo
            key={todo.id}
            todo={todo}
            atualizarTodo={atualizarTodo}
            removerTodo={removerTodo}
            completarTodo={completarTodo}
          />
        ))}
      </div>

      <div className='acoes'>
        <Button texto='Criar' acao={criarTodo} />
        <Button texto='Limpar' acao={limparTodos} />
      </div>
    </div>
  );
}

export default App;
