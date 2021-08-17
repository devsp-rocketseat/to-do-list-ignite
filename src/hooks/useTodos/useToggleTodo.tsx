import { gql, useMutation } from '@apollo/client'
import { useGetTodos } from './useGetTodos'

const TOGGLE_TODO = gql`
  mutation UpdateTodo($id: ID!, $completed: Boolean) {
    updateTodo(id: $id, data: {
      completed: $completed
    }) {
      completed
    }
  }
`

export function useToggleTodo() {
  const { dataTodos } = useGetTodos()

  const [toggleTodo, { loading }] = useMutation(TOGGLE_TODO, {
    refetchQueries: [
      'FindAllTodos'
    ]
  })

  const toggleCompleted = (id: string) => {
    try {
      const todo = dataTodos.find(todo => todo._id === id)

      if (todo) {
        toggleTodo({
          variables: {
            id,
            completed: !todo.completed,
          }
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    toggleCompleted,
    loadingToggleCompleted: loading,
  }
}
