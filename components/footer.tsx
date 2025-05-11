import Link from "next/link"
import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            {/* <h3 className="mb-4 text-xl font-bold">Aeroverse-webdev</h3> */}
             <img src={"/assets/aeroverse-logo.png"} alt="Logo" className="h-10 w-15" />
             
            <p className="mb-6 text-slate-300">
              Transforming ideas into digital reality with cutting-edge software development services.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook className="h-5 w-5" />} href="#" />
              <SocialIcon icon={<Twitter className="h-5 w-5" />} href="#" />
              <SocialIcon icon={<Instagram className="h-5 w-5" />} href="#" />
              <SocialIcon icon={<Linkedin className="h-5 w-5" />} href="#" />
              <SocialIcon icon={<Github className="h-5 w-5" />} href="#" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-slate-300">
              <FooterLink href="/services/web-development">Web Development</FooterLink>
              <FooterLink href="/services/mobile-development">Mobile Development</FooterLink>
              <FooterLink href="/services/backend-development">Backend Development</FooterLink>
              <FooterLink href="/services/ui-ux-design">UI/UX Design</FooterLink>
              <FooterLink href="/services/custom-software">Custom Software</FooterLink>
              <FooterLink href="/services/devops">DevOps Services</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-slate-300">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/projects">Our Work</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-blue-400" />
                <span>10/12 ahmadu bello way victoria Lagos</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-blue-400" />
                <span>+2348146704074</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-blue-400" />
                <span>info@Aeroverse.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Aerodevsolution. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-blue-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

type SocialIconProps = {
  icon: React.ReactNode
  href: string
}

function SocialIcon({ icon, href }: SocialIconProps) {
  return (
    <a
      href={href}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-blue-600 hover:text-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} className="hover:text-blue-400">
        {children}
      </Link>
    </li>
  )
}
