import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, MessageCircle, Mail, HelpCircle } from "lucide-react"

export default function SupportPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Support Center</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get help with Gasio Protocol. We're here to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Contact Us</CardTitle>
              <CardDescription className="text-white/70">
                Send us a message and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Name</label>
                <Input
                  placeholder="Your name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Subject</label>
                <Input
                  placeholder="How can we help?"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Message</label>
                <Textarea
                  placeholder="Describe your issue or question..."
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Support Options */}
          <div className="space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <MessageCircle className="w-8 h-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">Live Chat</CardTitle>
                <CardDescription className="text-white/70">Chat with our support team in real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Mail className="w-8 h-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">Email Support</CardTitle>
                <CardDescription className="text-white/70">Send us an email for detailed assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-purple-300">support@gasio.protocol</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <HelpCircle className="w-8 h-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">FAQ</CardTitle>
                <CardDescription className="text-white/70">Find answers to commonly asked questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <details className="text-white/80">
                    <summary className="cursor-pointer hover:text-white">How do I stake GASIO tokens?</summary>
                    <p className="mt-2 text-white/60">Connect your wallet and navigate to the staking section...</p>
                  </details>
                  <details className="text-white/80">
                    <summary className="cursor-pointer hover:text-white">What are the transaction fees?</summary>
                    <p className="mt-2 text-white/60">
                      Gasio offers ultra-low fees averaging $0.0001 per transaction...
                    </p>
                  </details>
                  <details className="text-white/80">
                    <summary className="cursor-pointer hover:text-white">How do I participate in governance?</summary>
                    <p className="mt-2 text-white/60">Hold GASIO tokens and visit our governance portal...</p>
                  </details>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Community Support</h3>
          <p className="text-white/70 mb-6">Join our community for peer-to-peer support and discussions</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              Discord Community
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              Telegram Group
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
