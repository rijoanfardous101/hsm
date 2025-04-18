"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import {
  BookOpen,
  Bookmark,
  Newspaper,
  Mail,
  PenSquare,
  Mic,
  Info,
  Eye,
  Activity,
  HelpCircle,
  Handshake,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { MdPeople } from "react-icons/md";

export function NavbarDemo() {
  const pathname = usePathname();

  const routeStyles: Record<string, { bg: string; text: string }> = {
    "/": { bg: "bg-[#2D8CBB]", text: "text-white" },
    "/about/about-hsm": { bg: "bg-[#2D8CBB]", text: "text-white" },
    "/about/vision-and-mission": { bg: "bg-[#2D8CBB]", text: "text-white" },
    "/about/activities-and-approach": {
      bg: "bg-[#2D8CBB]",
      text: "text-white",
    },
    "/about/why-health-systems-matter": {
      bg: "bg-[#2D8CBB]",
      text: "text-white",
    },
    "/resources-and-bookmarks": { bg: "bg-[#2D8CBB]", text: "text-white" },
    "/resources": { bg: "bg-[#2D8CBB]", text: "text-white" },
    "/resources/overview": { bg: "bg-[#2D8CBB]", text: "text-white" },
    "/contact": { bg: "bg-[#2D8CBB]", text: "text-white" },
    "/dashboard": { bg: "bg-[#2D8CBB]", text: "text-white" },
    "/resources/essential-reading-list": {
      bg: "bg-[#2D8CBB]",
      text: "text-white",
    },
  };

  const { bg, text } = routeStyles[pathname] || {
    bg: "bg-[#2D8CBB]",
    text: "text-white",
  };

  return (
    <div className={`w-full ${bg} flex items-center justify-center`}>
      <Navbar className={`${text}`} />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();

  const isActiveLink = (href: string) => pathname === href;

  return (
    <div
      className={cn(
        "inset-x-0 mx-auto z-50 w-full border-t-2 border-[#FFCE00]",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link
          href="/"
          className={cn(
            "px-3 py-2",
            className,
            isActiveLink("/") && "border-b-2 border-yellow-400"
          )}
        >
          <AiFillHome className="text-base" />
        </Link>

        <MenuItem
          setActive={setActive}
          active={active}
          item="ABOUT"
          href="/about"
          className={cn(
            className,
            pathname.startsWith("/about") && "border-b-2 border-yellow-400"
          )}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink
              href="/about/about-hsm"
              active={isActiveLink("/about/about-hsm")}
            >
              <Info className="w-4 h-4" /> About HSM
            </HoveredLink>
            <HoveredLink
              href="/about/vision-and-mission"
              active={isActiveLink("/about/vision-and-mission")}
            >
              <Eye className="w-4 h-4" /> Vision & Mission
            </HoveredLink>
            <HoveredLink
              href="/about/activities-and-approach"
              active={isActiveLink("/about/activities-and-approach")}
            >
              <Activity className="w-4 h-4" /> Activities & Approach
            </HoveredLink>
            <HoveredLink
              href="/about/why-health-systems-matter"
              active={isActiveLink("/about/why-health-systems-matter")}
            >
              <HelpCircle className="w-4 h-4" /> Why HSM
            </HoveredLink>
          </div>
        </MenuItem>

        <MenuItem
          setActive={setActive}
          active={active}
          item="RESOURCES & BOOKMARKS"
          href="/resources-and-bookmarks"
          className={cn(
            className,
            pathname.startsWith("/resources") ||
              pathname.startsWith("/bookmarks")
              ? "border-b-2 border-yellow-400"
              : ""
          )}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/resources" active={isActiveLink("/resources")}>
              <BookOpen className="w-4 h-4" /> RESOURCES
            </HoveredLink>
            <HoveredLink href="/bookmarks" active={isActiveLink("/bookmarks")}>
              <Bookmark className="w-4 h-4" /> BOOKMARKS
            </HoveredLink>
          </div>
        </MenuItem>

        <MenuItem
          setActive={setActive}
          active={active}
          item="NEWS & NEWSLETTER"
          href="/news-and-newsletter"
          className={cn(
            className,
            (pathname.startsWith("/news") ||
              pathname.startsWith("/newsletter")) &&
              "border-b-2 border-yellow-400"
          )}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/news" active={isActiveLink("/news")}>
              <Newspaper className="w-4 h-4" /> NEWS
            </HoveredLink>
            <HoveredLink
              href="/newsletter"
              active={isActiveLink("/newsletter")}
            >
              <Mail className="w-4 h-4" /> NEWSLETTER
            </HoveredLink>
          </div>
        </MenuItem>

        <MenuItem
          setActive={setActive}
          active={active}
          href="/blog-and-interview"
          item="INTERVIEW & BLOG"
          className={cn(
            className,
            (pathname.startsWith("/blog") ||
              pathname.startsWith("/interview")) &&
              "border-b-2 border-yellow-400"
          )}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/interview" active={isActiveLink("/interview")}>
              <Mic className="w-4 h-4" /> INTERVIEW
            </HoveredLink>
            <HoveredLink href="/blog" active={isActiveLink("/blog")}>
              <PenSquare className="w-4 h-4" /> BLOG
            </HoveredLink>
          </div>
        </MenuItem>

        <Link
          href="/youtube"
          className={cn(
            "px-3 py-2 text-sm font-bold",
            className,
            isActiveLink("/youtube") && "border-b-2 border-yellow-400"
          )}
        >
          YOUTUBE
        </Link>

        <MenuItem
          setActive={setActive}
          active={active}
          href="/contact"
          item="CONTACT"
          className={cn(
            className,
            pathname.startsWith("/contact") && "border-b-2 border-yellow-400"
          )}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink
              href="/contact/stay-connected"
              active={isActiveLink("/")}
            >
              <Handshake className="w-4 h-4" /> STAY CONNECTED
            </HoveredLink>
            <HoveredLink
              href="/contact/support-and-collaborate"
              active={isActiveLink("/")}
            >
              <MdPeople className="w-4 h-4" /> SUPPORT AND COLLABORATE
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
