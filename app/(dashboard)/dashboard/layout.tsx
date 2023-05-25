import { DashboardNav } from '@/components/nav'
import { PageHeader } from '@/components/page-header'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  // const user = await getCurrentUser()

  // if (!user) {
  //   return notFound()
  // }

  return (
    <div className="sm:h-screen-window flex flex-col space-y-6">
      <div className="grid flex-1 md:grid-cols-[270px_1fr]">
        <aside className="hidden w-full flex-col border-r-2 bg-white p-8 pr-4 md:flex">
          <DashboardNav />
        </aside>
        <main className="gap flex w-full flex-1 flex-col gap-8 overflow-hidden">
          <PageHeader className="px-8" />
          <div className="px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
