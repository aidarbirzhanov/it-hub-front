import Image from "next/image";
import Link from "next/link";
import { links } from "@/widgets/header/links";

export const Header = () => {
  return (
      <header className="container mx-auto py-4 flex items-center justify-between">
        <a href="/" className="flex flex-col items-center w-[88px] h-[88px] overflow-hidden">
          <Image
              src="/logo.svg"
              alt="Kulan IT HUB"
              width={50}
              height={50}
              className="object-contain mb-1"
          />
          <span className="text-sm font-bold truncate">
            Kulan IT HUB
          </span>
        </a>

        <nav className="flex gap-6">
          {links.map(link => (
              <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                {link.title}
              </Link>
          ))}
        </nav>

      </header>
  );
}
