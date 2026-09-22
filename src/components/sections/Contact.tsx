import { contact } from "@/content/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const links = contact.links.filter(
    (link): link is { label: string; href: string } => link.href != null,
  );
  const columns =
    links.length >= 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : links.length === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2";

  return (
    <section
      id={contact.id}
      className="band-rule bg-sage"
      aria-labelledby="contact-heading"
    >
      <div className="section">
        <div className="section-inner">
          <SectionHeading id="contact-heading" accent="clay" className="mb-4">
            {contact.heading}
          </SectionHeading>
          <p className="prose-body mb-8 text-base">{contact.body}</p>
          <ul className={`grid grid-cols-1 gap-4 ${columns}`}>
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="frame press flex items-center justify-between bg-paper px-5 py-4"
                >
                  <span className="eyebrow">{link.label}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
