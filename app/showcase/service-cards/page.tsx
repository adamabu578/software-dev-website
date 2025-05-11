"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Globe, Layers, Smartphone, Server, Settings, Zap } from "lucide-react"

import { FadeIn } from "@/components/animations/fade-in"
import { ScrollFade } from "@/components/animations/scroll-fade"
import { AnimatedServiceCard } from "@/components/animations/animated-service-card"
import { ServiceGrid } from "@/components/animations/service-grid"
import { FloatingIcon } from "@/components/animations/floating-icon"
import { AnimatedIconButton } from "@/components/animations/animated-icon-button"

export default function ServiceCardsShowcasePage() {
  const [animationSettings, setAnimationSettings] = useState({
    floatIntensity: 10,
    rotateIntensity: 5,
    duration: 3,
  })

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Animated Service Cards</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-300">
                Explore our animated service cards with interactive effects and smooth transitions.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Cards Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold">Standard Service Cards</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                Our service cards feature entrance animations, hover effects, and animated icons.
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

          <div className="mx-auto mb-20 max-w-4xl">
            <div className="rounded-lg bg-slate-50 p-6">
              <h3 className="mb-4 text-xl font-semibold">Floating Icon Settings</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <label htmlFor="floatIntensity" className="mb-1 block">
                    Float Intensity
                  </label>
                  <input
                    type="range"
                    id="floatIntensity"
                    min="0"
                    max="20"
                    step="1"
                    value={animationSettings.floatIntensity}
                    onChange={(e) =>
                      setAnimationSettings({
                        ...animationSettings,
                        floatIntensity: Number.parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                  <div className="mt-1 text-sm">{animationSettings.floatIntensity}px</div>
                </div>
                <div>
                  <label htmlFor="rotateIntensity" className="mb-1 block">
                    Rotate Intensity
                  </label>
                  <input
                    type="range"
                    id="rotateIntensity"
                    min="0"
                    max="20"
                    step="1"
                    value={animationSettings.rotateIntensity}
                    onChange={(e) =>
                      setAnimationSettings({
                        ...animationSettings,
                        rotateIntensity: Number.parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                  <div className="mt-1 text-sm">{animationSettings.rotateIntensity}°</div>
                </div>
                <div>
                  <label htmlFor="duration" className="mb-1 block">
                    Animation Duration
                  </label>
                  <input
                    type="range"
                    id="duration"
                    min="1"
                    max="10"
                    step="0.5"
                    value={animationSettings.duration}
                    onChange={(e) =>
                      setAnimationSettings({
                        ...animationSettings,
                        duration: Number.parseFloat(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                  <div className="mt-1 text-sm">{animationSettings.duration}s</div>
                </div>
              </div>
            </div>
          </div>

          <ScrollFade>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold">Icon Button Grid</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                Animated icon buttons that can be used for service categories or feature highlights.
              </p>
            </div>
          </ScrollFade>

          <div className="mx-auto mb-20 max-w-4xl">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              <AnimatedIconButton icon={<Globe className="h-6 w-6" />} label="Web Development" />
              <AnimatedIconButton icon={<Smartphone className="h-6 w-6" />} label="Mobile Apps" />
              <AnimatedIconButton icon={<Database className="h-6 w-6" />} label="Databases" />
              <AnimatedIconButton icon={<Layers className="h-6 w-6" />} label="UI/UX Design" />
              <AnimatedIconButton icon={<Code className="h-6 w-6" />} label="Custom Software" />
              <AnimatedIconButton icon={<Server className="h-6 w-6" />} label="Cloud Services" />
              <AnimatedIconButton icon={<Settings className="h-6 w-6" />} label="DevOps" />
              <AnimatedIconButton icon={<Zap className="h-6 w-6" />} label="Performance" />
            </div>
          </div>

          <ScrollFade>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold">Custom Animation Demo</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                See the floating icon animation with your custom settings.
              </p>
            </div>
          </ScrollFade>

          <div className="mx-auto flex max-w-4xl justify-center">
            <div className="flex flex-col items-center">
              <FloatingIcon
                floatIntensity={animationSettings.floatIntensity}
                rotateIntensity={animationSettings.rotateIntensity}
                duration={animationSettings.duration}
                className="mb-4 rounded-full bg-blue-100 p-6"
              >
                <Globe className="h-16 w-16 text-blue-600" />
              </FloatingIcon>
              <p className="text-center text-slate-600">
                Float: {animationSettings.floatIntensity}px | Rotate: {animationSettings.rotateIntensity}° | Duration:{" "}
                {animationSettings.duration}s
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Use These Components?</h2>
              <p className="mb-8 text-lg text-blue-100">
                Incorporate these animated service cards into your projects for a more engaging user experience.
              </p>
              <motion.a
                href="/"
                className="inline-block rounded-lg bg-white px-6 py-3 text-lg font-medium text-blue-600 transition-colors hover:bg-blue-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Home
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
