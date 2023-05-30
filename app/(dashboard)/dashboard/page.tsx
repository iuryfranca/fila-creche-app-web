import { Overview } from '@/components/overview'
import { TesteComponent } from '@/components/testeComponent'

export default function IndexPage() {
  return (
    <section>
      <div>
        <div className="my-10 rounded-md border-2 p-4">
          <Overview />
        </div>
        <TesteComponent />
      </div>
    </section>
  )
}
