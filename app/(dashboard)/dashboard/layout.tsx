import { DashboardNav } from '@/components/main-nav'
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
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="grid flex-1 md:grid-cols-[270px_1fr]">
        <aside className="hidden w-full flex-col bg-primary p-8 pr-4 md:flex">
          <DashboardNav />
        </aside>
        <main className="container flex w-full flex-1 flex-col gap-8 overflow-hidden pt-10">
          <PageHeader />
          <div>{children}</div>
        </main>
      </div>
    </div>
  )
}
