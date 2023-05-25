import { SiteConfigType, SiteRoutesType } from '@/types'

export type SiteConfig = typeof siteConfig

export const pagesDashboard: SiteRoutesType[] = [
  {
    title: 'Início',
    href: '/dashboard',
    icon: 'home',
    description:
      'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
  },
  {
    title: 'Disciplinas',
    href: '/dashboard/disciplinas',
    icon: 'layoutTemplate',
    description:
      'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
  },
  {
    title: 'Diários',
    href: '/dashboard/diarios',
    icon: 'layoutTemplate',
    description:
      'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
  },
]

export const pagesRegister: SiteRoutesType[] = [
  {
    title: 'Secretaria Escolar',
    href: '/dashboard/cadastros/secretaria',
    icon: 'layoutTemplate',
    description:
      'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
  },
  {
    title: 'Funcionários',
    href: '/dashboard/cadastros/creches',
    icon: 'layoutTemplate',
    description:
      'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
  },
  {
    title: 'Escolas',
    href: '/dashboard/cadastros/vagas',
    icon: 'layoutTemplate',
    description:
      'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
  },
]

export const pagesQuery: SiteRoutesType[] = [
  {
    title: 'Secretaria Escolar',
    href: '/dashboard/consulta/secretaria',
    icon: 'layoutTemplate',
    description:
      'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
  },
  {
    title: 'Funcionários',
    href: '/dashboard/consulta/creches',
    icon: 'layoutTemplate',
    description:
      'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
  },
  {
    title: 'Escolas',
    href: '/dashboard/consulta/vagas',
    icon: 'layoutTemplate',
    description:
      'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
  },
]

export const siteConfig: SiteConfigType = {
  name: 'FILA DE ESPERA - TCE',
  description:
    'Site com foco no gerenciamento de fila de esfera de creches do estado de Rondônia',
  mainNav: [
    {
      title: 'FILA DE ESPERA',
      href: '/dashboard',
    },
  ],
  routeConfig: {
    pagesDashboard: pagesDashboard,
    pagesRegister: pagesRegister,
    pagesQuery: pagesQuery,
  },
}
