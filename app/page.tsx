"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const CTAMessages = [
  "INITIALIZE NEURAL MATRIX",
  "DEPLOY QUANTUM ENGINE",
  "ACTIVATE SYNTHESIS PROTOCOL",
  "COMMENCE DEEP ANALYSIS",
  "LAUNCH COGNITIVE FUSION",
  "ENGAGE AI DISCOVERY",
  "START KNOWLEDGE EXTRACTION",
  "BEGIN PREDICTIVE MAPPING",
  "INITIATE DATA ORCHESTRATION",
  "ENABLE MULTI-OMICS SCAN"
]

const PromptSuggestions = [
  [
    "Analyze microgravity effects on cellular mitochondrial function across mammalian species",
    "Synthesize cross-study radiation exposure patterns in spaceflight experiments",
    "Map temporal gene expression cascades during extended Mars-analog missions"
  ],
  [
    "Correlate bone density metrics with countermeasure efficacy in lunar gravity simulations",
    "Extract consensus mechanisms for plant growth optimization in controlled environment agriculture",
    "Identify gaps in cardiovascular adaptation research for deep space exploration"
  ],
  [
    "Generate predictive models for crew health trajectories using multi-omics integration",
    "Compare immune system modulation across different spaceflight durations and missions",
    "Evaluate neurocognitive performance trends under isolated and confined environments"
  ],
  [
    "Synthesize actionable protocols for muscle atrophy prevention in zero-gravity conditions",
    "Map knowledge networks connecting circadian rhythm disruption to mission performance",
    "Identify convergent biomarkers across space biology experiments from 2010-2025"
  ],
  [
    "Analyze metabolic pathway alterations in response to cosmic radiation exposure",
    "Extract mission-critical insights from tissue engineering studies in microgravity",
    "Correlate microbiome composition changes with psychological stress in astronauts"
  ]
]

