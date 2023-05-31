'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { siteConfig } from '@/config/site'
import { fontMono } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Icons } from './icons'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SiteRoutesType } from '@/types'

const DashboardNav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const path = usePathname()

  const routesRegister: SiteRoutesType[] = []
  siteConfig.routeConfig.find((item) => {
    if (item.urlPath.typeUrl === 'register') routesRegister.push(item)
  })

  const routesQuery: SiteRoutesType[] = []
  siteConfig.routeConfig.find((item) => {
    if (item.urlPath.typeUrl === 'query') routesQuery.push(item)
  })

  function LinkNavBar(item: SiteRoutesType, key: string, Icon: any) {
    console.log(key)
    return (
      <Link
        key={key}
        href={item.disabled ? '/' : (item.urlPath.href as string)}
      >
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
  }

  function DropdownMenuRegisterAndQuery(Icon: any) {
    return (
      <>
        <Accordion type="single" collapsible key="register">
          <AccordionItem value="register" className="border-none">
            <AccordionTrigger
              className={cn(
                'group flex items-center rounded-md px-3 py-2 text-sm font-medium text-primary-foreground duration-300 hover:bg-secondary hover:text-secondary-foreground',
                path ===
                  routesRegister.find((item) => path === item.urlPath.href)
                    ?.urlPath.href
                  ? 'bg-secondary text-secondary-foreground'
                  : 'bg-transparent'
              )}
            >
              Cadastro
            </AccordionTrigger>
            <AccordionContent>
              <div className="ml-4 mt-2 flex flex-col gap-1">
                {routesRegister.map((itemRegister) => {
                  return (
                    <Link
                      key={itemRegister.title}
                      href={
                        itemRegister.disabled
                          ? '/'
                          : (itemRegister.urlPath.href as string)
                      }
                    >
                      <span
                        className={cn(
                          'group flex items-center rounded-md px-3 py-2 text-sm font-medium text-primary-foreground transition duration-300 hover:bg-secondary hover:text-secondary-foreground',
                          path === itemRegister.urlPath.href
                            ? 'bg-secondary text-secondary-foreground'
                            : 'bg-transparent',
                          itemRegister.disabled &&
                            'cursor-not-allowed opacity-80'
                        )}
                      >
                        <Icon className="mr-2 h-4 w-4" />
                        <span>{itemRegister.title}</span>
                      </span>
                    </Link>
                  )
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible key="query">
          <AccordionItem value="query" className="border-none">
            <AccordionTrigger
              className={cn(
                'group flex items-center rounded-md px-3 py-2 text-sm font-medium text-primary-foreground transition duration-300 hover:bg-secondary hover:text-secondary-foreground',
                path ===
                  routesQuery.find((item) => path === item.urlPath.href)
                    ?.urlPath.href
                  ? 'bg-secondary text-secondary-foreground'
                  : 'bg-transparent'
              )}
            >
              Consultas
            </AccordionTrigger>
            <AccordionContent>
              <div className="ml-4 mt-2 flex flex-col gap-1">
                {routesQuery.map((itemQuery) => {
                  return (
                    <Link
                      key={itemQuery.title}
                      href={
                        itemQuery.disabled
                          ? '/'
                          : (itemQuery.urlPath.href as string)
                      }
                    >
                      <span
                        className={cn(
                          'group flex items-center rounded-md px-3 py-2 text-sm font-medium text-primary-foreground transition duration-300 hover:bg-secondary hover:text-secondary-foreground',
                          path === itemQuery.urlPath.href
                            ? 'bg-secondary text-secondary-foreground'
                            : 'bg-transparent',
                          itemQuery.disabled && 'cursor-not-allowed opacity-80'
                        )}
                      >
                        <Icon className="mr-2 h-4 w-4" />
                        <span>{itemQuery.title}</span>
                      </span>
                    </Link>
                  )
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    )
  }

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
        {siteConfig.routeConfig.map((item) => {
          const Icon = Icons[item.icon || 'arrowRight']

          return (
            item.urlPath.href &&
            (item.urlPath.typeUrl === 'register' ||
            item.urlPath.typeUrl === 'query' ? null : item.title === 'Conta' ? (
              <>
                {DropdownMenuRegisterAndQuery(Icon)}
                {LinkNavBar(item, item.title, Icon)}
              </>
            ) : (
              <>{LinkNavBar(item, item.title, Icon)}</>
            ))
          )
        })}
      </nav>
    </div>
  )
})

DashboardNav.displayName = 'DashboardNav'

export { DashboardNav }
