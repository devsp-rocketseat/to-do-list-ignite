import { gql, useQuery } from '@apollo/client'

interface GetTasksProps {
  allTodos: {
    data: TaskProps[]
  }
}

interface TaskProps {
  _id: string;
  title: string;
  completed: boolean;
}

const GET_TODOS = gql`
  query FindAllTodos {
    allTodos {
      data {
        _id
        title
        completed
      }
    }
  }
`

export function useGetTodos() {
  const { data, loading } = useQuery<GetTasksProps>(GET_TODOS)

  const todos = data?.allTodos.data || []

  return {
    dataTodos: todos,
    loadingGetTodos: loading,
  }
}
