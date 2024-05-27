import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

type Props = {
    motorId: string
}

export default function ButtonOrder({ motorId }: Props) {
    return (
        <>
            <Link href={{
                pathname: `/orders`,
                query: { motor_id: motorId }
            }}>
                <Button type='submit' className='bg-white text-black hover:bg-black hover:text-white border-black border shadow-sm '>Order Now</Button>
            </Link>
        </>
    )
}