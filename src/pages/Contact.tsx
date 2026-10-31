import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { company, productEnquiryOption, products, services } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ServiceNote } from "@/components/ServiceNote";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input, Label, NativeSelect, Textarea } from "@/components/ui/input";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY";
const formConfigured = !!WEB3FORMS_KEY && WEB3FORMS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY";

type Fields = { name: string; company: string; email: string; phone: string; service: string; location: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", company: "", email: "", phone: "", service: "", location: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(f.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!f.service) e.service = "Please choose a service.";
  if (f.message.trim().length < 10) e.message = "Please tell us a little about your project (10+ characters).";
  return e;
}

const contactCards = [
  { icon: Phone, label: "Phone", value: company.phoneDisplay, href: company.phoneHref, hint: "Tap to call" },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}`, hint: "Send us an email" },
  { icon: MapPin, label: "Office", value: company.address, href: company.mapLink, hint: "Open in Google Maps", external: true },
];

export default function Contact() {
  const [params] = useSearchParams();
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  // Pre-fill from "Request this service" and product "Request a quote" links
  useEffect(() => {
    const service = services.find((s) => s.slug === params.get("service"));
    if (service) setFields((f) => ({ ...f, service: service.title }));
    const product = products.find((p) => p.slug === params.get("product"));
    if (product)
      setFields((f) => ({
        ...f,
        service: productEnquiryOption,
        message: f.message || `I'd like a quote for: ${product.name}\nQuantity: `,
      }));
  }, [params]);

  const set = (key: keyof Fields) => (e: { target: { value: string } }) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`f-${firstInvalid}`)?.focus();
      toast.error("Please check the highlighted fields.");
      return;
    }

    if (!formConfigured) {
      // No form backend yet: hand the enquiry to the visitor's email client
      const body = Object.entries(fields).filter(([, v]) => v).map(([k, v]) => `${k[0].toUpperCase()}${k.slice(1)}: ${v}`).join("\n");
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Quote request: ${fields.service}`)}&body=${encodeURIComponent(body)}`;
      toast.success("Opening your email app with your request…");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Quote request: ${fields.service} — ${fields.name}`,
          from_name: `${company.name} website`,
          ...fields,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Submission failed");
      toast.success("Thank you! Your request has been sent. We'll be in touch shortly.");
      setFields(empty);
    } catch {
      toast.error(`Sorry, something went wrong. Please call ${company.phoneDisplay} or email us directly.`);
    } finally {
      setSubmitting(false);
    }
  }

  const field = (key: keyof Fields) => ({
    id: `f-${key}`,
    name: key,
    value: fields[key],
    onChange: set(key),
    "aria-invalid": !!errors[key] || undefined,
    "aria-describedby": errors[key] ? `f-${key}-error` : undefined,
  });
  const err = (key: keyof Fields) =>
    errors[key] && (
      <p id={`f-${key}-error`} className="mt-2 text-sm text-red-700">
        {errors[key]}
      </p>
    );

  return (
    <>
      <Seo title="Contact & Quote" description={`Request a quote from ${company.name}. Call ${company.phoneDisplay} or visit us at Kirikiri Waterside, Apapa, Lagos.`} />
      <PageHero
        title="Contact Us"
        eyebrow="Let's talk"
        intro="For vessel scrapping, marine cutting, wreckage-removal support, jetty enquiries, heavy-equipment coordination, water supply or general contracting, contact our team to discuss your requirements."
        image="barge-waterfront"
        imageAlt="Barge at the Kirikiri waterfront"
      />

      <section aria-label="Contact details" className="relative z-10 -mt-10">
        <ul className="container-x grid gap-5 md:grid-cols-3">
          {contactCards.map((c, i) => (
            <Reveal as="li" key={c.label} delay={i * 0.08} className="min-w-0">
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group relative flex h-full gap-5 border border-navy/10 bg-white p-7 shadow-[0_20px_40px_-25px_rgb(11_34_57/0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-teal"
              >
                <span aria-hidden="true" className="absolute top-0 left-0 h-0.5 w-12 bg-amber transition-all duration-300 group-hover:w-full" />
                <span className="grid size-12 shrink-0 place-items-center bg-navy text-amber transition-colors group-hover:bg-teal group-hover:text-white">
                  <c.icon aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="eyebrow block text-teal">{c.label}</span>
                  <span className="mt-2 block font-display text-lg font-semibold [overflow-wrap:anywhere] text-navy">{c.value}</span>
                  <span className="mt-1 block text-sm">{c.hint}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>

      <section id="quote" className="scroll-mt-20 py-24 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading number="01" eyebrow="Request a quote" title="Tell us about your project." />
            <Reveal delay={0.1} className="mt-6 space-y-6">
              <p className="text-lg leading-relaxed">
                Share as much detail as you can — scope, location and timelines — and our team will get back to you to discuss your requirements.
              </p>
              <ServiceNote />
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-8">
            <form noValidate onSubmit={onSubmit} className="relative border border-navy/10 bg-white p-6 sm:p-10">
              <span aria-hidden="true" className="absolute top-0 left-0 h-1 w-24 bg-amber" />
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="f-name">Name *</Label>
                  <Input {...field("name")} autoComplete="name" required />
                  {err("name")}
                </div>
                <div>
                  <Label htmlFor="f-company">Company</Label>
                  <Input {...field("company")} autoComplete="organization" />
                </div>
                <div>
                  <Label htmlFor="f-email">Email *</Label>
                  <Input {...field("email")} type="email" autoComplete="email" required />
                  {err("email")}
                </div>
                <div>
                  <Label htmlFor="f-phone">Phone</Label>
                  <Input {...field("phone")} type="tel" autoComplete="tel" />
                  {err("phone")}
                </div>
                <div>
                  <Label htmlFor="f-service">Service *</Label>
                  <NativeSelect {...field("service")} required>
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>{s.number} — {s.title}</option>
                    ))}
                    <option value={productEnquiryOption}>{productEnquiryOption}</option>
                  </NativeSelect>
                  {err("service")}
                </div>
                <div>
                  <Label htmlFor="f-location">Project location</Label>
                  <Input {...field("location")} placeholder="e.g. Apapa, Lagos" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="f-message">Message *</Label>
                  <Textarea {...field("message")} required placeholder="Scope, vessel or equipment details, timelines…" />
                  {err("message")}
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm">* Required fields</p>
                <Button type="submit" size="lg" disabled={submitting}>
                  {submitting ? <Loader2 aria-hidden="true" className="animate-spin" /> : <Send aria-hidden="true" />}
                  {submitting ? "Sending…" : "Send Request"}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section aria-label="Map" className="border-t border-navy/10 bg-navy">
        {import.meta.env.MODE === "artifact" ? (
          // The hosted preview can't embed other sites, so link out instead
          <a
            href={company.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-grid-dark flex h-[260px] flex-col items-center justify-center gap-3 text-white transition-colors hover:text-amber"
          >
            <MapPin aria-hidden="true" className="size-8 text-amber" />
            <span className="font-display text-xl font-semibold">{company.addressShort}</span>
            <span className="eyebrow">Open in Google Maps</span>
          </a>
        ) : (
          <iframe
            title="Map of Kirikiri Waterside, Apapa, Lagos"
            src={company.mapEmbed}
            className="block h-[420px] w-full grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </section>
    </>
  );
}
