'use client'

import { API_IBGE } from '@/lib/axios'
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface PropsReactNode {
  children: ReactNode
}

type DataAddress = {
  id: string
  name: string
}

type AddressContextData = {
  listCidades: DataAddress[] | null
  // listDistritos: DataAddress[]
  // listSubdistritos: DataAddress[]
}

export const AddressContext = createContext({} as AddressContextData)

export const AddressProvider: FC<PropsReactNode> = ({ children }) => {
  const [listCidades, setListCidades] = useState<DataAddress[] | null>(null)
  // const [listDistritos, setListDistritos] = useState<DataAddress[]>()
  // const [listSubdistritos, setListSubdistritos] = useState<DataAddress[]>()

  useEffect(() => {
    API_IBGE.get('municipios').then((res) => {
      const filterData = res.data.map((item: any) => {
        return {
          id: item.id,
          name: item.nome,
        }
      })
      setListCidades(filterData)
    })
  }, [])

  return (
    <AddressContext.Provider
      value={{
        listCidades,
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}

export const useAddressContext = () => {
  const context = useContext(AddressContext)

  if (!context) {
    throw new Error('useAddressContext must be used within a AddressProvider')
  }

  return context
}
