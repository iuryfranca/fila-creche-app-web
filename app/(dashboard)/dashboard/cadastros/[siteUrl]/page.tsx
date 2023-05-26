interface CadastrosPageProps {
  params: { siteUrl: string }
}
export default async function EditorPage({ params }: CadastrosPageProps) {
  return (
    <section className="h-full">
      <h1>Template Page - {params.siteUrl}</h1>
    </section>
  )
}
