import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="flex flex-col justify-center sm:items-center gap-4">
      <h1 className="text-3xl font-black leading-tight md:text-4xl uppercase">
        Заманауи онлайн шақыртулар
      </h1>
      <p className="text-lg text-muted-foreground sm:text-center">
        Жасанды зият қуатымен қайталанбас
        <br />
        шақырту қағаздарын шығарыңыз
      </p>
      <Link className={buttonVariants({})} href={"/generate"}>
        Шығара бастау
      </Link>
    </div>
  )
}
