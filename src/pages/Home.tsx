import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { about, company, gallery, process, services, stats, whyUs } from "@/data/site";
import { buttonVariants } from "@/components/ui/button";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { SectionHeading } from "@/components/SectionHeading";
import { Gallery } from "@/components/Gallery";
import { CtaBanner } from "@/components/CtaBanner";
import { ServiceNote } from "@/components/ServiceNote";
import { Seo } from "@/components/Seo";
import { cn } from "@/lib/utils";

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy pt-28 pb-40 sm:pb-48">
      <motion.div style={{ y }} className="absolute inset-0 -z-20 scale-110">
        <ResponsiveImage
          name="ship-dismantling-crane"
          alt="Large vessel being dismantled at the Kirikiri waterfront with a crawler crane and work crew"
          priority
          intrinsic={false}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-transparent to-navy/40" />
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0 -z-10 opacity-50" />

      <div className="container-x">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="eyebrow flex items-center gap-3 text-amber">
          <span aria-hidden="true" className="h-0.5 w-10 bg-amber" />
          Maritime • Industrial • Contracting
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-6 max-w-4xl text-[2.6rem] leading-[1.02] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
        >
          Maritime Experience. <span className="text-amber">Practical Solutions.</span> Reliable Delivery.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease }} className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
          {company.description}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease }} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/contact#quote" className={buttonVariants({ size: "lg" })}>
            Request a Quote <ArrowRight aria-hidden="true" className="transition-transform group-hover/btn:translate-x-1" />
          </Link>
          <Link to="/services" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Our Services
          </Link>
        </motion.div>
      </div>

      <a href="#stats" aria-label="Scroll to content" className="absolute bottom-32 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition-colors hover:text-white sm:bottom-40 md:flex">
        <span className="eyebrow text-[10px]">Scroll</span>
        <span className="relative h-10 w-6 rounded-full border-2 border-current">
          <span className="absolute top-1.5 left-1/2 h-2 w-1 -translate-x-1/2 animate-scroll-dot rounded-full bg-amber" />
        </span>
      </a>
    </section>
  );
}

