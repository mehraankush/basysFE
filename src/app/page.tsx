import Link from 'next/link'

import { Button } from "@/components/ui/button"
import Footer from '@/components/common/Footer'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { BarChart, Calendar, User } from 'lucide-react'

export default function EnhancedLandingPage() {
  return (
    
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Revolutionize Your Healthcare Management
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline patient care, optimize appointments, and gain valuable insights with our comprehensive dashboard solution.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/dashboard" passHref>
              <Button size="lg" className="bg-black">Get Started</Button>
            </Link>
            <Button size="lg" variant="outline">Watch Demo</Button>
          </div>
        </section>

        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-blue-500" />
                  <span>Patient Management</span>
                </CardTitle>
                <CardDescription>Efficiently manage patient records</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Keep track of all registered patients, their status, and medical history with our intuitive interface.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost">Learn More</Button>
              </CardFooter>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-green-500" />
                  <span>Appointment Scheduling</span>
                </CardTitle>
                <CardDescription>Streamline your appointment process</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Schedule and manage appointments with ease, reducing wait times and improving patient satisfaction.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost">Learn More</Button>
              </CardFooter>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart className="h-5 w-5 text-purple-500" />
                  <span>Analytics</span>
                </CardTitle>
                <CardDescription>Gain insights into your practice</CardDescription>
              </CardHeader>
              <CardContent>
                <p>View detailed analytics and reports to improve your healthcare services and make data-driven decisions.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}