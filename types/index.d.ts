import { Icons } from '@/components/icons'

export type MainNavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type SiteRoutesType = {
  title: string
  description?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
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

export type SiteConfigType = {
  name: string
  description: string
  mainNav: MainNavItem[]
  routeConfig: {
    pagesDashboard: SiteRoutesType[]
    pagesRegister: SiteRoutesType[]
    pagesQuery: SiteRoutesType[]
  }
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SiteRoutesType[]
}
