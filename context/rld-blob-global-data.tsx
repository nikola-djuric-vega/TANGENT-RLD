import axios from 'axios'
import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { microSiteData } from '_types/blob/microSiteData'

export interface RLDBlobGlobalData {
  microSiteData?: microSiteData
}

export interface RLDBlobGlobalDataProps {
  children: ReactNode
}

export const RLDBlobGlobalDataContext = createContext<RLDBlobGlobalData | null>(
  null
)

export const RLDBlobGlobalDataProvider = ({
  children,
}: RLDBlobGlobalDataProps) => {
  const [data, setData] = useState<microSiteData>({} as microSiteData)
  const url = process.env.NEXT_PUBLIC_MICROSITE_DATA_URL

  const getData = async () => {
    try {
      const res = await axios.get(url as string)
      setData(res.data)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <RLDBlobGlobalDataContext.Provider value={{ microSiteData: data }}>
      {children}
    </RLDBlobGlobalDataContext.Provider>
  )
}

export const useRLDBlobGlobalData = () => useContext(RLDBlobGlobalDataContext)
