"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="flex items-center">
            {/* <span className="text-xl font-bold text-blue-600">Aeroverse webdev</span> */}
             <img src={"/assets/aeroverse-logo.png"} alt="Logo" className="h-10 w-15" />
              <span>Aeroverse DEV</span>
          </Link>
        </motion.div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 top-full w-full bg-white p-4 shadow-md"
              >
                <nav className="flex flex-col space-y-4">
                  <NavLink href="/" onClick={toggleMenu}>
                    Home
                  </NavLink>
                  <NavLink href="/about" onClick={toggleMenu}>
                    About
                  </NavLink>
                  <NavLink href="/services" onClick={toggleMenu}>
                    Services
                  </NavLink>
                  <NavLink href="/projects" onClick={toggleMenu}>
                    Projects
                  </NavLink>
                  <NavLink href="/blog" onClick={toggleMenu}>
                    Blog
                  </NavLink>
                  <NavLink href="/contact" onClick={toggleMenu}>
                    Contact
                  </NavLink>
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={toggleMenu}>
                      Get a Quote
                    </Link>
                  </Button>
                </nav>
              </motion.div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-8"
          >
            <nav className="flex items-center space-x-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </header>
  )
}

import { ReactNode, MouseEvent } from "react";
import { UrlObject } from "url";

type NavLinkProps = {
  href: string | UrlObject;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

function NavLink({ href, children, onClick = () => {} }: NavLinkProps) {
  return (
    <Link href={href} className="text-slate-700 transition-colors hover:text-blue-600" onClick={onClick}>
      {children}
    </Link>
  )
}
