import './Todo.css';
import ITodo from '../../interfaces/todo';
import Delete from '@mui/icons-material/Delete';

interface ITodoParams {
  todo: ITodo;
  atualizarTodo: (id: string, title: string) => void;
  removerTodo: (id: string) => void;
  completarTodo: (id: string) => void;
}

function Todo({ todo, atualizarTodo, removerTodo, completarTodo }: ITodoParams) {
  return (
    <div className='todo-container'>
      <input type="checkbox" id="check" checked={todo.completo} onChange={() => completarTodo(todo.id)} />

      <span className={todo.completo ? 'todo-texto-completo' : 'todo-texto'} contentEditable="true" onBlur={(e) => atualizarTodo(todo.id, e.currentTarget.innerText)}>{ todo.texto }</span>

      <button className='todo-remover' onClick={() => removerTodo(todo.id)} >
        <Delete color='action' />
      </button>
    </div>
  );
}

export default Todo;