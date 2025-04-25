// src/app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// Import other necessary components like Carousel, etc.

export default function Home() {
  return (
    <div className="min-h-screen bg-background max-w-[80rem] flex flex-col mx-auto pt-48">
      {" "}
      {/* Use Tailwind/your global styles */}
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Organize Nothing. Achieve Less.
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            A beautiful, minimalist space to plan your future breakdowns, skip
            deadlines, and feel <em>sort of</em> in control.
          </p>
          <Button size="lg" className="">
            {" "}
            {/* Example animation class */}
            Maybe Later
          </Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* Replace with your actual mascot image/GIF */}
          <div className="bg-background border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center">
            Mascot (Sloth/Person)
          </div>
        </div>
      </section>
      {/* Problem Section */}
      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">
            The Productivity Paradox
          </h2>
          <p className="text-lg mb-8">
            Modern productivity tools promise the world but deliver overwhelm.
            You spend more time organizing tasks than doing them.
          </p>
          <div className="flex justify-center space-x-8">
            {/* Icons - use Lucide React or inline SVG */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
              <span>Sleepy Alarm</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
              <span>Tab Overload</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
              <span>Empty List</span>
            </div>
          </div>
        </div>
      </section>
      {/* Solution Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            {/* Mockup Image/GIF Placeholder */}
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-80 flex items-center justify-center">
              ProcrastiNotion UI Mockup
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-semibold mb-4">
              The Anti-Productivity Suite
            </h2>
            <p className="text-lg mb-4">
              Features designed to help you feel productive without doing
              anything.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Infinite nesting. Zero progress.</li>
              <li>Dark Mode. Because why do anything in the light?</li>
              <li>Calendar, but empty. Just like your ambition.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Feature List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Features That Do Nothing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {/* Icon Placeholder */}
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2" />
                  Thought Capture (You'll never look at again)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Jot down brilliant ideas that will instantly be forgotten
                  forever.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {/* Icon Placeholder */}
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2" />
                  Calendar Sync (with events from 2017)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Never miss an important meeting that happened years ago.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {/* Icon Placeholder */}
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2" />
                  Dark Mode for Napping
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Dim the lights and embrace the inevitable afternoon nap.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {/* Icon Placeholder */}
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2" />
                  Infinite Subpages (Get lost, never come back)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create endless layers of organization that lead nowhere.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Lazy Testimonials - Simple version, replace with Carousel if needed */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What People Are Not Doing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <p className="italic mb-4">
                "I've planned 83 projects and started none."
              </p>
              <p className="font-medium">— Carl, Aspiring Procrastinator</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <p className="italic mb-4">
                "It replaced my to-do list app. I just open it and panic
                instead."
              </p>
              <p className="font-medium">— Lea, Overthinker</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <p className="italic mb-4">
                "It's like Notion and my anxiety had a baby and forgot to raise
                it."
              </p>
              <p className="font-medium">— Milo, procrastination maximalist</p>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-6">
            <div className="text-xs font-semibold px-3 py-1 bg-gray-200 rounded">
              SlackOff
            </div>
            <div className="text-xs font-semibold px-3 py-1 bg-gray-200 rounded">
              ZoomOut
            </div>
            <div className="text-xs font-semibold px-3 py-1 bg-gray-200 rounded">
              DropboxTheBall
            </div>
          </div>
        </div>
      </section>
      {/* Call To Inaction */}
      <section className="py-20 text-center relative overflow-hidden">
        {/* Animated Background Placeholder - Implement with Tailwind/Framer Motion */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-amber-100 opacity-50 animate-pulse"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join 42,069 people doing absolutely nothing. Together.
          </h2>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Maybe Later
          </Button>
        </div>
      </section>
      {/* Fake Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">ProcrastiNotion</h3>
            <p className="text-sm text-muted-foreground">
              The art of productive procrastination.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
            <a href="#" className="hover:underline">
              Terms of Service (you won't read)
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy (we collect dust)
            </a>
            <a href="#" className="hover:underline">
              Careers (We're not hiring)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
