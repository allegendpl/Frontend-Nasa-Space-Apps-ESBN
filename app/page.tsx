"use client"

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
// Lucide icons
import { FileText, Calendar, Users, Building, ExternalLink, TrendingUp, ChevronLeft } from 'lucide-react'

// --- Mock UI Components for Single-File Context (Required to run) ---
// Note: In a real Next.js/shadcn environment, you would import these from '@components/ui/...'

const Card = ({ children, className }) => (
  <div className={`rounded-xl shadow-xl ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, className }) => (
  <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${className}`}>
    {children}
  </span>
);

// We'll mock the Button for the final "View Full Paper" button as well
const Button = ({ children, className, onClick }) => (
  <button onClick={onClick} className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 rounded-lg ${className}`}>
    {children}
  </button>
);

// --- Mock Data (Results Content) ---

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

// --- Main Component Definition (ResultsContent is defined here) ---
function ResultsContent() {
  // Mock implementations for Next.js hooks if not running in a real environment
  const router = { push: (path) => console.log(`Navigating to: ${path}`) };
  const searchParams = { get: (key) => key === 'q' ? 'space biology' : null };
  
  // Replace these with actual hooks if running in Next.js:
  // const router = useRouter()
  // const searchParams = useSearchParams()
  
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
            {/* The custom back button implementation */}
            <div className="flex justify-start mb-4">
              <button
                onClick={() => router.push('/search')}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-2xl shadow-lg transition-all duration-200 flex items-center"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Go to New Search
              </button>
            </div>
            {/* End custom back button */}

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
                  onChange={(e) => setSortBy(e.target.value)}
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
                      <Badge key={idx} className="border-slate-600 text-slate-400 bg-transparent border">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    onClick={() => console.log(`Viewing full paper for: ${result.title}`)}
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

// --- Wrapper/Export Component (ResultsPage is defined last) ---

export default function ResultsPage() {
  return (
    // Suspense is used because useSearchParams is called inside ResultsContent
    // This allows Next.js to render the page while waiting for the search parameters.
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading search results...</div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  )
}

