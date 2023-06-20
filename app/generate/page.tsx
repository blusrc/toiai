import { Separator } from "@/components/ui/separator"
import { GenerateForm } from "@/components/generate-form"

export default function GeneratePage() {
  return (
    <section className="container flex flex-col items-center py-8">
      <div className="w-2xl flex flex-col gap-8">
        <div>
          <h3 className="text-lg font-medium">Ұйымдастыру ақпараты</h3>
          <p className="text-sm text-muted-foreground">
            Толтырылған ақпаратқа сәйкес сурет пен мәтін таңдалады
          </p>
        </div>
        <Separator />
        <GenerateForm />
      </div>
    </section>
  )
}
