import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'

type Props = {
    motorId: string
    imageUrl: string
    motorName: string
    motorType: string
    transmission: string
    price: number
}

export default async function MotorCard({ motorId, imageUrl, motorName, motorType, transmission, price }: Props) {
    return (
        <Card className="border rounded-lg overflow-hidden">

            <div className="p-1/2">
                <CardHeader>
                    <div className="aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded-md">
                        <Image
                            alt={`Motorbike ${motorName}`}
                            className="object-contain p-6 hover:scale-105"
                            height={300}
                            src={!imageUrl ? "/pcx.png" : imageUrl}
                            style={{
                                aspectRatio: "300/300",
                                objectFit: "cover",
                            }}
                            width={300}
                        />
                    </div>
                    <div className='space-y-2'>
                        <CardTitle className='mt-4'>{motorName}</CardTitle>
                        <CardDescription>{motorType} | {transmission}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-xl font-bold">IDR {price / 1000}K/day</p>
                </CardContent>
                <CardFooter className='flex justify-between'>
                    <Link href={`/motors/${motorId}`}>
                        <Button>View Details</Button>
                    </Link>
                    <Button variant="outline">Order Now</Button>
                </CardFooter>
            </div>
        </Card>

    )
}