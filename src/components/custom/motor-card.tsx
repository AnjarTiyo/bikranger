import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'
import { getDetailMotor } from '@/utils/api/motor'
import ButtonOrder from './button-order'

type Props = {
    motorId: string
    isInOrder: boolean
}

export default async function MotorCard({ motorId, isInOrder = false }: Props) {
    const motor = await getDetailMotor(motorId);

    return (
        <Card className="border rounded-lg overflow-hidden">
            <div className="p-1/2">
                <CardHeader>
                    <div className="aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded-md">
                        <Image
                            alt={`Motorbike ${motor.data.name}`}
                            className="object-contain p-6 hover:scale-105"
                            height={300}
                            src={!motor.data.image ? "/placeholder-motor.jpeg" : motor.data.image}
                            style={{
                                aspectRatio: "300/300",
                                objectFit: "cover",
                            }}
                            width={300}
                        />
                    </div>
                    <div className='space-y-2'>
                        <CardTitle className='mt-4'>{motor.data.name}</CardTitle>
                        <CardDescription>{motor.data.category} | {motor.data.transmission}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-xl font-bold">IDR {motor.data.price / 1000}K/day</p>
                </CardContent>
                <CardFooter className='flex justify-between'>
                    <Link href={`/motors/${motor.data.id}`}>
                        <Button>View Details</Button>
                    </Link>
                    {
                        !isInOrder &&
                        <ButtonOrder motorId={motor.data.id}/>
                    }
                </CardFooter>
            </div>
        </Card>

    )
}