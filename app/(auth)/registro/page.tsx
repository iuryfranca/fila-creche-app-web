import { FormRegister } from '@/components/form-register'

export default function IndexPage() {
  return (
    <section className="sm:h-screen-window container flex h-full w-screen items-center py-8 sm:py-0">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-medium tracking-tight">
          Crie uma conta para continuar
        </h1>
        <FormRegister />
      </div>
    </section>
  )
}
