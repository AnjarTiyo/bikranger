import React from 'react'
import Link from 'next/link'
import { MountainIcon, ShoppingCartIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { auth } from '@clerk/nextjs/server'
import { UserButton } from '@clerk/nextjs'

export default function Header() {
    const { userId } = auth()
    let isAuth = !!userId

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
                    {!isAuth ?
                        <>
                            <Link href="/sign-up">
                                <Button variant="outline" className='hover:bg-black hover:text-white'>Sign Up</Button>
                            </Link>
                            <Link href="/sign-in">
                                <Button variant="default" className='hover:bg-white hover:text-black'>Sign In</Button>
                            </Link>
                        </>
                        :
                        <>
                            <Link href="/admin">
                                <Button variant="outline" className='hover:bg-black hover:text-white'>Go to Admin Dashboard</Button>
                            </Link>
                            <UserButton afterSignOutUrl='/' />
                        </>
                    }
                </div>
            </header>
        </>
    )
}