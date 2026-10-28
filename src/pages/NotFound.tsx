import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-grid-dark flex min-h-[80vh] items-center bg-navy pt-24">
      <Seo title="Page not found" description="The page you are looking for could not be found." />
      <div className="container-x">
        <p className="eyebrow text-amber">Error 404</p>
        <h1 className="mt-4 text-5xl font-bold text-white sm:text-7xl">Page not found.</h1>
        <p className="mt-5 max-w-lg text-lg text-white/75">The page you're looking for has moved or doesn't exist.</p>
        <Link to="/" className={`${buttonVariants()} mt-10`}>Back to home</Link>
      </div>
    </section>
  );
}
