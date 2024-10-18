"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../ui/button'
import { UserNav } from '../core/Dashboard/user-nav'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

const Navbar = () => {
    const pathName = usePathname();
    const { data: session } = useSession();
    return (
        <header className={`border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 ${pathName === '/login' ? 'hidden' : 'block'}`}>
            <div className="container mx-auto px-4 py-3  flex justify-between items-cente">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo.webp"
                        width={100}
                        height={100}
                        alt="Logo"
                        className="h-9 w-[100px]"
                    />
                </Link>
                <nav className="space-x-4">
                    {
                        !session ? (
                            <Link href="/login">
                                <Button variant="outline">Login</Button>
                            </Link>
                        ) : (
                            <UserNav
                                session={session}
                            />
                        )

                    }
                </nav>
            </div>
        </header>
    )
}

export default Navbar