import { Code, Database, Globe, Layers, Server, Smartphone } from "lucide-react"

import { FadeIn } from "@/components/animations/fade-in"
import { ScrollFade } from "@/components/animations/scroll-fade"
import { HoverCard } from "@/components/animations/hover-card"
import { TextAnimation } from "@/components/animations/text-animation"
import { CountUp } from "@/components/animations/count-up"
import { AnimatedServiceCard } from "@/components/animations/animated-service-card"
import { ServiceGrid } from "@/components/animations/service-grid"
import { FloatingIcon } from "@/components/animations/floating-icon"

export const metadata = {
  title: "Our Services | DevSolutions",
  description: "Explore our comprehensive range of software development services tailored to meet your business needs.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Services</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-300">
                We offer a comprehensive range of software development services to help your business thrive in the
                digital world.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <CountUp end={200} suffix="+" className="text-4xl font-bold text-blue-600" />
              <p className="mt-2 text-slate-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <CountUp end={50} suffix="+" className="text-4xl font-bold text-blue-600" />
              <p className="mt-2 text-slate-600">Team Members</p>
            </div>
            <div className="text-center">
              <CountUp end={98} suffix="%" className="text-4xl font-bold text-blue-600" />
              <p className="mt-2 text-slate-600">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <CountUp end={12} suffix="+" className="text-4xl font-bold text-blue-600" />
              <p className="mt-2 text-slate-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <ScrollFade>
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-bold">How We Can Help You</h2>
                <p className="text-slate-600">
                  From concept to deployment, we provide end-to-end software development services tailored to your
                  specific needs.
                </p>
              </div>
            </ScrollFade>

            <ServiceGrid className="mb-20">
              <AnimatedServiceCard
                icon={
                  <FloatingIcon>
                    <Globe className="h-12 w-12 text-blue-500" />
                  </FloatingIcon>
                }
                title="Web Development"
                description="We build responsive, high-performance websites and web applications that deliver exceptional user experiences across all devices."
                delay={0.1}
              />
              <AnimatedServiceCard
                icon={
                  <FloatingIcon>
                    <Smartphone className="h-12 w-12 text-blue-500" />
                  </FloatingIcon>
                }
                title="Mobile Development"
                description="We create native and cross-platform mobile applications that engage users and drive business growth."
                delay={0.2}
              />
              <AnimatedServiceCard
                icon={
                  <FloatingIcon>
                    <Database className="h-12 w-12 text-blue-500" />
                  </FloatingIcon>
                }
                title="Backend Development"
                description="We design and build robust, scalable backend systems that power your applications and handle complex business logic."
                delay={0.3}
              />
              <AnimatedServiceCard
                icon={
                  <FloatingIcon>
                    <Layers className="h-12 w-12 text-blue-500" />
                  </FloatingIcon>
                }
                title="UI/UX Design"
                description="We create intuitive, engaging user interfaces and experiences that delight your users and achieve your business goals."
                delay={0.4}
              />
              <AnimatedServiceCard
                icon={
                  <FloatingIcon>
                    <Code className="h-12 w-12 text-blue-500" />
                  </FloatingIcon>
                }
                title="Custom Software Development"
                description="We build bespoke software solutions tailored to your specific business requirements and challenges."
                delay={0.5}
              />
              <AnimatedServiceCard
                icon={
                  <FloatingIcon>
                    <Server className="h-12 w-12 text-blue-500" />
                  </FloatingIcon>
                }
                title="DevOps Services"
                description="We implement DevOps practices and tools to streamline your development process and improve deployment efficiency."
                delay={0.6}
              />
            </ServiceGrid>

            <div className="space-y-16">
              <ServiceDetail
                icon={<Globe className="h-12 w-12 text-blue-500" />}
                title="Web Development"
                description="We build responsive, high-performance websites and web applications that deliver exceptional user experiences across all devices."
                features={[
                  "Custom website development",
                  "Progressive Web Apps (PWAs)",
                  "E-commerce solutions",
                  "Content management systems",
                  "Web portals and dashboards",
                  "API development and integration",
                ]}
                imageUrl="/placeholder.svg?height=400&width=600"
                reverse={false}
              />

              <ServiceDetail
                icon={<Smartphone className="h-12 w-12 text-blue-500" />}
                title="Mobile Development"
                description="We create native and cross-platform mobile applications that engage users and drive business growth."
                features={[
                  "iOS app development",
                  "Android app development",
                  "Cross-platform development",
                  "Mobile UI/UX design",
                  "App maintenance and support",
                  "App store optimization",
                ]}
                imageUrl="/placeholder.svg?height=400&width=600"
                reverse={true}
              />

              <ServiceDetail
                icon={<Database className="h-12 w-12 text-blue-500" />}
                title="Backend Development"
                description="We design and build robust, scalable backend systems that power your applications and handle complex business logic."
                features={[
                  "API development",
                  "Database design and optimization",
                  "Cloud infrastructure setup",
                  "Microservices architecture",
                  "Authentication and authorization",
                  "Performance optimization",
                ]}
                imageUrl="/placeholder.svg?height=400&width=600"
                reverse={false}
              />

              <ServiceDetail
                icon={<Layers className="h-12 w-12 text-blue-500" />}
                title="UI/UX Design"
                description="We create intuitive, engaging user interfaces and experiences that delight your users and achieve your business goals."
                features={[
                  "User research and personas",
                  "Wireframing and prototyping",
                  "Visual design and branding",
                  "Interaction design",
                  "Usability testing",
                  "Design systems",
                ]}
                imageUrl="/placeholder.svg?height=400&width=600"
                reverse={true}
              />

              <ServiceDetail
                icon={<Code className="h-12 w-12 text-blue-500" />}
                title="Custom Software Development"
                description="We build bespoke software solutions tailored to your specific business requirements and challenges."
                features={[
                  "Business analysis and requirements gathering",
                  "Custom software architecture",
                  "Enterprise application development",
                  "Legacy system modernization",
                  "Software integration",
                  "Quality assurance and testing",
                ]}
                imageUrl="/placeholder.svg?height=400&width=600"
                reverse={false}
              />

              <ServiceDetail
                icon={<Server className="h-12 w-12 text-blue-500" />}
                title="DevOps Services"
                description="We implement DevOps practices and tools to streamline your development process and improve deployment efficiency."
                features={[
                  "CI/CD pipeline setup",
                  "Infrastructure as Code (IaC)",
                  "Container orchestration",
                  "Cloud migration and optimization",
                  "Monitoring and logging",
                  "Security implementation",
                ]}
                imageUrl="/placeholder.svg?height=400&width=600"
                reverse={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <ScrollFade>
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-bold">Our Development Process</h2>
                <p className="text-slate-600">
                  We follow a proven methodology to ensure successful project delivery and client satisfaction.
                </p>
              </div>
            </ScrollFade>

            <div className="space-y-8">
              <ProcessStep
                number="01"
                title="Discovery & Planning"
                description="We start by understanding your business goals, target audience, and project requirements to create a comprehensive roadmap."
              />
              <ProcessStep
                number="02"
                title="Design & Prototyping"
                description="Our designers create wireframes and interactive prototypes to visualize the solution before development begins."
              />
              <ProcessStep
                number="03"
                title="Development"
                description="Our development team brings the designs to life using the most appropriate technologies and following best practices."
              />
              <ProcessStep
                number="04"
                title="Testing & QA"
                description="We conduct thorough testing to ensure the solution is bug-free, secure, and performs optimally across all platforms."
              />
              <ProcessStep
                number="05"
                title="Deployment"
                description="We handle the deployment process, ensuring a smooth transition to production environments."
              />
              <ProcessStep
                number="06"
                title="Maintenance & Support"
                description="We provide ongoing maintenance and support to keep your solution running smoothly and up-to-date."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <TextAnimation className="mb-6 block text-3xl font-bold md:text-4xl">
                Ready to Start Your Project?
              </TextAnimation>
              <p className="mb-8 text-lg text-blue-100">
                Contact us today to discuss your project requirements and how we can help bring your vision to life.
              </p>
              <a
                href="/contact"
                className="inline-block rounded-lg bg-white px-6 py-3 text-lg font-medium text-blue-600 transition-colors hover:bg-blue-50"
              >
                Get in Touch
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

function ServiceDetail({ icon, title, description, features, imageUrl, reverse }) {
  return (
    <ScrollFade>
      <div className={`grid gap-8 md:grid-cols-2 ${reverse ? "md:flex-row-reverse" : ""}`}>
        <div className={`flex flex-col justify-center ${reverse ? "md:order-2" : ""}`}>
          <div className="mb-4">{icon}</div>
          <h3 className="mb-4 text-2xl font-bold">{title}</h3>
          <p className="mb-6 text-slate-600">{description}</p>
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="mr-2 text-blue-500">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={`relative h-[300px] overflow-hidden rounded-lg md:h-[400px] ${reverse ? "md:order-1" : ""}`}>
          <img src={imageUrl || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
        </div>
      </div>
    </ScrollFade>
  )
}

function ProcessStep({ number, title, description }) {
  return (
    <HoverCard className="flex gap-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
        {number}
      </div>
      <div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </HoverCard>
  )
}
