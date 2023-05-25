'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { siteConfig } from '../config/site'
import { Icons } from './icons'

const DashboardNav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const path = usePathname()

  return (
    <div className={cn('h-full w-full', className)} ref={ref} {...props}>
      <nav className="grid grid-rows-[50px] items-start gap-2">
        {siteConfig.routeConfig.pagesDashboard.map((item, index) => {
          const Icon = Icons[item.icon || 'arrowRight']
          return (
            item.href && (
              <Link key={index} href={item.disabled ? '/' : item.href}>
                <span
                  className={cn(
                    'group flex items-center rounded-md border-2 border-border px-3 py-2 text-sm font-medium transition duration-300 hover:bg-primary hover:text-primary-foreground',
                    path === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-transparent',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </span>
              </Link>
            )
          )
        })}
      </nav>
    </div>
  )
})

DashboardNav.displayName = 'DashboardNav'

export { DashboardNav }
