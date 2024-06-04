import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo as addTodoService, deleteTodo as deleteTodoService, getTodos, updateTodo as updateTodoService } from "./api/todos";

export function useTodos() {
    const { data: todos = [] } = useQuery({
        queryKey: ['todos'],
        queryFn: getTodos
      })
    
      const queryClient = useQueryClient()
    
      const { mutate: updateTodo } = useMutation({
        mutationFn: updateTodoService,
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ['todos']})
        }
      })

    
      const { mutate: addTodo } = useMutation({
        mutationFn: addTodoService,
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ['todos']})
        }
      })
    
      const deleteTodo = async (id: number) => {
        await deleteTodos({ id });
      };
    
      const { mutate: deleteTodos } = useMutation({
        mutationFn: deleteTodoService,
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ['todos']})
        }
      })

    return {
        todos,
        updateTodo,
        addTodo,
        deleteTodo
    }
}