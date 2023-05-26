'use client'

import * as React from 'react'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { notFound, usePathname } from 'next/navigation'

const PageHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const path = usePathname()

  const title = siteConfig.routeConfig.find(
    (object) => object.urlPath.href === path
  )?.title

  const description = siteConfig.routeConfig.find(
    (object) => object.urlPath.href === path
  )?.description

  const href = siteConfig.routeConfig.find(
    (object) => object.urlPath.href === path
  )?.urlPath.href

  if (href !== path) {
    return notFound()
  }

  return (
    <div
      className={cn(
        'flex h-24 w-full flex-col items-start justify-center gap-4 bg-white',
        className
      )}
      ref={ref}
      {...props}
    >
      <span className="text-lg font-bold sm:text-2xl">{title}</span>
      <span className="sm:text-md text-sm font-normal text-muted-foreground">
        {description}
      </span>
    </div>
  )
})

PageHeader.displayName = 'PageHeader'

export { PageHeader }
