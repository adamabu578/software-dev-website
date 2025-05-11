"use client"

import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { ScrollFade } from "@/components/animations/scroll-fade"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { HoverCard } from "@/components/animations/hover-card"

export default function BlogClientPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Blog</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-300">
                Stay updated with the latest insights, trends, and news in software development.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="mb-16">
              <h2 className="mb-4 text-3xl font-bold">Featured Posts</h2>
              <p className="text-slate-600">
                Our most popular and informative articles on software development and technology.
              </p>
            </div>
          </ScrollFade>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollFade>
              <HoverCard>
                <FeaturedPost
                  title="The Future of Web Development: Trends to Watch in 2025"
                  excerpt="Explore the emerging technologies and methodologies that are shaping the future of web development, from AI-driven development to WebAssembly and beyond."
                  date="May 5, 2025"
                  imageUrl="/placeholder.svg?height=400&width=800"
                  slug="future-web-development-trends-2025"
                />
              </HoverCard>
            </ScrollFade>
            <ScrollFade delay={0.2}>
              <HoverCard>
                <FeaturedPost
                  title="Building Scalable Microservices Architecture: A Comprehensive Guide"
                  excerpt="Learn how to design, implement, and maintain a scalable microservices architecture that can grow with your business needs and handle increasing loads."
                  date="April 28, 2025"
                  imageUrl="/placeholder.svg?height=400&width=800"
                  slug="building-scalable-microservices-architecture"
                />
              </HoverCard>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="mb-16">
              <h2 className="mb-4 text-3xl font-bold">Latest Articles</h2>
              <p className="text-slate-600">
                Stay up-to-date with our newest content on software development, design, and technology.
              </p>
            </div>
          </ScrollFade>

          <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <HoverCard>
              <BlogPost
                title="10 Essential React Hooks Every Developer Should Know"
                excerpt="Improve your React development skills with these essential hooks that will make your code cleaner, more efficient, and easier to maintain."
                date="May 2, 2025"
                category="Frontend Development"
                imageUrl="/placeholder.svg?height=300&width=500"
                slug="essential-react-hooks"
              />
            </HoverCard>
            <HoverCard>
              <BlogPost
                title="Optimizing Database Performance for High-Traffic Applications"
                excerpt="Learn practical strategies and techniques to optimize your database performance and ensure smooth operation even under heavy loads."
                date="April 25, 2025"
                category="Backend Development"
                imageUrl="/placeholder.svg?height=300&width=500"
                slug="optimizing-database-performance"
              />
            </HoverCard>
            <HoverCard>
              <BlogPost
                title="The Complete Guide to Mobile App Testing"
                excerpt="Discover comprehensive approaches to testing mobile applications across different devices, platforms, and user scenarios."
                date="April 20, 2025"
                category="Mobile Development"
                imageUrl="/placeholder.svg?height=300&width=500"
                slug="complete-guide-mobile-app-testing"
              />
            </HoverCard>
            <HoverCard>
              <BlogPost
                title="Implementing Authentication with Next.js and Auth.js"
                excerpt="A step-by-step guide to implementing secure authentication in your Next.js applications using Auth.js (formerly NextAuth.js)."
                date="April 15, 2025"
                category="Web Development"
                imageUrl="/placeholder.svg?height=300&width=500"
                slug="nextjs-authjs-authentication"
              />
            </HoverCard>
            <HoverCard>
              <BlogPost
                title="DevOps Best Practices for Small Teams"
                excerpt="Learn how small development teams can implement effective DevOps practices to improve collaboration, automation, and deployment processes."
                date="April 10, 2025"
                category="DevOps"
                imageUrl="/placeholder.svg?height=300&width=500"
                slug="devops-best-practices-small-teams"
              />
            </HoverCard>
            <HoverCard>
              <BlogPost
                title="Creating Accessible Web Applications: A Developer's Guide"
                excerpt="Understand the importance of web accessibility and learn practical techniques to make your applications usable by everyone."
                date="April 5, 2025"
                category="Accessibility"
                imageUrl="/placeholder.svg?height=300&width=500"
                slug="creating-accessible-web-applications"
              />
            </HoverCard>
          </StaggerChildren>

          <ScrollFade delay={0.3}>
            <div className="mt-12 text-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" size="lg">
                  <Link href="#" className="flex items-center gap-2">
                    Load More Articles <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold">Browse by Category</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                Find articles on specific topics that interest you the most.
              </p>
            </div>
          </ScrollFade>

          <StaggerChildren className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <CategoryCard name="Frontend Development" count={15} />
            <CategoryCard name="Backend Development" count={12} />
            <CategoryCard name="Mobile Development" count={9} />
            <CategoryCard name="DevOps" count={8} />
            <CategoryCard name="UI/UX Design" count={10} />
            <CategoryCard name="Artificial Intelligence" count={7} />
            <CategoryCard name="Cloud Computing" count={11} />
            <CategoryCard name="Cybersecurity" count={6} />
          </StaggerChildren>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="mb-8 text-lg text-blue-100">
                Get the latest articles, tutorials, and updates delivered straight to your inbox.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border-0 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-300 sm:flex-1"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-slate-900 hover:bg-slate-800">Subscribe</Button>
                </motion.div>
              </div>
              <p className="mt-4 text-sm text-blue-100">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

function FeaturedPost({ title, excerpt, date, imageUrl, slug }) {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center text-sm text-slate-500">
          <Calendar className="mr-2 h-4 w-4" />
          {date}
        </div>
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-slate-600">{excerpt}</p>
        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Link
            href={`/blog/${slug}`}
            className="flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700"
          >
            Read More <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

function BlogPost({ title, excerpt, date, category, imageUrl, slug }) {
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
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-blue-600">{category}</span>
          <span className="flex items-center text-slate-500">
            <Calendar className="mr-1 h-4 w-4" />
            {date}
          </span>
        </div>
        <h3 className="mb-3 text-lg font-bold">{title}</h3>
        <p className="mb-4 text-sm text-slate-600">{excerpt}</p>
        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Link
            href={`/blog/${slug}`}
            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Read More <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

function CategoryCard({ name, count }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <Link
        href={`/blog/category/${name.toLowerCase().replace(/\s+/g, "-")}`}
        className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md hover:ring-1 hover:ring-blue-200"
      >
        <span className="font-medium">{name}</span>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700">{count}</span>
      </Link>
    </motion.div>
  )
}
