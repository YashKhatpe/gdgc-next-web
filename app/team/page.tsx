"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Instagram, Linkedin } from "lucide-react";
import { motion} from 'framer-motion'

const teamMembers = [
  {
    name: "Jayesh Wani",
    role: "Lead",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultricies ante arcu hendrerit.",
    image: "/team/jayesh.jpg",
    social: {
      github: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    name: "Umme Atiya",
    role: "Co-Lead",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultricies ante arcu hendrerit.",
    image: "/team/atiya.jpg",
    social: {
      github: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    name: "Erica Prasad",
    role: "Secretary",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultricies ante arcu hendrerit.",
    image: "/team/erica.jpg",
    social: {
      github: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    name: "Shreya Chakraborty",
    role: "Event Head",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultricies ante arcu hendrerit.",
    image: "/team/shreya.jpg",
    social: {
      github: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    name: "Tanush Karane",
    role: "Design Head",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultricies ante arcu hendrerit.",
    image: "/team/tanush.jpg",
    social: {
      github: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    name: "Krishna Shirsath",
    role: "Tech Expert",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultricies ante arcu hendrerit.",
    image: "/team/krishna.jpg",
    social: {
      github: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    name: "Yash Khatpe",
    role: "Web Expert",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultricies ante arcu hendrerit.",
    image: "/team/yash.jpg",
    social: {
      github: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    name: "Sanjay Yadav",
    role: "DSA Expert",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultricies ante arcu hendrerit.",
    image: "/team/sanjay.jpg",
    social: {
      github: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    name: "Narendra Dukhande",
    role: "DSA Expert",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultricies ante arcu hendrerit.",
    image: "/team/narendra.jpg",
    social: {
      github: "#",
      twitter: "#",
      youtube: "#"
    }
  },
];
const pastteamMembers = [
  {
    name: "Shrikrishna Umbare",
    role: "Lead",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultricies ante arcu hendrerit.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
    social: {
      github: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    name: "John Doe",
    role: "Lead",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultricies ante arcu hendrerit.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
    social: {
      github: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    name: "John Doe",
    role: "Lead",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultricies ante arcu hendrerit.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
    social: {
      github: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    name: "John Doe",
    role: "Lead",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultricies ante arcu hendrerit.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
    social: {
      github: "#",
      twitter: "#",
      youtube: "#"
    }
  }
];

function TeamMemberCard({ member }: { member: typeof teamMembers[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="aspect-video relative">
          <img 
            src={member.image} 
            alt={member.name} 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
          <p className="text-purple-600 mb-4">{member.role}</p>
          <p className="text-gray-600 mb-6">{member.description}</p>
          <div className="flex gap-4">
            <a href={member.social.github} className="text-gray-600 hover:text-gray-900">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={member.social.twitter} className="text-gray-600 hover:text-gray-900">
              <Github className="h-5 w-5" />
            </a>
            <a href={member.social.youtube} className="text-gray-600 hover:text-gray-900">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Team() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar/>
      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto h-52">
          <h1 className="text-4xl font-bold text-center mb-4">Introducing our Core Team</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Empowering developers, fostering innovation, and building a vibrant tech community.
          </p>
        </div>

          <div className="max-w-7xl mx-auto mb-12">
            <Tabs defaultValue="2024-25" className="w-full">
              <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto">
                <TabsTrigger value="2024-25">2024-25</TabsTrigger>
                <TabsTrigger value="2023-24">2023-24</TabsTrigger>
              </TabsList>
              <TabsContent value="2024-25" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamMembers.map((member, index) => (
                    <TeamMemberCard key={index} member={member} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="2023-24" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastteamMembers.map((member, index) => (
                    <TeamMemberCard key={`past-${index}`} member={member} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
      </section>

      {/* Footer */}
      <Footer/>
    </main>
  );
}