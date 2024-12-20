"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Home,
  Clock,
  Bookmark,
  Briefcase,
  Users,
  ShoppingBag,
  Brain,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface SidebarProps {
  onAgentSkillClick: () => void;
}

const sidebarItems = [
  {
    title: "Home",
    icon: Home,
    href: "/",
    color: "text-slate-500",
  },
  {
    title: "Recent",
    icon: Clock,
    href: "/recent",
    color: "text-slate-500",
  },
  {
    title: "Pinned",
    icon: Bookmark,
    href: "/pinned",
    color: "text-slate-500",
  },
  {
    title: "My Work",
    icon: Briefcase,
    href: "/my-work",
    color: "text-slate-500",
    children: [
      {
        title: "Sales accelerator",
        href: "/sales-accelerator",
      },
      {
        title: "Dashboards",
        href: "/dashboards",
      },
      {
        title: "Activities",
        href: "/activities",
      },
    ],
  },
  {
    title: "Customers",
    icon: Users,
    href: "/customers",
    color: "text-slate-500",
    children: [
      {
        title: "Accounts",
        href: "/accounts",
      },
      {
        title: "Contacts",
        href: "/contacts",
      },
    ],
  },
  {
    title: "Sales",
    icon: ShoppingBag,
    href: "/sales",
    color: "text-slate-500",
    children: [
      {
        title: "Leads",
        href: "/leads",
      },
      {
        title: "Opportunities",
        href: "/opportunities",
      },
    ],
  },
  {
    title: "Agent Skill",
    icon: Brain,
    href: "/agent-skill",
    color: "text-blue-500",
  },
];

function SidebarContent({
  onAgentSkillClick,
}: {
  onAgentSkillClick: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className="w-full h-full bg-white flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-slate-800">Dynamics 365</h2>
      </div>
      <nav className="flex-1 overflow-y-auto p-2">
        {sidebarItems.map((item) => (
          <div key={item.title} className="mb-2">
            {item.title === "Agent Skill" ? (
              <button
                onClick={onAgentSkillClick}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-left",
                  "hover:bg-slate-50 text-slate-600"
                )}
              >
                <item.icon className={cn("h-5 w-5", item.color)} />
                <span>{item.title}</span>
              </button>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  pathname === item.href
                    ? "bg-slate-100 text-slate-900"
                    : "hover:bg-slate-50 text-slate-600"
                )}
              >
                <item.icon className={cn("h-5 w-5", item.color)} />
                <span>{item.title}</span>
              </Link>
            )}
            {item.children && (
              <div className="ml-9 mt-2 space-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.title}
                    href={child.href}
                    className={cn(
                      "block px-3 py-2 rounded-md text-sm transition-colors",
                      pathname === child.href
                        ? "bg-slate-100 text-slate-900"
                        : "hover:bg-slate-50 text-slate-600"
                    )}
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

export function Sidebar({ onAgentSkillClick }: SidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72">
          <SidebarContent onAgentSkillClick={onAgentSkillClick} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 border-r h-screen">
        <SidebarContent onAgentSkillClick={onAgentSkillClick} />
      </div>
    </>
  );
}