function StatsBar() {
  return (
    <section id="stats" aria-label="Key facts" className="relative z-10 -mt-24 sm:-mt-28">
      <div className="container-x">
        <ul className="grid grid-cols-2 gap-px bg-white/10 shadow-[0_30px_60px_-25px_rgb(11_34_57/0.6)] lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 0.08} className="relative overflow-hidden bg-navy p-5 sm:p-8">
                <span aria-hidden="true" className="absolute top-0 left-0 h-0.5 w-12 bg-amber" />
                <p className="font-display text-[1.65rem] font-bold whitespace-nowrap text-white sm:text-5xl">
                  {typeof s.value === "number" ? <Counter to={s.value} suffix={s.suffix} /> : s.value}
                </p>
                <p className="mt-2 text-sm text-white/70 sm:text-base">{s.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="group overflow-hidden">
            <ResponsiveImage
              name="zoomlion-crane-1"
              alt="Zoomlion crawler crane and excavator at the company's waterfront yard"
              sizes="(min-width: 1024px) 600px, 100vw"
              className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div aria-hidden="true" className="absolute -bottom-5 -left-5 -z-10 h-2/3 w-2/3 border-2 border-teal/40" />
          <div className="absolute right-0 -bottom-8 bg-amber px-6 py-5 sm:-right-6">
            <p className="font-display text-4xl font-bold text-navy">25+</p>
            <p className="text-xs font-semibold tracking-wider text-navy/80 uppercase">Years leadership<br />experience</p>
          </div>
        </Reveal>
        <div>
          <SectionHeading number="01" eyebrow="About us" title="A maritime partner rooted on the Apapa waterfront." />
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed">{about.intro}</p>
            <ul className="mt-8 grid gap-3 border-l-2 border-amber pl-5">
              {about.approach.map((a) => (
                <li key={a} className="font-display font-semibold text-navy">{a}</li>
              ))}
            </ul>
            <Link to="/about" className={cn(buttonVariants({ variant: "outline-dark" }), "mt-10")}>
              More About Us <ArrowRight aria-hidden="true" className="transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="bg-grid relative border-y border-navy/10 bg-white py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading number="02" eyebrow="Our services" title="One maritime partner. Multiple support services." />
          <Reveal>
            <Link to="/services" className={buttonVariants({ variant: "navy" })}>
              All Services <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={(i % 4) * 0.07}>
                <Link
                  to={`/services#${s.slug}`}
                  className="group relative flex h-full flex-col border border-navy/10 bg-offwhite p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal hover:bg-white hover:shadow-[0_25px_50px_-25px_rgb(11_34_57/0.45)] focus-visible:border-teal"
                >
                  <span aria-hidden="true" className="absolute top-0 left-0 h-0.5 w-0 bg-amber transition-all duration-300 group-hover:w-full" />
                  <div className="flex items-start justify-between">
                    <span className="grid size-14 place-items-center bg-navy text-amber transition-colors group-hover:bg-teal group-hover:text-white">
                      <s.icon aria-hidden="true" className="size-6" />
                    </span>
                    <span className="font-display text-sm font-semibold text-slate-body">{s.number}</span>
                  </div>
                  <h3 className="mt-7 text-lg leading-snug font-semibold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-display text-xs font-semibold tracking-widest text-teal uppercase">
                    Learn more <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading number="03" eyebrow="How we work" title="A clear process from first discussion to handover." />
          <Reveal delay={0.1} className="group mt-10 overflow-hidden">
            <ResponsiveImage
              name="yacht-slipway-crane"
              alt="Yacht on the slipway with crane support at the waterfront"
              sizes="(min-width: 1024px) 480px, 100vw"
              className="aspect-[16/10] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:pt-4">
          <ol className="relative grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-14">
            {process.map((step, i) => (
              <Reveal as="li" key={step.number} delay={i * 0.1} className="relative border-l-2 border-navy/10 pl-8 md:border-l-0 md:border-t-2 md:pt-8 md:pl-0">
                  <span aria-hidden="true" className="absolute top-0 -left-[7px] size-3 bg-amber md:-top-[7px] md:left-0" />
                  <div className="flex items-center gap-4">
                    <span aria-hidden="true" data-n={step.number} className="font-display text-5xl font-bold text-navy/10 before:content-[attr(data-n)]" />
                    <step.icon aria-hidden="true" className="size-7 text-teal" />
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-relaxed">{step.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-12">
            <ServiceNote />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-24 sm:py-32">
      <ResponsiveImage name="vessel-hulk-jetty" alt="" intrinsic={false} className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-navy via-navy/95 to-navy/70" />
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0 -z-10" />
      <div className="container-x">
        <SectionHeading number="04" dark eyebrow="Why work with us" title="Built around experience, coordination and practical delivery." />
        <ul className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <Reveal as="li" key={w.title} delay={(i % 3) * 0.08} className="bg-navy/80 p-8 backdrop-blur-sm transition-colors hover:bg-navy-700/90">
                <w.icon aria-hidden="true" className="size-8 text-amber" />
                <h3 className="mt-6 text-xl font-semibold text-white">{w.title}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{w.text}</p>
            </Reveal>
          ))}
          <Reveal as="li" delay={0.16} className="flex flex-col justify-between bg-amber p-8">
              <p className="font-display text-2xl leading-tight font-bold text-navy">One point of contact for marine and industrial support.</p>
              <Link to="/contact#quote" className={cn(buttonVariants({ variant: "navy" }), "mt-8 self-start")}>
                Talk to us <ArrowRight aria-hidden="true" />
              </Link>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}

function GalleryPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading number="05" eyebrow="Projects & site" title="On the waterfront, at work." />
          <Reveal>
            <Link to="/projects" className={buttonVariants({ variant: "outline-dark" })}>
              View Gallery <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-14">
          <Gallery items={gallery.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Seo title="Maritime & Industrial Services, Apapa Lagos" description={company.description} />
      <Hero />
      <StatsBar />
      <AboutPreview />
      <ServicesGrid />
      <HowWeWork />
      <WhyUs />
      <GalleryPreview />
      <CtaBanner />
    </>
  );
}
