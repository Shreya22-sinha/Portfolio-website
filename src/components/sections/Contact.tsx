import { contact } from "@/content/content";
import { EmailContact } from "@/components/sections/EmailContact";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
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
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-5">
            <li className="col-span-2 min-w-0">
              <EmailContact />
            </li>
            {contact.links.map((link, index) => (
              <li
                key={link.label}
                className={`min-w-0 ${index === contact.links.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}
              >
                <a
                  href={link.href}
                  className="frame press flex h-full items-center justify-between gap-2 bg-paper px-4 py-4"
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
