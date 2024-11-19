import Link from "next/link";
import { Logo } from "../shared/Logo";
import { NavbarLinks } from "./NavbarLinks";
import { LogoutButton } from "../shared/LogoutButton";
import { Button } from "../ui/Buttons";

interface NavbarProps {
  children: React.ReactNode;
}

export function Navbar({ children }: NavbarProps) {
  return (
    <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr] w-full h-full">
      <div className="flex flex-col h-full gap-10 border-r border-border/10">
        <div className="flex h-14 items-center px-4 justify-center mt-4">
          <Link href={"/home"} className="flex items-center gap-2">
            <Logo />
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 lg:px-4">
            <NavbarLinks />
          </nav>
        </div>
        <div className="flex flex-col mt-auto px-3 mb-4 gap-2">
          <div className="border-[0.5px] border-muted-foreground/10 mb-3" />
          <Link href={"/dashboard"}>
            <Button variant="outline" className="w-full ">
              Dashboard
            </Button>
          </Link>
          <LogoutButton />
        </div>
      </div>
      <main className="flex flex-1 flex-col h-screen overflow-y-auto gap-4 p-4 lg:gap-6 lg:p-6">
        {children}
      </main>
    </div>
  );
}
