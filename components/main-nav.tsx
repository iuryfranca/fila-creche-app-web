'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { siteConfig } from '@/config/site'
import { fontMono } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Icons } from './icons'

const DashboardNav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const path = usePathname()

  return (
    <div
      className={cn('flex h-full w-full flex-col gap-5', className, fontMono)}
      ref={ref}
      {...props}
    >
      <Link href="/dashboard">
        <h1 className="font-bold text-primary-foreground">{siteConfig.name}</h1>
      </Link>
      <nav className="grid grid-rows-[50px] items-start gap-2">
        {siteConfig.routeConfig.map((item, index) => {
          const Icon = Icons[item.icon || 'arrowRight']
          return (
            item.urlPath.href && (
              <Link key={index} href={item.disabled ? '/' : item.urlPath.href}>
                <span
                  className={cn(
                    'group flex items-center rounded-md px-3 py-2 text-sm font-medium text-primary-foreground transition duration-300 hover:bg-secondary hover:text-secondary-foreground',
                    path === item.urlPath.href
                      ? 'bg-secondary text-secondary-foreground'
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
