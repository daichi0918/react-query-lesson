import { useState, useEffect } from 'react'
import { useStateContext } from '../context/StateProvider'
import axios from 'axios'
import type { Task } from '../types/types'

export const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext()
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setError(false)
      setLoading(true)
      try {
        const res = await axios.get<Task[]>('http://127.0.0.1:8000/api/tasks/')
        setTasks(res.data)
      } catch (error) {
        console.log(error)
        setError(true)
      }
      setLoading(false)
    }
    void fetchData()
  }, [setTasks])

  return { tasks, isLoading, isError }
}
