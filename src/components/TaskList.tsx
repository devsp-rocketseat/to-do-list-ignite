import { useState } from 'react'
import { FiTrash, FiCheckSquare } from 'react-icons/fi'

import { useTodos } from '../hooks/useTodos'

import '../styles/tasklist.scss'

export function TaskList() {
  const {
    dataTodos,
    loadingGetTodos,
    createTodo,
    deleteTodo,
    toggleCompleted
  } = useTodos()

  const [newTaskTitle, setNewTaskTitle] = useState('')

  const handleCreateNewTask = () => {
    createTodo({
      title: newTaskTitle,
      completed: false
    })
  }

  if (loadingGetTodos) return <p>Loading...</p>

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input
            id='inputNewTask'
            type="text"
            placeholder="Adicionar novo todo"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>

      <main>
        <ul>
          {dataTodos.map(task => (
            <li key={task._id}>
              <div className={task.completed ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    readOnly
                    checked={task.completed}
                    onClick={() => toggleCompleted(task._id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => deleteTodo(task._id)}>
                <FiTrash size={16} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </section>
  )
}
