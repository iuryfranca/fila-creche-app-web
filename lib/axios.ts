import axios from 'axios'

export const API_BACK = axios.create({
  baseURL: '',
})

export const API_IBGE = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/ro/',
})
