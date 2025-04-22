import Image from "next/image";
import {LogoAnimated} from "@/shared/ui/logo-animated";

export const Header = () => {
  return (
      <header className="container mx-auto py-4">
        <a href="/" className="flex flex-col items-center w-[88px] h-[88px] overflow-hidden">
          <LogoAnimated />
          <span className="text-sm font-bold truncate">
            Kulan IT HUB
          </span>
        </a>
      </header>
  );
}
