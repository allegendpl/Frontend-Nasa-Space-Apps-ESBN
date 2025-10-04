"use client"

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FileText, Calendar, Users, Building, ExternalLink, TrendingUp, ChevronLeft } from 'lucide-react'

const mockResults = [
  {
    id: 1,
    title: "Microgravity-Induced Changes in Skeletal Muscle Mitochondrial Function",
    authors: ["Smith, J.", "Johnson, M.", "Williams, K."],
    year: 2023,
    institution: "NASA Ames Research Center",
    abstract: "This study examines the effects of prolonged microgravity exposure on mitochondrial function in skeletal muscle tissue. Results indicate significant alterations in oxidative phosphorylation and ATP production.",
    keywords: ["Microgravity", "Mitochondria", "Muscle Atrophy", "Spaceflight"],
    citations: 45,
    relevance: 98
  },
  {
    id: 2,
    title: "Gene Expression Profiles During Long-Duration Spaceflight",
    authors: ["Chen, L.", "Rodriguez, A.", "Patel, S."],
    year: 2024,
    institution: "Johnson Space Center",
    abstract: "Comprehensive transcriptomic analysis of astronaut samples collected before, during, and after 6-month ISS missions reveals adaptive immune responses and metabolic pathway modifications.",
    keywords: ["Genomics", "Transcriptomics", "ISS", "Long-duration Flight"],
    citations: 67,
    relevance: 95
  },
  {
    id: 3,
    title: "Radiation Effects on Neural Stem Cell Differentiation",
    authors: ["Anderson, T.", "Brown, E."],
    year: 2023,
    institution: "Kennedy Space Center",
    abstract: "Investigation of cosmic radiation impacts on neural stem cell proliferation and differentiation patterns using ground-based analogs and space-flown samples.",
    keywords: ["Radiation Biology", "Neuroscience", "Stem Cells", "Space Medicine"],
    citations: 32,
    relevance: 87
  },
  {
    id: 4,
    title: "Cardiovascular Adaptation in Simulated Mars Gravity",
    authors: ["Martinez, R.", "Lee, H.", "Thompson, D."],
    year: 2024,
    institution: "Glenn Research Center",
    abstract: "Study of cardiovascular system responses to Mars-equivalent gravity (0.38g) in human subjects using partial gravity analogs over 30-day periods.",
    keywords: ["Cardiovascular", "Mars Simulation", "Partial Gravity", "Countermeasures"],
    citations: 28,
    relevance: 84
  },
  {
    id: 5,
    title: "Plant Growth Optimization in Lunar Regolith Simulant",
    authors: ["Davis, K.", "White, J."],
    year: 2023,
    institution: "Langley Research Center",
    abstract: "Analysis of plant growth parameters and nutrient uptake in various lunar regolith simulant compositions with biological amendments.",
    keywords: ["Plant Biology", "Lunar Agriculture", "ISRU", "Life Support"],
    citations: 41,
    relevance: 79
  }
]

function ResultsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState(mockResults)
  const [sortBy, setSortBy] = useState<'relevance' | 'citations' | 'year'>('relevance')

  useEffect(() => {
    const sorted = [...mockResults].sort((a, b) => {
      if (sortBy === 'relevance') return b.relevance - a.relevance
      if (sortBy === 'citations') return b.citations - a.citations
      if (sortBy === 'year') return b.year - a.year
      return 0
    })
    setResults(sorted)
  }, [sortBy])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Header */}
      <header className="border-b border-blue-800/30 backdrop-blur-xl bg-slate-950/50 sticky top-0 z-50">
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
          </button>
          <nav className="flex items-center space-x-6 text-white text-sm">
            <button onClick={() => router.push('/')} className="hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => router.push('/search')} className="hover:text-blue-400 transition-colors">Search</button>
            <button onClick={() => router.push('/about')} className="hover:text-blue-400 transition-colors">About</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Back Button & Query Info */}
          <div className="mb-8">
            <Button
              onClick={() => router.push('/search')}
              variant="ghost"
              className="text-blue-400 hover:text-blue-300 mb-4"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Search
            </Button>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Search Results</h2>
                <p className="text-slate-400">
                  Found <span className="text-blue-400 font-semibold">{results.length} publications</span> for "{query}"
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-slate-400 text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none"
                >
                  <option value="relevance">Relevance</option>
                  <option value="citations">Citations</option>
                  <option value="year">Year</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="space-y-6">
            {results.map((result) => (
              <Card key={result.id} className="p-6 bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400 cursor-pointer transition-colors">
                      {result.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-slate-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{result.authors.join(', ')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{result.year}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Building className="w-4 h-4" />
                        <span>{result.institution}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2 ml-4">
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                      {result.relevance}% Match
                    </Badge>
                    <div className="flex items-center space-x-1 text-slate-400 text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span>{result.citations} citations</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {result.abstract}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {result.keywords.map((keyword, idx) => (
                      <Badge key={idx} variant="outline" className="border-slate-600 text-slate-400">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Full Paper
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading results...</div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  )
}
