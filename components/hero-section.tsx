import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import WordCarousel from "@/components/word-carousel"

export function HeroSection() {
  return (
    <div className="flex flex-col items-start gap-8 ">
      <div>
        <WordCarousel />
        <h1 className="text-3xl font-black leading-tight md:text-4xl">
          Онлайн Шақыртулар
        </h1>
      </div>
      <p className="text-lg text-muted-foreground max-w-sm">
        Жасанды зият қуатымен шақырту қағаздарын шығарыңыз
      </p>
      <Link className={buttonVariants({})} href={"/generate"}>
        Шығара бастау
      </Link>
    </div>
  )
}
