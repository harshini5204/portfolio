import { profile } from "../data/content";

const socialLinks = [
  {
    link: `mailto:${profile.email}`,
    label: "Email",
  },
  {
    link: profile.linkedin,
    label: "LinkedIn",
  },
  {
    link: profile.github,
    label: "GitHub",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-page flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Built with care.</p>
        <div className="flex gap-5">
          {socialLinks.map(({ link, label }) => (
            <a
              key={label}
              href={link}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              className="hover:text-ink"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
