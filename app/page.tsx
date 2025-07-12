import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, Globe, TrendingUp, Users, Coins } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-white text-xl font-bold">Gasio</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-white/80 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#tokenomics" className="text-white/80 hover:text-white transition-colors">
              Tokenomics
            </Link>
            <Link href="#roadmap" className="text-white/80 hover:text-white transition-colors">
              Roadmap
            </Link>
            <Link href="/whitepaper" className="text-white/80 hover:text-white transition-colors">
              Whitepaper
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              Connect Wallet
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Buy GASIO
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
            Next Generation DeFi Protocol
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future of
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Gas-Efficient
            </span>
            <br />
            Transactions
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Gasio revolutionizes blockchain transactions with ultra-low fees, lightning-fast speeds, and unparalleled
            security. Experience the next evolution of decentralized finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              Read Whitepaper
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">$2.5M+</div>
              <div className="text-white/60">Total Value Locked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-white/60">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">0.001s</div>
              <div className="text-white/60">Transaction Speed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">$0.0001</div>
              <div className="text-white/60">Average Gas Fee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Gasio?</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Built with cutting-edge technology to solve the biggest challenges in DeFi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Zap className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Lightning Fast</CardTitle>
                <CardDescription className="text-white/70">
                  Process thousands of transactions per second with sub-millisecond confirmation times
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Shield className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Ultra Secure</CardTitle>
                <CardDescription className="text-white/70">
                  Military-grade encryption and multi-layer security protocols protect your assets
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Coins className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Minimal Fees</CardTitle>
                <CardDescription className="text-white/70">
                  Revolutionary gas optimization reduces transaction costs by up to 99%
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Globe className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Cross-Chain</CardTitle>
                <CardDescription className="text-white/70">
                  Seamlessly interact with multiple blockchains through our unified protocol
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Community Driven</CardTitle>
                <CardDescription className="text-white/70">
                  Decentralized governance puts the power in the hands of token holders
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Yield Farming</CardTitle>
                <CardDescription className="text-white/70">
                  Earn passive income through our innovative staking and liquidity mining programs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Tokenomics</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Carefully designed token distribution for sustainable growth and community rewards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                <span className="text-white">Total Supply</span>
                <span className="text-purple-400 font-bold">1,000,000,000 GASIO</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                <span className="text-white">Circulating Supply</span>
                <span className="text-purple-400 font-bold">250,000,000 GASIO</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                <span className="text-white">Market Cap</span>
                <span className="text-purple-400 font-bold">$12,500,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                <span className="text-white">Current Price</span>
                <span className="text-purple-400 font-bold">$0.05</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Token Distribution</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Public Sale (25%)</span>
                  <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-1/4 h-full bg-purple-500"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Team & Advisors (20%)</span>
                  <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-1/5 h-full bg-pink-500"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Ecosystem Fund (30%)</span>
                  <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/10 h-full bg-blue-500"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Liquidity Mining (15%)</span>
                  <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/20 h-full bg-green-500"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Reserve (10%)</span>
                  <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-1/10 h-full bg-yellow-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Roadmap</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Our journey to revolutionize decentralized finance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Badge className="w-fit bg-green-500/20 text-green-300 border-green-500/30 mb-4">
                  Q1 2024 - Complete
                </Badge>
                <CardTitle className="text-white">Foundation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-white/70 space-y-2">
                  <li>• Core protocol development</li>
                  <li>• Smart contract audits</li>
                  <li>• Testnet launch</li>
                  <li>• Community building</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Badge className="w-fit bg-blue-500/20 text-blue-300 border-blue-500/30 mb-4">
                  Q2 2024 - In Progress
                </Badge>
                <CardTitle className="text-white">Launch</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-white/70 space-y-2">
                  <li>• Mainnet deployment</li>
                  <li>• DEX listings</li>
                  <li>• Staking platform</li>
                  <li>• Mobile app beta</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Badge className="w-fit bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
                  Q3 2024 - Upcoming
                </Badge>
                <CardTitle className="text-white">Expansion</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-white/70 space-y-2">
                  <li>• Cross-chain bridges</li>
                  <li>• Governance launch</li>
                  <li>• Partnership integrations</li>
                  <li>• Yield farming v2</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Badge className="w-fit bg-orange-500/20 text-orange-300 border-orange-500/30 mb-4">
                  Q4 2024 - Future
                </Badge>
                <CardTitle className="text-white">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-white/70 space-y-2">
                  <li>• Layer 2 solutions</li>
                  <li>• NFT marketplace</li>
                  <li>• Enterprise adoption</li>
                  <li>• Global expansion</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">G</span>
                </div>
                <span className="text-white text-lg font-bold">Gasio</span>
              </div>
              <p className="text-white/60">The future of gas-efficient blockchain transactions.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Protocol</h4>
              <ul className="space-y-2 text-white/60">
                <li>
                  <Link href="/whitepaper" className="hover:text-white transition-colors">
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-white/60">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-white/60">
                <li>
                  <Link href="/support" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Gasio Protocol. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
