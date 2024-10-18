import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { UserAuthForm } from "@/components/core/Login/user-auth-form"

export const metadata: Metadata = {
    title: "Authentication",
    description: "Login with Basys amnd start your journey.",
}

export default function AuthenticationPage() {
    return (
        <>
           
            <div className="container relative  h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">

                <div className="relative  h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-zinc-900" />
                    <div className="relative z-20 flex flex-col  h-full items-center text-lg font-medium">
                        <Link href="/" className="flex w-full justify-start space-x-2">
                            <Image
                                src="/logo.webp"
                                width={100}
                                height={100}
                                alt="Logo"
                                className="h-9 w-[100px]"
                            />
                        </Link>
                        <div className="flex items-center justify-center h-full">
                            <h1 className="text-white text-7xl font-semibold ">Basys.ai</h1>
                        </div>
                    </div>
                </div>

                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Create an account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email below to create your account
                            </p>
                        </div>
                        <UserAuthForm />

                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link
                                href="#"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="#"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}