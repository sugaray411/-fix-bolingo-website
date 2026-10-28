import { company } from "@/data/site";

/** React 19 hoists <title>/<meta> rendered anywhere into <head>. */
export function Seo({ title, description }: { title: string; description: string }) {
  const full = `${title} | ${company.name}`;
  return (
    <>
      <title>{full}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
