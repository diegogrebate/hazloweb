import { Navbar } from "@/components/app/Navbar";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: ProfileLayoutProps) {
  return <Navbar>{children}</Navbar>;
}
