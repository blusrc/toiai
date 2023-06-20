import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-36 md:pd-10">
      <div className="flex flex-col justify-center sm:items-center gap-4">
        <h1 className="text-3xl font-black leading-tight md:text-4xl uppercase">
          Заманауи онлайн шақыртулар
        </h1>
        <p className="text-lg text-muted-foreground sm:text-center">
          Жасанды зият қуатымен қайталанбас
          <br />
          шақырту қағаздарын шығарыңыз
        </p>
        <Button className="">Шығара бастау</Button>
      </div>
      {/* <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div> */}
    </section>
  )
}
