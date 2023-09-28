import { useContext, createContext, ReactNode } from 'react'
import data from '../data'
import { ContextData } from '_types/data'

export interface RLDGlobalData {
  search?: string
  data: ContextData
}

export interface RLDGlobalDataProps {
  items: RLDGlobalData
  children: ReactNode
}

export const RLDGlobalDataContext = createContext<RLDGlobalData>({
  search: '',
  data,
})

export const RLDGlobalDataProvider = ({
  items,
  children,
}: RLDGlobalDataProps) => {
  return (
    <RLDGlobalDataContext.Provider value={items}>
      {children}
    </RLDGlobalDataContext.Provider>
  )
}

export const useRLDGlobalData = () => useContext(RLDGlobalDataContext)