export default function Home() {
  const [ctaText, setCTAText] = useState("")
  const [prompts, setPrompts] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null)

  useEffect(() => {
    setCTAText(CTAMessages[Math.floor(Math.random() * CTAMessages.length)])
    setPrompts(PromptSuggestions[Math.floor(Math.random() * PromptSuggestions.length)])

    setTimeout(() => setIsLoaded(true), 100)
  }, [])

  const router = useRouter()

  const handleMainClick = () => {
    if (selectedPrompt) {
      router.push(`/results?q=${encodeURIComponent(selectedPrompt)}`)
    } else {
      router.push('/search')
    }
  }

  const handlePromptClick = (prompt: string) => {
    setSelectedPrompt(prompt)
    console.log("Selected prompt:", prompt)
  }

  const handleLogoClick = () => {
    window.location.reload()
  }

  const handleHomeClick = () => {
    setSelectedPrompt(null)
    console.log("Navigating to home")
  }

  const handleAboutClick = () => {
    router.push('/about')
  }

  const handleBackgroundClick = (area: string) => {
    console.log(`Clicked ${area}`)
    if (area === 'earth') {
      alert("🌍 Earth - Our home planet and the foundation of all space biology research")
    } else if (area === 'satellite') {
      alert("🛰️ International Space Station - Primary platform for microgravity experiments")
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(2deg); }
          66% { transform: translateY(-10px) rotate(-2deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes drift {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-100px) translateY(100px); }
        }
        @keyframes nebula {
          0%, 100% { opacity: 0.4; filter: hue-rotate(0deg); }
          50% { opacity: 0.6; filter: hue-rotate(30deg); }
        }
        @keyframes earthRotate {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
          100% { transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* Multi-Layer Space Background */}
      <div className="absolute inset-0 bg-black">
        {/* Deep Space Layer */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Nebula Overlay */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-screen"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 20% 30%, rgba(138, 43, 226, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(30, 144, 255, 0.3) 0%, transparent 50%)',
            animation: 'nebula 15s ease-in-out infinite'
          }}
        />
      </div>

      {/* Complex Multi-Layer Star Field */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Layer 1: Large Bright Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-lg-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)'
            }}
          />
        ))}

        {/* Layer 2: Medium Stars with Color */}
        {[...Array(100)].map((_, i) => {
          const colors = ['rgba(255,255,255,0.9)', 'rgba(173,216,230,0.9)', 'rgba(255,250,205,0.9)', 'rgba(255,192,203,0.9)'];
          return (
            <div
              key={`star-md-${i}`}
              className="absolute rounded-full"
              style={{
                width: '2px',
                height: '2px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                animation: `twinkle ${1 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                boxShadow: `0 0 4px ${colors[Math.floor(Math.random() * colors.length)]}`
              }}
            />
          );
        })}

        {/* Layer 3: Tiny Distant Stars */}
        {[...Array(200)].map((_, i) => (
          <div
            key={`star-sm-${i}`}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${3 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}

        {/* Shooting Stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              width: '100px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animation: `drift ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: 0.6,
              transform: 'rotate(-45deg)'
            }}
          />
        ))}
      </div>

      {/* Massive Earth with Atmospheric Glow */}
      <div
        className="absolute cursor-pointer"
        style={{
          bottom: '-40%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '180%',
          height: '180%',
          animation: 'earthRotate 30s ease-in-out infinite'
        }}
        onClick={() => handleBackgroundClick('earth')}
      >
        {/* Earth's Atmosphere Glow */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(100, 149, 237, 0.3) 0%, rgba(30, 144, 255, 0.2) 40%, transparent 70%)',
            filter: 'blur(40px)',
            transform: 'scale(1.1)'
          }}
        />

        {/* Earth Image */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: 'inset -40px -40px 100px rgba(0,0,0,0.8), 0 0 100px rgba(100, 149, 237, 0.4)'
          }}
        />

        {/* Earth's Cloud Layer */}
        <div
          className="absolute inset-0 rounded-full opacity-30 mix-blend-screen"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* ISS with Complex Details */}
      <div
        className="absolute top-20 right-20 cursor-pointer group"
        style={{
          animation: 'float 8s ease-in-out infinite'
        }}
        onClick={() => handleBackgroundClick('satellite')}
      >
        {/* ISS Glow Effect */}
        <div className="absolute inset-0 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />

        {/* ISS Image */}
        <div
          className="relative w-32 h-32 opacity-70 group-hover:opacity-100 transition-all transform group-hover:scale-125"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/23764/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: 'drop-shadow(0 0 20px rgba(100, 149, 237, 0.6))'
          }}
        />

        {/* Orbital Trail */}
        <div className="absolute top-1/2 right-full w-64 h-px bg-gradient-to-l from-blue-400/50 to-transparent" />
      </div>

      {/* Floating Cosmic Dust Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute rounded-full bg-white/10 blur-sm"
            style={{
              width: `${5 + Math.random() * 15}px`,
              height: `${5 + Math.random() * 15}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <button
          onClick={handleLogoClick}
          className="bg-white rounded-full w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-xl"
        >
          <div className="text-black font-bold text-xs text-center leading-tight">
            ESBN<br/>
            <span className="text-[8px]">2025</span>
          </div>
        </button>
      </div>

      {/* Top Right Nav */}
      <div className="absolute top-8 right-8 z-20 text-white text-sm flex items-center space-x-6">
        <button
          onClick={handleHomeClick}
          className="cursor-pointer hover:text-blue-400 transition-colors font-medium hover:scale-110 transform"
        >
          Home
        </button>
        <button
          onClick={handleAboutClick}
          className="cursor-pointer hover:text-blue-400 transition-colors font-medium hover:scale-110 transform"
        >
          About
        </button>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Main Title Box */}
        <button
          onClick={() => console.log("Title clicked")}
          className="mb-12 border-4 border-blue-500 p-8 bg-black/40 backdrop-blur-sm hover:border-blue-400 hover:bg-black/50 transition-all cursor-pointer group"
        >
          <h1 className="text-8xl md:text-9xl font-black text-white tracking-wider leading-none group-hover:scale-105 transition-transform">
            THIS IS
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
              SPACE
            </span>
          </h1>
        </button>

        {/* CTA Button */}
        <div className="mb-8">
          <Button
            onClick={handleMainClick}
            className="px-12 py-8 text-xl font-bold bg-gray-600 hover:bg-gray-500 text-white rounded-full transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-110 cursor-pointer"
          >
            {ctaText}
          </Button>
        </div>

        {/* Random Prompts */}
        <div className="max-w-4xl mx-auto space-y-3">
          {prompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handlePromptClick(prompt)}
              className={`w-full bg-gray-700/80 backdrop-blur-md text-white px-6 py-4 rounded-full text-sm transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-gray-600/80 ${
                selectedPrompt === prompt ? 'ring-2 ring-blue-400 bg-blue-900/50' : ''
              }`}
            >
              {prompt}
            </button>
          ))}
        </div>

        {selectedPrompt && (
          <div className="mt-6 text-blue-300 text-sm animate-pulse">
            ✓ Query selected - Click button above to execute
          </div>
        )}
      </div>

      {/* Bottom NASA Attribution */}
      <button
        onClick={() => window.open('https://www.spaceappschallenge.org', '_blank')}
        className="absolute bottom-8 left-0 right-0 text-center text-white/60 text-xs z-20 hover:text-white/90 transition-colors cursor-pointer"
      >
        NASA Space Apps Challenge 2025 • Space Biology Knowledge Engine
      </button>
    </div>
  )
}


