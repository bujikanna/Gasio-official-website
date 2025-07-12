import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Book, Code, Zap, Shield } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-white text-xl font-bold">Gasio</span>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Documentation</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Everything you need to build on Gasio Protocol</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <Book className="w-12 h-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">Getting Started</CardTitle>
              <CardDescription className="text-white/70">
                Learn the basics of Gasio Protocol and how to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-white/60 space-y-2">
                <li>• Protocol Overview</li>
                <li>• Setting up Development Environment</li>
                <li>• First Transaction</li>
                <li>• Wallet Integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <Code className="w-12 h-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">API Reference</CardTitle>
              <CardDescription className="text-white/70">Complete API documentation for developers</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-white/60 space-y-2">
                <li>• REST API Endpoints</li>
                <li>• WebSocket Connections</li>
                <li>• Rate Limits</li>
                <li>• Authentication</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <Zap className="w-12 h-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">Smart Contracts</CardTitle>
              <CardDescription className="text-white/70">
                Deploy and interact with smart contracts on Gasio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-white/60 space-y-2">
                <li>• Contract Deployment</li>
                <li>• Gas Optimization</li>
                <li>• Security Best Practices</li>
                <li>• Testing Framework</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <Shield className="w-12 h-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">Security</CardTitle>
              <CardDescription className="text-white/70">Security guidelines and audit reports</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-white/60 space-y-2">
                <li>• Security Audits</li>
                <li>• Bug Bounty Program</li>
                <li>• Best Practices</li>
                <li>• Incident Response</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <Book className="w-12 h-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">Tutorials</CardTitle>
              <CardDescription className="text-white/70">Step-by-step guides for common use cases</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-white/60 space-y-2">
                <li>• Building a DApp</li>
                <li>• Token Integration</li>
                <li>• Staking Implementation</li>
                <li>• Cross-chain Bridges</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <Code className="w-12 h-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">SDKs & Tools</CardTitle>
              <CardDescription className="text-white/70">
                Development tools and software development kits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-white/60 space-y-2">
                <li>• JavaScript SDK</li>
                <li>• Python SDK</li>
                <li>• CLI Tools</li>
                <li>• Testing Suite</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-white/60 mb-4">Need help? Join our developer community</p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Join Discord
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              GitHub Repository
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
