import { footer } from "@/content/content";

export function Footer() {
  return (
    <footer className="footer-rule bg-paper">
      <div className="section-inner flex flex-col gap-2 px-5 py-8 md:flex-row md:items-end md:justify-between md:px-8">
        <p className="font-display text-lg leading-none">
          {footer.name}
        </p>
        <p className="prose-body text-sm">
          <span className="eyebrow mr-3">{footer.year}</span>
          {footer.line}
        </p>
      </div>
    </footer>
  );
}
