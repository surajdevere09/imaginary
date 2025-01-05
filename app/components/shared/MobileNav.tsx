"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSwitchSessionUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt=""
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <SheetHeader>
                <SheetTitle>
                  <>
                    <Image
                      src={"/assets/images/logo-text.svg"}
                      width={152}
                      height={23}
                      alt=""
                    />
                  </>
                </SheetTitle>
                {/* <SheetDescription> */}
                <>
                  <ul className="header-nav_elements">
                    {navLinks.map((link) => {
                      const isActive = link.route === pathname;

                      return (
                        <li
                          key={link.route}
                          className={`${
                            isActive && "gradient-text"
                          }  text-gray-700 whitespace-nowrap p-18
                          `}
                        >
                          <Link
                            className="sidebar-link cursor-pointer"
                            href={link.route}
                          >
                            <Image
                              alt="logo"
                              width={24}
                              height={24}
                              src={link.icon}
                            />
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
                {/* </SheetDescription> */}
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
