import Link from "next/link"
import { ArrowRight, Code, Database, Globe, Layers, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { ScrollFade } from "@/components/animations/scroll-fade"
import { Slider } from "@/components/animations/slider"
import { MultiItemSlider } from "@/components/animations/multi-item-slider"
import { ParallaxSlider } from "@/components/animations/parallax-slider"
import { AnimatedServiceCard } from "@/components/animations/animated-service-card"
import { ServiceGrid } from "@/components/animations/service-grid"
import { FloatingIcon } from "@/components/animations/floating-icon"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20 text-white md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                Transforming Ideas Into <span className="text-blue-400">Digital Reality</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mb-8 text-lg text-slate-300 md:text-xl">
                We build innovative software solutions that drive business growth and enhance user experiences.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 cursor-pointer">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button  size="lg" className="border-white text-blue hover:bg-white/10 cursor-pointer">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1600')", backgroundSize: "cover" }}
        ></div>
      </section>

      {/* Hero Slider Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Expertise</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                We deliver cutting-edge solutions across various domains and technologies.
              </p>
            </div>
          </ScrollFade>

          <ScrollFade delay={0.2}>
            <ParallaxSlider
              images={[
                "/assets/webdev.jpg",
                "/assets/mobile.jpg",
                "/assets/custom.jpg",
                "/assets/cloudsoln.jpg",
                 "/assets/cloud.jpg",
              ]}
              titles={["Web Development", "Mobile Applications", "Custom Software", "Cloud Solutions"]}
              className="mx-auto h-[500px] max-w-6xl"
            />
          </ScrollFade>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                We offer a comprehensive range of software development services tailored to meet your business needs.
              </p>
            </div>
          </ScrollFade>

          <ServiceGrid>
            <AnimatedServiceCard
              icon={
                <FloatingIcon>
                  <Globe className="h-10 w-10 text-blue-500" />
                </FloatingIcon>
              }
              title="Web Development"
              description="Custom websites and web applications built with cutting-edge technologies."
              delay={0.1}
            />
            <AnimatedServiceCard
              icon={
                <FloatingIcon>
                  <Smartphone className="h-10 w-10 text-blue-500" />
                </FloatingIcon>
              }
              title="Mobile Development"
              description="Native and cross-platform mobile apps for iOS and Android devices."
              delay={0.2}
            />
            <AnimatedServiceCard
              icon={
                <FloatingIcon>
                  <Database className="h-10 w-10 text-blue-500" />
                </FloatingIcon>
              }
              title="Backend Development"
              description="Scalable and secure server-side solutions and database architecture."
              delay={0.3}
            />
            <AnimatedServiceCard
              icon={
                <FloatingIcon>
                  <Layers className="h-10 w-10 text-blue-500" />
                </FloatingIcon>
              }
              title="UI/UX Design"
              description="User-centered design that enhances usability and visual appeal."
              delay={0.4}
            />
            <AnimatedServiceCard
              icon={
                <FloatingIcon>
                  <Code className="h-10 w-10 text-blue-500" />
                </FloatingIcon>
              }
              title="Custom Software"
              description="Bespoke software solutions tailored to your specific business requirements."
              delay={0.5}
            />
            <AnimatedServiceCard
              icon={
                <FloatingIcon>
                  <ArrowRight className="h-10 w-10 text-blue-500" />
                </FloatingIcon>
              }
              title="DevOps Services"
              description="Streamlined development operations and continuous integration/deployment."
              delay={0.6}
            />
          </ServiceGrid>

          <ScrollFade delay={0.3}>
            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Projects</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                Take a look at some of our recent work that showcases our expertise and capabilities.
              </p>
            </div>
          </ScrollFade>



          <ScrollFade >
            <MultiItemSlider itemsPerView={3} className="mb-12 h-[400px] border-b-indigo-700" >
              <ProjectCard
                title="Tech Gadgets-platform"
                category="Modern, responsive ecommerce web application designed for discovering, comparing, and purchasing the latest technology gadgets—including smartphones, smartwatches, laptops, audio devices, accessories, and more."
                imageUrl="/assets/banitech.png"
              />
              <ProjectCard
                title="Food ordering platform"
                category="A food delivery eCommerce web app is a digital platform that allows users to browse nearby restaurants or vendors, select food items, place orders, and have them delivered to their doorstep in real-time."
                imageUrl="/assets/glovo.png"
              />
              <ProjectCard
                title="smatpay Web App"
                category="A VTU (Virtual Top-Up) web app is an online platform that allows users to buy airtime, data bundles, pay electricity and TV bills, and fund wallets."
                imageUrl="/assets/smatpay-web.png"
              />
              <ProjectCard
                title="Aeroverse Laundry-platform"
                category="A simple laundry web app is an online platform that allows users to schedule laundry pickup and delivery, select laundry services (e.g., wash & fold, dry cleaning, ironing), and make payments — all through a clean and user-friendly interface"
                imageUrl="/assets/aeroverse.png"
              />
              <ProjectCard
                title="smatpay-waitlist"
                category="A waitlist web app is a platform that lets users sign up early for a product or service launch, often showing their position in line and encouraging referrals to move up the list."
                imageUrl="/assets/waitlist.png"
              />
              <ProjectCard
                title="smatpay-vtu-dashboard"
                category="A real-time monitoring system for industrial IoT devices with alerts, data visualization, and predictive maintenance."
                imageUrl="/assets/dashboard.png"
              />
            </MultiItemSlider>
          </ScrollFade>

          <ScrollFade delay={0.3}>
            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </ScrollFade>
        </div>
      </section> 
 



      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                Don't just take our word for it. Here's what our clients have to say about our work.
              </p>
            </div>
          </ScrollFade>

          <ScrollFade delay={0.2}>
            <Slider className="mx-auto h-[300px] max-w-3xl">
              <TestimonialCard
                quote="Their team delivered our project on time and exceeded our expectations. The attention to detail and commitment to quality was impressive. Highly recommended!"
                author="Sarah Johnson"
                company="TechCorp CEO"
                imageUrl="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="The software solution they built has transformed our business operations and increased efficiency by 40%. Their technical expertise and understanding of our business needs made all the difference."
                author="Michael Chen"
                company="Innovate Solutions"
                imageUrl="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="Professional, responsive, and incredibly skilled. They're now our go-to development partner for all our digital projects. Working with them has been a game-changer for our company."
                author="Emily Rodriguez"
                company="StartUp Ventures"
                imageUrl="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="We approached them with a complex problem, and they delivered a solution that was both elegant and effective. Their ability to translate our vision into reality was remarkable."
                author="David Wilson"
                company="Global Enterprises"
                imageUrl="/placeholder.svg?height=100&width=100"
              />
            </Slider>
          </ScrollFade>
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

type TestimonialCardProps = {
  quote: string
  author: string
  company: string
  imageUrl?: string
}

function TestimonialCard({ quote, author, company, imageUrl }: TestimonialCardProps) {
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
          <p className="text-sm text-slate-500">{company}</p>
        </div>
      </div>
    </div>
  )
}

type ProjectCardProps = {
  title: string
  category: string
  imageUrl?: string
}

function ProjectCard({ title, category, imageUrl }: ProjectCardProps) {
  return (
    <div className="group h-full overflow-hidden rounded-lg bg-white shadow-2xl transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden ">
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
