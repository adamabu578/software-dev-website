"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/animations/slider"
import { MultiItemSlider } from "@/components/animations/multi-item-slider"
import { FadeIn } from "@/components/animations/fade-in"
import { ScrollFade } from "@/components/animations/scroll-fade"

export default function SlidersShowcasePage() {
  const [sliderSettings, setSliderSettings] = useState({
    autoSlide: true,
    showArrows: true,
    showDots: true,
    autoSlideInterval: 5000,
  })

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Slider Components</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-300">
                Explore our animated slider components built with Framer Motion for smooth transitions and interactions.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Basic Slider */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Basic Slider</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                A simple slider that transitions between full-width slides with smooth animations.
              </p>
            </div>
          </ScrollFade>

          <ScrollFade delay={0.2}>
            <div className="mx-auto max-w-4xl">
              <Slider
                autoSlide={sliderSettings.autoSlide}
                showArrows={sliderSettings.showArrows}
                showDots={sliderSettings.showDots}
                autoSlideInterval={sliderSettings.autoSlideInterval}
                className="mb-8 h-[400px]"
              >
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white"
                  >
                    <div className="text-center">
                      <h3 className="mb-4 text-3xl font-bold">Slide {num}</h3>
                      <p className="mb-6 text-lg">This is a full-width slide with custom content.</p>
                      <Button variant="outline" className="border-white text-white hover:bg-white/10">
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </ScrollFade>

          <div className="mx-auto mt-8 max-w-4xl">
            <div className="rounded-lg bg-slate-50 p-6">
              <h3 className="mb-4 text-xl font-semibold">Slider Settings</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="autoSlide"
                    checked={sliderSettings.autoSlide}
                    onChange={(e) => setSliderSettings({ ...sliderSettings, autoSlide: e.target.checked })}
                    className="mr-2 h-4 w-4"
                  />
                  <label htmlFor="autoSlide">Auto Slide</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="showArrows"
                    checked={sliderSettings.showArrows}
                    onChange={(e) => setSliderSettings({ ...sliderSettings, showArrows: e.target.checked })}
                    className="mr-2 h-4 w-4"
                  />
                  <label htmlFor="showArrows">Show Arrows</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="showDots"
                    checked={sliderSettings.showDots}
                    onChange={(e) => setSliderSettings({ ...sliderSettings, showDots: e.target.checked })}
                    className="mr-2 h-4 w-4"
                  />
                  <label htmlFor="showDots">Show Dots</label>
                </div>
                <div>
                  <label htmlFor="interval" className="mb-1 block">
                    Auto Slide Interval (ms)
                  </label>
                  <input
                    type="range"
                    id="interval"
                    min="1000"
                    max="10000"
                    step="1000"
                    value={sliderSettings.autoSlideInterval}
                    onChange={(e) =>
                      setSliderSettings({ ...sliderSettings, autoSlideInterval: Number.parseInt(e.target.value) })
                    }
                    className="w-full"
                  />
                  <div className="mt-1 text-sm">{sliderSettings.autoSlideInterval / 1000}s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Item Slider */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Multi-Item Slider</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                A slider that displays multiple items at once, perfect for showcasing products, team members, or
                portfolio items.
              </p>
            </div>
          </ScrollFade>

          <ScrollFade delay={0.2}>
            <div className="mx-auto max-w-6xl">
              <MultiItemSlider
                itemsPerView={3}
                autoSlide={sliderSettings.autoSlide}
                showArrows={sliderSettings.showArrows}
                showDots={sliderSettings.showDots}
                autoSlideInterval={sliderSettings.autoSlideInterval}
                className="mb-12 h-[300px]"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <Card key={num} number={num} />
                ))}
              </MultiItemSlider>
            </div>
          </ScrollFade>

          <ScrollFade delay={0.3}>
            <div className="mx-auto max-w-6xl">
              <h3 className="mb-6 text-center text-xl font-semibold">Responsive Behavior</h3>
              <p className="mb-8 text-center text-slate-600">
                The multi-item slider automatically adjusts the number of visible items based on screen size:
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h4 className="mb-2 font-semibold">Mobile</h4>
                  <p className="text-slate-600">Displays 1 item at a time on small screens (less than 640px).</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h4 className="mb-2 font-semibold">Tablet</h4>
                  <p className="text-slate-600">Displays 2 items at a time on medium screens (640px - 768px).</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h4 className="mb-2 font-semibold">Desktop</h4>
                  <p className="text-slate-600">
                    Displays the full number of items on larger screens (more than 768px).
                  </p>
                </div>
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Custom Content Slider */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Custom Content Slider</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                The slider components can be used with any content, from simple images to complex layouts.
              </p>
            </div>
          </ScrollFade>

          <ScrollFade delay={0.2}>
            <div className="mx-auto max-w-4xl">
              <Slider className="mb-12 h-[500px]" showDots={false}>
                <div className="h-full w-full overflow-hidden rounded-lg bg-white p-8 shadow-md">
                  <div className="grid h-full gap-8 md:grid-cols-2">
                    <div className="flex flex-col justify-center">
                      <h3 className="mb-4 text-2xl font-bold">Product Showcase</h3>
                      <p className="mb-6 text-slate-600">
                        Use the slider to showcase your products with detailed information and call-to-action buttons.
                      </p>
                      <Button className="w-fit">Shop Now</Button>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="relative h-64 w-64 overflow-hidden rounded-lg">
                        <img
                          src="/placeholder.svg?height=300&width=300"
                          alt="Product"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-full w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <h3 className="mb-6 text-3xl font-bold">Special Offer</h3>
                    <p className="mb-8 text-xl">Get 20% off on all our services this month!</p>
                    <div className="mb-8 text-6xl font-bold">20% OFF</div>
                    <Button variant="outline" className="border-white text-white hover:bg-white/10">
                      Claim Offer
                    </Button>
                  </div>
                </div>

                <div className="h-full w-full overflow-hidden rounded-lg bg-white p-8 shadow-md">
                  <div className="flex h-full flex-col">
                    <h3 className="mb-6 text-2xl font-bold">Client Testimonial</h3>
                    <div className="mb-6 flex-1">
                      <p className="text-lg italic text-slate-600">
                        "Working with DevSolutions was a game-changer for our business. Their team understood our vision
                        and delivered a solution that exceeded our expectations. The attention to detail and commitment
                        to quality was impressive."
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 h-16 w-16 overflow-hidden rounded-full">
                        <img
                          src="/placeholder.svg?height=100&width=100"
                          alt="Client"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Robert Johnson</p>
                        <p className="text-sm text-slate-500">CEO, Tech Innovations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Use These Sliders?</h2>
              <p className="mb-8 text-lg text-blue-100">
                Incorporate these animated slider components into your projects for a more engaging user experience.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <a href="#" className="flex items-center gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

function Card({ number }) {
  return (
    <div className="h-full w-full overflow-hidden rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-40 items-center justify-center rounded bg-blue-100">
        <span className="text-4xl font-bold text-blue-500">{number}</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold">Card Title {number}</h3>
      <p className="text-slate-600">This is a sample card that can be used in the multi-item slider component.</p>
    </div>
  )
}
