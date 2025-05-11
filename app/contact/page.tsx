"use client"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { FadeIn } from "@/components/animations/fade-in"
import { ScrollFade } from "@/components/animations/scroll-fade"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-300">
                Have a project in mind? Get in touch with our team to discuss how we can help bring your ideas to life.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Contact Information */}
              <ScrollFade>
                <div>
                  <h2 className="mb-6 text-3xl font-bold">Get in Touch</h2>
                  <p className="mb-8 text-slate-600">
                    We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
                  </p>

                  <div className="mb-8 space-y-6">
                    <motion.div
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <MapPin className="mr-4 h-6 w-6 text-blue-500" />
                      <div>
                        <h3 className="mb-1 font-semibold">Our Office</h3>
                        <p className="text-slate-600">123 Tech Street, Silicon Valley, CA 94043</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Phone className="mr-4 h-6 w-6 text-blue-500" />
                      <div>
                        <h3 className="mb-1 font-semibold">Phone</h3>
                        <p className="text-slate-600">+1 (555) 123-4567</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Mail className="mr-4 h-6 w-6 text-blue-500" />
                      <div>
                        <h3 className="mb-1 font-semibold">Email</h3>
                        <p className="text-slate-600">info@devsolutions.com</p>
                      </div>
                    </motion.div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-semibold">Business Hours</h3>
                    <div className="space-y-2 text-slate-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </ScrollFade>

              {/* Contact Form */}
              <ScrollFade delay={0.2}>
                <motion.div
                  className="rounded-lg bg-white p-8 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </motion.div>
              </ScrollFade>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <ScrollFade>
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold">Our Location</h2>
                <p className="mx-auto max-w-2xl text-slate-600">
                  Visit our office to meet our team and discuss your project in person.
                </p>
              </div>
            </ScrollFade>
            <ScrollFade delay={0.2}>
              <motion.div
                className="h-[400px] overflow-hidden rounded-lg bg-slate-200"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Placeholder for map */}
                <div className="flex h-full items-center justify-center">
                  <p className="text-slate-500">Map will be displayed here</p>
                </div>
              </motion.div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <ScrollFade>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
                <p className="text-slate-600">Find answers to common questions about our services and process.</p>
              </div>
            </ScrollFade>

            <ScrollFade delay={0.2}>
              <div className="space-y-6">
                <FaqItem
                  question="How long does it take to complete a project?"
                  answer="Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex application could take several months. We'll provide a detailed timeline during our initial consultation."
                />
                <FaqItem
                  question="What is your pricing structure?"
                  answer="We offer flexible pricing models including fixed-price, time and materials, and retainer arrangements. The best option depends on your project requirements, which we'll discuss during our consultation."
                />
                <FaqItem
                  question="Do you provide ongoing maintenance and support?"
                  answer="Yes, we offer various maintenance and support packages to ensure your software continues to run smoothly after launch. These can include regular updates, bug fixes, security patches, and feature enhancements."
                />
                <FaqItem
                  question="What technologies do you specialize in?"
                  answer="We specialize in a wide range of technologies including React, Next.js, Node.js, Python, .NET, and various mobile development frameworks. Our team stays up-to-date with the latest advancements to provide the best solutions."
                />
                <FaqItem
                  question="How do you handle project management and communication?"
                  answer="We use agile methodologies and provide regular updates through your preferred communication channels. You'll have access to a dedicated project manager and tools to track progress throughout the development process."
                />
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>
    </div>
  )
}

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="rounded-lg border border-slate-200 bg-white"
      whileHover={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
    >
      <motion.button
        className="flex w-full items-center justify-between p-6 text-left font-semibold"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.99 }}
      >
        {question}
        <motion.span className="text-xl" animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? "−" : "+"}
        </motion.span>
      </motion.button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="border-t border-slate-200 p-6 text-slate-600">{answer}</div>
      </motion.div>
    </motion.div>
  )
}
