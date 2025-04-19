import { useContext, useState, createContext } from 'react'
import type { ReactNode } from 'react'
import type { FC } from 'react'
import { type Task } from '../types/types'

type StateContextType = {
  tasks: Task[] | null
  dark: boolean
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}
const StateContext = createContext({} as StateContextType)
type Props = {
  children: ReactNode
}
export const StateProvider: FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[] | null>(null)
  const [dark, setDark] = useState(false)
  return (
    <StateContext.Provider value={{ tasks, setTasks, dark, setDark }}>
      {children}
    </StateContext.Provider>
  )
}
export const useStateContext = (): StateContextType => useContext(StateContext)
