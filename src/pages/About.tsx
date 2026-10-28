import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { about, commitmentIntro, commitments, company } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { CtaBanner } from "@/components/CtaBanner";
import { Seo } from "@/components/Seo";
import { buttonVariants } from "@/components/ui/button";

export default function About() {
  return (
    <>
      <Seo title="About Us" description="A Nigerian maritime and industrial services company based at Kirikiri Waterside, Apapa, Lagos, led by more than 25 years of marine experience." />
      <PageHero
        title="About Us"
        eyebrow="Who we are"
        intro="Maritime and industrial support services from the Kirikiri waterfront, Apapa, Lagos."
        image="zoomlion-crane-2"
        imageAlt="Zoomlion crawler crane at the company's yard"
      />

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading number="01" eyebrow="Our story" title="Maritime experience. Practical solutions. Reliable delivery." />
          </div>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed lg:col-span-7">
            <p className="font-display text-xl leading-relaxed font-medium text-navy sm:text-2xl">{about.intro}</p>
            <p>{about.story}</p>
          </Reveal>
        </div>
      </section>

      {/* Approach strip */}
      <section aria-labelledby="approach" className="bg-grid-dark relative bg-navy py-16">
        <div className="container-x">
          <h2 id="approach" className="eyebrow text-amber">Our approach</h2>
          <ol className="mt-8 grid gap-px bg-white/10 md:grid-cols-3">
            {about.approach.map((step, i) => (
              <Reveal as="li" key={step} delay={i * 0.1} className="flex items-baseline gap-5 bg-navy p-8">
                <span className="font-display text-sm font-semibold text-amber">0{i + 1}</span>
                <span className="font-display text-xl font-semibold text-white sm:text-2xl">{step}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="group relative overflow-hidden">
            <ResponsiveImage
              name="ship-dismantling-crane"
              alt="Vessel dismantling operation with crawler crane at the waterfront"
              sizes="(min-width: 1024px) 600px, 100vw"
              className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-1/3 bg-amber" />
          </Reveal>
          <div>
            <SectionHeading number="02" eyebrow="Leadership & experience" title="Experience that understands marine operations." />
            <Reveal delay={0.1} className="mt-6 space-y-5 text-lg leading-relaxed">
              {about.leadership.map((p) => <p key={p}>{p}</p>)}
            </Reveal>
          </div>
        </div>
      </section>

      {/* MD/CEO */}
      <section aria-labelledby="ceo" className="bg-grid border-y border-navy/10 bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
            <Reveal className="relative mx-auto w-full max-w-sm">
              <div aria-hidden="true" className="absolute -top-4 -left-4 h-full w-full border-2 border-amber" />
              <div className="relative overflow-hidden bg-navy">
                <ResponsiveImage
                  name={company.ceo.image}
                  alt={`Portrait of ${company.ceo.name}, ${company.ceo.title}`}
                  sizes="(min-width: 768px) 384px, 90vw"
                  className="aspect-[2/3] h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -right-3 -bottom-3 bg-navy px-5 py-3 sm:-right-6">
                <p className="eyebrow text-amber">{company.ceo.title}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow flex items-center gap-3 text-teal">
                <span className="text-slate-body">03</span>
                <span aria-hidden="true" className="h-0.5 w-8 bg-amber" /> Leadership
              </p>
              <h2 id="ceo" className="mt-6 text-3xl font-bold sm:text-4xl">{company.ceo.name}</h2>
              <p className="mt-2 font-display text-lg font-medium text-teal">Managing Director / Chief Executive Officer</p>
              <p className="mt-6 text-lg leading-relaxed">
                Our operating model is collaborative: we work with clients, technical personnel, equipment providers and other project partners to assemble the right support for each assignment.
              </p>
              <Link to="/contact#quote" className={`${buttonVariants({ variant: "navy" })} mt-8`}>
                Work with us <ArrowRight aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            number="04"
            eyebrow="Our commitment"
            title="Responsible work. Respect for people, property and the waterfront."
            intro={commitmentIntro}
          />
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {commitments.map((c, i) => (
              <Reveal
                as="li"
                key={c.title}
                delay={i * 0.1}
                className="group relative border border-navy/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal hover:shadow-[0_25px_50px_-25px_rgb(11_34_57/0.45)]"
              >
                <span aria-hidden="true" className="absolute top-0 left-0 h-0.5 w-12 bg-amber transition-all duration-300 group-hover:w-full" />
                <span className="grid size-14 place-items-center bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                  <c.icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{c.title}</h3>
                <p className="mt-3 leading-relaxed">{c.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
