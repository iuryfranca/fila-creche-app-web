import { SiteConfigType } from '@/types'

// ### Aqui é onde você configura o menu e as possíveis rotas do sistema ###
// ### Fire atento a pasta App, qualquer roda adicionada aqui precisa está lá também ###
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
  routeConfig: [
    {
      title: 'Início',
      description:
        'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
      urlPath: {
        typeUrl: 'dashboard',
        href: '/dashboard',
      },
      icon: 'home',
    },
    {
      title: 'Contato',
      description:
        'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
      urlPath: {
        typeUrl: 'dashboard',
        href: '/dashboard/contato',
      },
      icon: 'layoutTemplate',
    },
    {
      title: 'Listas',
      description:
        'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
      urlPath: {
        typeUrl: 'dashboard',
        href: '/dashboard/listas',
      },
      icon: 'layoutTemplate',
    },
    {
      title: 'Secretaria Escolar',
      description:
        'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
      urlPath: {
        typeUrl: 'register',
        href: '/dashboard/cadastros/secretaria',
      },
      icon: 'layoutTemplate',
    },
    {
      title: 'Creches',
      description:
        'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
      urlPath: {
        typeUrl: 'register',
        href: '/dashboard/cadastros/creches',
      },
      icon: 'layoutTemplate',
    },
    {
      title: 'Vagas',
      description:
        'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
      urlPath: {
        typeUrl: 'register',
        href: '/dashboard/cadastros/vagas',
      },
      icon: 'layoutTemplate',
    },
    {
      title: 'Secretaria Escolar',
      description:
        'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
      urlPath: {
        typeUrl: 'query',
        href: '/dashboard/consulta/secretaria',
      },
      icon: 'layoutTemplate',
    },
    {
      title: 'Creches',
      description:
        'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
      urlPath: {
        typeUrl: 'query',
        href: '/dashboard/consulta/creches',
      },
      icon: 'layoutTemplate',
    },
    {
      title: 'Vagas',
      description:
        'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
      urlPath: {
        typeUrl: 'query',
        href: '/dashboard/consulta/vagas',
      },
      icon: 'layoutTemplate',
    },
    {
      title: 'Conta',
      description:
        'Alguma descrição qualquer aqui, somente teste, nada mais do que teste 😁',
      urlPath: {
        typeUrl: 'dashboard',
        href: '/dashboard/conta',
      },
      icon: 'layoutTemplate',
    },
  ],
}
