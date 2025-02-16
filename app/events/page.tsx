"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {motion} from 'framer-motion'
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
const events = [
  {
    title: "Gen AI",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: "/events/gen_ai.png"
    // image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
  },
  {
    title: "Online Info Session",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: "/events/gen_ai.png"
    // image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
  },
  {
    title: "DSA Bootcamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: "/events/dsa.jpg"
  },
  {
    title: "Placement Awareness Session",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: "/events/placementawareness.png"
  },
  {
    title: "Google Study Jams",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: "/events/gen_ai.png"
    // image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
  },
  {
    title: "Solution Challenge",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: "/events/solnchallenge.jpg"
  },
  {
    title: "MERN Stack Workshop",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: "/skill_ups/webdev.png"
    // image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
  },
];

function EventCard({ event }: { event: typeof events[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    >

    <Card className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="aspect-video relative">
        <Image 
          src={event.image} 
          alt={event.title} 
          className="object-cover w-full h-full"
          />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-6">{event.description}</p>
        <Button variant="secondary" className=" hover:bg-purple-600 bg-transparent hover:text-white shadow-lg">
          Learn More
          <ArrowUpRight/>
        </Button>
      </div>
    </Card>
    </motion.div>
  );
}

export default function Events() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 border-b">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Explore Our Exciting Events & Workshops!</h1>
          <p className="text-gray-600 mb-8">
            Where Learning Meets Innovation - Upcoming Events
          </p>
          <Button className="shadow-lg" variant="outline">
            Learn More
            <ArrowUpRight/>
            </Button>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Events - 2024-25</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Welcome to our events section! Stay inspired. Join Our Tech Events & Meetups!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </main>
  );
}