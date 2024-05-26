import React from 'react'
import Link from 'next/link'
import { MountainIcon, ShoppingCartIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Header() {
    return (
        <>
            <header className="flex justify-between h-20 w-full shrink-0 items-center px-4 md:px-6">
                <Link className="flex items-center justify-center mr-6" href="/">
                    <MountainIcon className="h-6 w-6" />
                    <span className="sr-only">Bikranger</span>
                </Link>
                <nav className="hidden lg:flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium  underline-offset-4" href="/motors">
                        <Button variant="ghost" className='hover:bg-black hover:text-white'>Motors</Button>
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/orders">
                        <Button variant="ghost" className='hover:bg-black hover:text-white'>Orders</Button>
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        <Button variant="ghost" className='hover:bg-black hover:text-white'>Pricing</Button>
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        <Button variant="ghost" className='hover:bg-black hover:text-white'>About</Button>
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        <Button variant="ghost" className='hover:bg-black hover:text-white'>Contact</Button>
                    </Link>
                </nav>
                <div className="ml-auto flex items-center gap-4">
                    <SignedOut>
                        <SignInButton>
                            <Button variant="default" className='hover:bg-white hover:text-black hover:shadow-md'>Sign in</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <div className='flex gap-4'>
                            <Link href={'/admin/dashboard'}>
                                <Button className='hover:bg-white hover:text-black hover:shadow-md'>Go to Admin Dashboard</Button>
                            </Link>
                            <UserButton />
                        </div>
                    </SignedIn>
                </div>
            </header>
        </>
    )
}