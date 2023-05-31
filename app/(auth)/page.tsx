import { FormLogin } from '@/components/form-login'

export default function IndexPage() {
  return (
    <section className="container flex h-screen w-screen items-center py-8 sm:py-0">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-medium tracking-normal">
          Faça login para continuar
        </h1>
        <FormLogin />
      </div>
    </section>
  )
}
