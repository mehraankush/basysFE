import { TwitterLogoIcon } from '@radix-ui/react-icons'
import { Facebook, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="border-t mt-16 bg-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold mb-4">About Us</h3>
                        <p className="text-gray-600">Empowering healthcare professionals with innovative management solutions.</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Home</Link></li>
                            <li><Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
                            <li><Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-600 hover:text-gray-900">
                                <TwitterLogoIcon className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-gray-900">
                                <Facebook className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-gray-900">
                                <Linkedin className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-gray-600">
                    <p>&copy; 2024 Basys.ai. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer