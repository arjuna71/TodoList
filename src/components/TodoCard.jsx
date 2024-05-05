import { FaEdit, FaTrash } from "react-icons/fa"

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props
  return (
    <div>
      <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
          <FaEdit
            onClick={() => {
              handleEditTodo(index)
            }}
          />
          <FaTrash
            onClick={() => {
              handleDeleteTodo(index)
            }}
          />
        </div>
      </li>
    </div>
  )
}
