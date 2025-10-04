"use client"

import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Brain, Database, Sparkles, Rocket, Target, Users, Globe, Zap } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning models analyze and synthesize insights from 608 NASA bioscience publications"
  },
  {
    icon: Database,
    title: "Comprehensive Database",
    description: "Complete repository of space biology research covering microgravity, radiation, and life support systems"
  },
  {
    icon: Sparkles,
    title: "Knowledge Synthesis",
    description: "Intelligent extraction of patterns, gaps, and actionable insights across multiple research domains"
  },
  {
    icon: Zap,
    title: "Real-Time Search",
    description: "Lightning-fast semantic search powered by neural networks and knowledge graphs"
  }
]

const stats = [
  { value: "608", label: "Publications" },
  { value: "12,000+", label: "Experiments" },
  { value: "50+", label: "Institutions" },
  { value: "2010-2025", label: "Time Span" }
]

const teamMembers = [
  { name: "Research Team", role: "Data Analysis & Curation" },
  { name: "AI/ML Team", role: "Algorithm Development" },
  { name: "Engineering Team", role: "Platform Architecture" },
  { name: "Domain Experts", role: "Space Biology Consultation" }
]

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Header */}
      <header className="border-b border-blue-800/30 backdrop-blur-xl bg-slate-950/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="flex items-center space-x-3 hover:scale-105 transition-transform"
          >
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
              <div className="text-black font-bold text-[10px] text-center leading-tight">
                ESBN<br/>
                <span className="text-[6px]">2025</span>
              </div>
            </div>
            <div className="text-white">
              <h1 className="text-lg font-bold">Enhanced Space Biology Network</h1>
            </div>
          </button>
          <nav className="flex items-center space-x-6 text-white text-sm">
            <button onClick={() => router.push('/')} className="hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => router.push('/search')} className="hover:text-blue-400 transition-colors">Search</button>
            <button onClick={() => router.push('/about')} className="text-blue-400">About</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
            <Globe className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">NASA Space Apps Challenge 2025</span>
          </div>
          <h2 className="text-6xl font-black text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">ESBN</span>
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            The Enhanced Space Biology Network is an AI-powered knowledge engine designed to synthesize
            and analyze NASA's comprehensive bioscience research database, enabling breakthrough discoveries
            for lunar and Mars exploration.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <Card key={idx} className="p-6 bg-slate-800/50 border-slate-700/50 text-center">
                <div className="text-4xl font-black text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-8 h-8 text-blue-400" />
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                ESBN bridges the gap between vast repositories of space biology research and actionable
                insights needed for safe, sustainable human exploration of the Moon and Mars.
              </p>
              <p className="text-slate-300 leading-relaxed">
                By leveraging advanced AI and machine learning, we enable researchers, mission planners,
                and astronauts to quickly access critical knowledge about biological adaptations,
                countermeasures, and life support systems.
              </p>
            </div>
            <Card className="p-8 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-500/30">
              <Rocket className="w-16 h-16 text-blue-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">Challenge Focus</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Addressing the NASA Space Apps Challenge by creating an intelligent system that
                analyzes 608 bioscience publications to support lunar and Mars mission planning,
                astronaut health management, and advanced life support system development.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <Card key={idx} className="p-6 bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Our Team</h3>
            <p className="text-slate-300">
              A multidisciplinary collaboration bringing together expertise in space biology,
              AI/ML, and software engineering
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <Card key={idx} className="p-6 bg-slate-800/50 border-slate-700/50 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-bold mb-1">{member.name}</h4>
                <p className="text-slate-400 text-sm">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section> {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="p-12 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border-blue-500/30">
            <h3 className="text-4xl font-black text-white mb-6">
              Ready to Explore?
            </h3>
            <p className="text-slate-300 text-lg mb-8">
              Start querying NASA's space biology knowledge base today
            </p>
            <Button
              onClick={() => router.push('/search')}
              className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Launch Search Engine
            </Button>
          </Card>
        </div>
      </section>
    </div>
  )
}

      
      
