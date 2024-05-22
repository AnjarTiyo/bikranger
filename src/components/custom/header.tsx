import React from 'react'
import Link from 'next/link'
import { MountainIcon, ShoppingCartIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'

type Props = {}

export default function Header({ }: Props) {
    return (
        <>
            <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
                <Link className="flex items-center justify-center mr-6" href="/">
                    <MountainIcon className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <nav className="hidden lg:flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/motors">
                        Motors
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/orders">
                        Orders
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Pricing
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        About
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Contact
                    </Link>
                </nav>
                <div className="ml-auto flex items-center gap-2">
                    <Button className="rounded-full" size="icon" variant="ghost">
                        <Image
                            alt="Avatar"
                            className="rounded-full"
                            height="32"
                            src="/next.svg"
                            style={{
                                aspectRatio: "32/32",
                                objectFit: "cover",
                            }}
                            width="32"
                        />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </div>
            </header>
        </>
    )
}