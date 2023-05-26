import { Icons } from '@/components/icons'

export type MainNavItem = {
  title: string
  href: string
  disabled?: boolean
}

type urlPathType = {
  typeUrl: 'dashboard' | 'register' | 'query'
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type SiteRoutesType = {
  title: string
  description: string
  urlPath: urlPathType
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
}

export type SiteConfigType = {
  name: string
  description: string
  mainNav: MainNavItem[]
  routeConfig: SiteRoutesType[]
}
