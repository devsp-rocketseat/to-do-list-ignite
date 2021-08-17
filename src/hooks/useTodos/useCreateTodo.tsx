import { gql, useMutation } from '@apollo/client'

interface CreateTodoProps {
  title: string
  completed: boolean
}

const ADD_TODO = gql`
  mutation CreateTodo($title: String!, $completed: Boolean) {
    createTodo(data: {
      title: $title
      completed: $completed
    }) {
      title
      completed
    }
  }
`

export function useCreateTodo() {
  const [postTodo, { loading }] = useMutation(ADD_TODO, {
    refetchQueries: [
      'FindAllTodos'
    ]
  })

  const createTodo = ({ title, completed }: CreateTodoProps) => {
    try {
      postTodo({
        variables: {
          title,
          completed
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  return {
    createTodo,
    loadingCreateTodo: loading,
  }
}
