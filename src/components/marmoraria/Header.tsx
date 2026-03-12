import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Marmoraria Guardião" className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <span className="block text-sm font-bold tracking-wide text-primary-foreground">MARMORARIA</span>
            <span className="block text-xs font-semibold tracking-widest text-primary-foreground/70">GUARDIÃO</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-primary-foreground md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-primary-foreground/10 bg-foreground px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-md bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Orçamento
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
