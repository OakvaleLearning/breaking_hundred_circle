import Link from "next/link";
import { Brand } from "./Brand";
import { nav, site } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <Reveal>
            <Brand />
            <p className="small" style={{ marginTop: 18 }}>{site.tagline}</p>
          </Reveal>
          <RevealGroup as="nav" className="footer-nav" step={0.07}>
            {nav.slice(1).map((item) => (
              <RevealItem key={item.href} as="span">
                <Link href={item.href}>{item.label}</Link>
              </RevealItem>
            ))}
            <RevealItem as="span">
              <a href={`mailto:${site.email}`}>Contact us</a>
            </RevealItem>
          </RevealGroup>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Breaking Hundred Circle CIC</span>
          <span>
            <a href={site.privacy}>Privacy policy</a> · <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
