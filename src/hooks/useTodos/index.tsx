import { useCreateTodo } from './useCreateTodo'
import { useDeleteTodo } from './useDeleteTodo'
import { useGetTodos } from './useGetTodos'
import { useToggleTodo } from './useToggleTodo'

export function useTodos() {
  const GetTodos = useGetTodos()
  const CreateTodo = useCreateTodo()
  const DeleteTodo = useDeleteTodo()
  const ToggleTodo = useToggleTodo()

  return {
    ...GetTodos,
    ...CreateTodo,
    ...DeleteTodo,
    ...ToggleTodo,
  }
}
