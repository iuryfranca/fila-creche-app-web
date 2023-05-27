import { SecretariaForm } from '@/components/forms/secretaria-form'

interface CadastrosPageProps {
  params: { siteUrl: string }
}
export default async function EditorPage({ params }: CadastrosPageProps) {
  return (
    <section className="h-full">
      <SecretariaForm />
    </section>
  )
}
