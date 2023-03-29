// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {title, id} = todo
  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li>
      <div className="todo-list">
        <p className="todo-description">{title}</p>
        <button className="delete-btn" type="button" onClick={onDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
