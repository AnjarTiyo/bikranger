'use client'
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon, Calendar, Cog, Factory } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    motorId: string
}

export default function MotorDetailPage({ motorId }: Props) {
    const router = useRouter();

    return (
        <>
            <main className="flex-1 overflow-auto">
                <div className="container px-4 md:px-6 py-8 md:py-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="border rounded-lg overflow-hidden">
                            <Image
                                alt="Motorbike"
                                className="aspect-square object-cover hover:scale-105"
                                height={600}
                                src="/pcx.png"
                                width={600}
                            />
                        </div>
                        <div className="grid gap-6">
                            <div>
                                <h1 className="text-3xl font-bold">Honda PCX160</h1>
                                <p className="mt-3 flex text-gray-500 gap-2 dark:text-gray-400"><Factory/> Honda</p>
                                <p className=" mt-3 flex text-gray-500 gap-2 dark:text-gray-400"><Calendar/> 2022</p>
                                <p className="mt-3 flex text-gray-500 gap-2 dark:text-gray-400"><Cog/> 6-Speed Manual</p>
                            </div>
                            <div className="prose">
                                <p>
                                    The Honda CBR600RR is a high-performance sport bike that delivers exhilarating power and precise
                                    handling. With its sleek design, advanced technology, and race-inspired performance, this motorcycle
                                    is a true icon in the sport bike category.
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-500 dark:text-gray-400">Availability: In Stock</p>
                                <div className="flex gap-2">
                                    <Button variant="outline" onClick={() => router.back()}>
                                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                                        Back
                                    </Button>
                                    <Button>Order Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}