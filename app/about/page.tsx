import Image from "next/image"
import { Award, CheckCircle, Users } from "lucide-react"

import { FadeIn } from "@/components/animations/fade-in"
import { ScrollFade } from "@/components/animations/scroll-fade"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { HoverCard } from "@/components/animations/hover-card"
import { Slider } from "@/components/animations/slider"
import { MultiItemSlider } from "@/components/animations/multi-item-slider"

export const metadata = {
  title: "About Us | DevSolutions",
  description: "Learn about our company, our mission, and the team behind DevSolutions.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">About DevSolutions</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-300">
                We're a team of passionate developers, designers, and strategists dedicated to creating exceptional
                software solutions.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <ScrollFade>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
                <p className="text-slate-600">
                  Founded in 2015, DevSolutions began with a simple mission: to help businesses succeed through
                  innovative technology solutions.
                </p>
              </div>
            </ScrollFade>
            <div className="grid gap-8 md:grid-cols-2">
              <ScrollFade>
                <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Our team working together"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollFade>
              <ScrollFade delay={0.2}>
                <div className="flex flex-col justify-center">
                  <p className="mb-4 text-slate-700">
                    What started as a small team of three developers has grown into a full-service software development
                    company with over 50 professionals across design, development, and project management.
                  </p>
                  <p className="text-slate-700">
                    Over the years, we've helped hundreds of clients—from startups to Fortune 500 companies—transform
                    their ideas into powerful digital solutions that drive growth and innovation.
                  </p>
                </div>
              </ScrollFade>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <ScrollFade>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold">Our Mission & Values</h2>
                <p className="text-slate-600">
                  We're guided by a set of core principles that define how we work and what we stand for.
                </p>
              </div>
            </ScrollFade>
            <div className="mb-16 grid gap-8 md:grid-cols-2">
              <ScrollFade>
                <HoverCard className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold">Our Mission</h3>
                  <p className="text-slate-700">
                    To empower businesses through innovative software solutions that solve real problems, enhance user
                    experiences, and drive sustainable growth.
                  </p>
                </HoverCard>
              </ScrollFade>
              <ScrollFade delay={0.2}>
                <HoverCard className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold">Our Vision</h3>
                  <p className="text-slate-700">
                    To be the most trusted technology partner for businesses seeking to thrive in the digital era, known
                    for our expertise, integrity, and client-centered approach.
                  </p>
                </HoverCard>
              </ScrollFade>
            </div>
            <StaggerChildren className="grid gap-6 md:grid-cols-3">
              <HoverCard>
                <ValueCard
                  icon={<CheckCircle className="h-8 w-8 text-blue-500" />}
                  title="Excellence"
                  description="We're committed to delivering the highest quality in everything we do."
                />
              </HoverCard>
              <HoverCard>
                <ValueCard
                  icon={<Users className="h-8 w-8 text-blue-500" />}
                  title="Collaboration"
                  description="We believe in the power of teamwork and partnership with our clients."
                />
              </HoverCard>
              <HoverCard>
                <ValueCard
                  icon={<Award className="h-8 w-8 text-blue-500" />}
                  title="Innovation"
                  description="We constantly explore new technologies and approaches to solve complex problems."
                />
              </HoverCard>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Client Testimonials</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                Here's what our clients have to say about their experience working with us.
              </p>
            </div>
          </ScrollFade>

          <ScrollFade delay={0.2}>
            <Slider className="mx-auto h-[300px] max-w-3xl">
              <TestimonialCard
                quote="DevSolutions transformed our outdated systems into a streamlined digital solution that has revolutionized how we operate. Their team was professional, knowledgeable, and a pleasure to work with."
                author="Jennifer Adams"
                position="CTO, Retail Innovations"
                imageUrl="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="Working with DevSolutions was a game-changer for our startup. They understood our vision and delivered a product that exceeded our expectations, all while staying within our budget constraints."
                author="Marcus Johnson"
                position="Founder, TechStart"
                imageUrl="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="The team at DevSolutions doesn't just write code – they solve business problems. Their strategic approach and technical expertise helped us create a solution that truly addresses our customers' needs."
                author="Sophia Chen"
                position="Product Manager, Enterprise Solutions"
                imageUrl="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="We've worked with several development agencies in the past, but none have matched the level of quality and dedication that DevSolutions provides. They're now our exclusive technology partner."
                author="Robert Williams"
                position="CEO, Digital Ventures"
                imageUrl="/placeholder.svg?height=100&width=100"
              />
            </Slider>
          </ScrollFade>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Meet Our Team</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                Our diverse team of experts brings together a wealth of experience and passion for technology.
              </p>
            </div>
          </ScrollFade>

          <ScrollFade delay={0.2}>
            <MultiItemSlider itemsPerView={4} className="mb-12" autoSlideInterval={6000}>
              <TeamMember name="Alex Johnson" role="Founder & CEO" image="/placeholder.svg?height=300&width=300" />
              <TeamMember name="Maria Rodriguez" role="CTO" image="/placeholder.svg?height=300&width=300" />
              <TeamMember name="David Chen" role="Lead Developer" image="/placeholder.svg?height=300&width=300" />
              <TeamMember name="Sarah Kim" role="UX/UI Designer" image="/placeholder.svg?height=300&width=300" />
              <TeamMember name="James Wilson" role="Project Manager" image="/placeholder.svg?height=300&width=300" />
              <TeamMember name="Priya Patel" role="Mobile Developer" image="/placeholder.svg?height=300&width=300" />
              <TeamMember name="Michael Brown" role="Backend Engineer" image="/placeholder.svg?height=300&width=300" />
              <TeamMember name="Emma Garcia" role="QA Specialist" image="/placeholder.svg?height=300&width=300" />
            </MultiItemSlider>
          </ScrollFade>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ icon, title, description }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}

function TeamMember({ name, role, image }) {
  return (
    <div className="group h-full overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-slate-600">{role}</p>
      </div>
    </div>
  )
}

function TestimonialCard({ quote, author, position, imageUrl }) {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 text-yellow-500">{"★".repeat(5)}</div>
      <p className="mb-8 text-center text-lg italic text-slate-700">"{quote}"</p>
      <div className="flex items-center">
        <div className="mr-4 h-16 w-16 overflow-hidden rounded-full">
          <img src={imageUrl || "/placeholder.svg"} alt={author} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-slate-500">{position}</p>
        </div>
      </div>
    </div>
  )
}
