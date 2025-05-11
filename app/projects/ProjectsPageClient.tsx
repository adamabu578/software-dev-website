"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { ScrollFade } from "@/components/animations/scroll-fade"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { HoverCard } from "@/components/animations/hover-card"

export default function ProjectsPageClient() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Projects</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-300">
                Explore our portfolio of successful projects that have helped businesses transform and grow.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold">Featured Projects</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                Here are some of our most impactful projects that showcase our expertise and capabilities.
              </p>
            </div>
          </ScrollFade>

          <div className="grid gap-12">
            <FeaturedProject
              title="E-Commerce Platform Redesign"
              description="A complete redesign and development of an e-commerce platform for a leading retail brand, resulting in a 40% increase in conversion rates and improved user experience."
              tags={["E-Commerce", "UI/UX Design", "Web Development", "Payment Integration"]}
              imageUrl="/placeholder.svg?height=600&width=1200"
              reverse={false}
            />

            <FeaturedProject
              title="Healthcare Management System"
              description="A comprehensive healthcare management system that streamlines patient records, appointment scheduling, and billing processes for a network of medical clinics."
              tags={["Healthcare", "Custom Software", "Database Design", "Security"]}
              imageUrl="/placeholder.svg?height=600&width=1200"
              reverse={true}
            />

            <FeaturedProject
              title="Mobile Banking Application"
              description="A secure and user-friendly mobile banking application that allows customers to manage their accounts, make payments, and access financial services on the go."
              tags={["Fintech", "Mobile Development", "Security", "API Integration"]}
              imageUrl="/placeholder.svg?height=600&width=1200"
              reverse={false}
            />
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold">More Projects</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                Browse through our diverse portfolio of successful projects across various industries.
              </p>
            </div>
          </ScrollFade>

          <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <HoverCard>
              <ProjectCard
                title="Inventory Management System"
                category="Enterprise Software"
                imageUrl="/placeholder.svg?height=400&width=600"
              />
            </HoverCard>
            <HoverCard>
              <ProjectCard
                title="Real Estate Marketplace"
                category="Web Application"
                imageUrl="/placeholder.svg?height=400&width=600"
              />
            </HoverCard>
            <HoverCard>
              <ProjectCard
                title="Fitness Tracking App"
                category="Mobile Application"
                imageUrl="/placeholder.svg?height=400&width=600"
              />
            </HoverCard>
            <HoverCard>
              <ProjectCard
                title="Restaurant Ordering System"
                category="Custom Software"
                imageUrl="/placeholder.svg?height=400&width=600"
              />
            </HoverCard>
            <HoverCard>
              <ProjectCard
                title="Travel Booking Platform"
                category="Web Application"
                imageUrl="/placeholder.svg?height=400&width=600"
              />
            </HoverCard>
            <HoverCard>
              <ProjectCard
                title="Educational Learning Portal"
                category="E-Learning"
                imageUrl="/placeholder.svg?height=400&width=600"
              />
            </HoverCard>
          </StaggerChildren>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold">Industries We Serve</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                We have experience working with clients across a wide range of industries, delivering tailored solutions
                to meet their specific needs.
              </p>
            </div>
          </ScrollFade>

          <StaggerChildren className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <HoverCard>
              <IndustryCard name="Healthcare" />
            </HoverCard>
            <HoverCard>
              <IndustryCard name="Finance" />
            </HoverCard>
            <HoverCard>
              <IndustryCard name="E-Commerce" />
            </HoverCard>
            <HoverCard>
              <IndustryCard name="Education" />
            </HoverCard>
            <HoverCard>
              <IndustryCard name="Real Estate" />
            </HoverCard>
            <HoverCard>
              <IndustryCard name="Manufacturing" />
            </HoverCard>
            <HoverCard>
              <IndustryCard name="Hospitality" />
            </HoverCard>
            <HoverCard>
              <IndustryCard name="Transportation" />
            </HoverCard>
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Start Your Project?</h2>
              <p className="mb-8 text-lg text-blue-100">
                Let's discuss how we can help bring your ideas to life with our expert software development services.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

function FeaturedProject({ title, description, tags, imageUrl, reverse }) {
  return (
    <ScrollFade>
      <div className={`grid gap-8 md:grid-cols-2 ${reverse ? "md:flex-row-reverse" : ""}`}>
        <div className={`flex flex-col justify-center ${reverse ? "md:order-2" : ""}`}>
          <h3 className="mb-4 text-2xl font-bold">{title}</h3>
          <p className="mb-6 text-slate-600">{description}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(219, 234, 254, 1)" }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <Button asChild variant="outline" className="w-fit">
            <Link href="#" className="flex items-center gap-2">
              View Case Study <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <motion.div
          className={`relative h-[300px] overflow-hidden rounded-lg md:h-[400px] ${reverse ? "md:order-1" : ""}`}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img src={imageUrl || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
        </motion.div>
      </div>
    </ScrollFade>
  )
}

function ProjectCard({ title, category, imageUrl }) {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 text-sm text-blue-600">{category}</div>
        <h3 className="mb-4 text-xl font-semibold">{title}</h3>
        <Link href="#" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600">
          View Project <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

function IndustryCard({ name }) {
  return (
    <div className="flex h-32 items-center justify-center rounded-lg bg-white p-6 text-center shadow-sm transition-all hover:shadow-md hover:ring-1 hover:ring-blue-200">
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  )
}
