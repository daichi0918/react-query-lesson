import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import type { Task } from '../types/types'

const getTasks = async () => {
  const { data } = await axios.get<Task[]>('http://127.0.0.1:8000/api/tasks/')
  return data
}

export const useQueryTasks = () => {
  return useQuery<Task[]>({
    queryKey: ['tasks'],
    queryFn: getTasks,
    gcTime: 10000,
    staleTime: 10000,
  })
}
