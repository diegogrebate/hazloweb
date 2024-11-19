"use client";

import clsx from "clsx";
import { Bell, Circle, Home, Send, SquarePlus, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 0,
    name: "Home",
    href: "/home",
    icon: Home,
  },
  {
    id: 1,
    name: "Hazlo Map",
    href: "/map",
    icon: Circle,
  },
  {
    id: 2,
    name: "Post",
    href: "/post",
    icon: SquarePlus,
  },
  {
    id: 3,
    name: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    id: 4,
    name: "Messages",
    href: "/messages",
    icon: Send,
  },
  {
    id: 5,
    name: "Profile",
    href: "/profile",
    icon: User,
  },
];

export function NavbarLinks() {
  const location = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={clsx(
            location === link.href
              ? "text-white bg-primary/10"
              : "text-slate-400 hover:text-white",
            "flex items-center gap-3 p-3 rounded-xl"
          )}
        >
          <link.icon className="size-4 mr-2" />
          {link.name}
        </Link>
      ))}
    </>
  );
}
