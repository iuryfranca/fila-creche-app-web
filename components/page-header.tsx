import * as React from 'react'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

const PageHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        'flex h-24 w-full flex-col items-start justify-center gap-2 border-b-2 bg-white py-2',
        className
      )}
      ref={ref}
      {...props}
    >
      <span className="text-lg font-bold sm:text-2xl">{siteConfig.name}</span>
      <span className="sm:text-md text-sm font-medium">
        {siteConfig.description}
      </span>
    </div>
  )
})

PageHeader.displayName = 'PageHeader'

export { PageHeader }
