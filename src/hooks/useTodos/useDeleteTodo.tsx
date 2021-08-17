import { gql, useMutation } from '@apollo/client'

const DEL_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      _id
    }
  }
`

export function useDeleteTodo() {
  const [delTodo, { loading }] = useMutation(DEL_TODO, {
    refetchQueries: [
      'FindAllTodos'
    ]
  })

  const deleteTodo = (id: string) => {
    try {
      delTodo({
        variables: {
          id,
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  return {
    deleteTodo,
    loadingDeleteTodo: loading,
  }
}
