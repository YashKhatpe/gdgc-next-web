"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Cloud, Shield, Terminal, Users, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar/>
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <Link href="https://gdg.community.dev/">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full mb-8">
            <span className="text-sm text-gray-600 cursor-pointer">Visit community</span>
            <span className="text-sm">→</span>
          </div>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Welcome to GDGC DBIT</h1>
          <p className="text-gray-600 mb-8">
            Empowering developers, fostering innovation, and building a vibrant tech community.
          </p>
          <div className="flex gap-4 justify-center">
          <Link href="/about">
            <Button variant="outline">Learn More</Button>
          </Link>
          <Link href="https://gdg.community.dev/events/#/list">
            <Button>Register Events</Button>
          </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">What we Do?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Welcome to GDGC DBIT, where we'll help you immerse yourself in excellence, overcome, and compete through our tech community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Terminal />}
              title="Web Development"
              description="Get HTML, TypeScript & basic fundamental skills in development and build your own website."
            />
            <FeatureCard
              icon={<Code2 />}
              title="DSA"
              description="Once you're done building, export your project to a full functional React & TypeScript app."
            />
            <FeatureCard
              icon={<Users />}
              title="Gen AI"
              description="Yes, like the code. Everyone will be building and Excel together."
            />
            <FeatureCard
              icon={<Terminal />}
              title="App Development"
              description="Reach more users with the most popular browser and manage fast like a pro developer."
            />
            <FeatureCard
              icon={<Cloud />}
              title="Cloud Computing"
              description="Get started today with pre-made templates and tutorials to build your own website."
            />
            <FeatureCard
              icon={<Shield />}
              title="Cyber Security"
              description="Generate and customize components with Figma that match your brand."
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">What we Do?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Welcome to GDGC DBIT, where we'll help you immerse yourself in excellence, overcome, and compete through our tech community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Google Cloud Campaign"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
              src="/skill_ups/gccp.jpg"
              />
            <ProjectCard
              title="Flutter Campaign"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
              src="/skill_ups/flutter.jpg"
              />
            <ProjectCard
              title="Web Development"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
              src="/skill_ups/webdev.png"
              />
            <ProjectCard
              title="Competitive Programming"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
              src="/skill_ups/cp.jpeg"
              />
            <ProjectCard
              title="Cyber Security"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
              src="/skill_ups/cybersec.jpeg"
              />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-purple-600">TESTIMONIALS</h2>
          <h3 className="text-3xl font-bold text-center mb-4">What our users say</h3>
          <p className="text-gray-600 text-center mb-12">
            What developers and founders of top companies around the internet are saying about these.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultricies ante arcu hendrerit."
              name="John"
              role="Developer"
              avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <TestimonialCard
              content="Curabitur at metus ut sapien tempor bibendum quis at neque. Ut tellus id tortor a tristique. Phasim vitae sed felis, libero faucibus tempor."
              name="Bob"
              role="Tech Lead"
              avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <TestimonialCard
              content="Vivamus imperdiet porta arci. Nullus commodo ullamcorper quam. Quisque consectetur ultrices elit."
              name="Michael"
              role="Principal"
              avatar="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <TestimonialCard
              content="Mauris nec elear porttitor nibh at pharetra scet explicable eu. Praesent volutpat at turpis ac congue. Vestibulum nec nisi blandit."
              name="Max"
              role="Developer"
              avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <TestimonialCard
              content="Suspendisse a velit elit. Curabitur augue felis. Vulputate sed elit id, condimentum vestibulum sem. Suspendisse mattis massa eu justo semper!"
              name="Emily"
              role="Tech Lead"
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <TestimonialCard
              content="Nullam nec lacus vitae risus vulputate dictum non sed magna. Aliquam in vestibulum quam. Morbi feugiat malesuada leo, vel blandit tortor varius nisi."
              name="Sarah"
              role="Developer"
              avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-purple-600">FAQ</h2>
          <h3 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h3>
          <p className="text-gray-600 text-center mb-12">
            For any other questions, please feel free to contact us.
          </p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg bg-white transition-transform duration-300 ease-in-out hover:scale-105">
              <AccordionTrigger className="px-6">
                How is floweb different than tools like Framer or Webflow?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg bg-white transition-transform duration-300 ease-in-out hover:scale-105">
              <AccordionTrigger className="px-6">
                What is the learning curve for floweb?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg bg-white transition-transform duration-300 ease-in-out hover:scale-105">
              <AccordionTrigger className="px-6">
                Is the generated code high quality?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg bg-white transition-transform duration-300 ease-in-out hover:scale-105">
              <AccordionTrigger className="px-6">
                Do you plan to add more sections and templates?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg bg-white transition-transform duration-300 ease-in-out hover:scale-105">
              <AccordionTrigger className="px-6">
                Will the exported website look exactly like the preview?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}

function ProjectCard({ title, description, src }: { title: string; description: string, src: string }) {
  return (
    <Card className="p-6 transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="w-full h-52 bg-gray-200 rounded-lg mb-4">
      <img 
          src={src}
          alt="alt" 
          className="object-cover w-full h-full"
          />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}

function TestimonialCard({ content, name, role, avatar }: { content: string; name: string; role: string; avatar: string }) {
  return (
    <Card className="p-6 transition-transform duration-300 ease-in-out hover:scale-105">
      <p className="text-gray-600 mb-6">{content}</p>
      <div className="flex items-center gap-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </Card>
  );
}