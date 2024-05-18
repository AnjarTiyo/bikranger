import { NextRequest, NextResponse } from "next/server"

// dummy data for motors
type Motor = {
    id: number
    name: string    
    manufacturer: string
    cc: number
    price: number
    image: string
    description: string
    isAvailable: boolean
}

export const motors: Motor[] = [
    {
        id: 1,
        name: 'Motor 1',
        manufacturer: 'Honda',
        cc: 150,
        price: 1000,
        image: 'https://via.placeholder.com/150',
        description: 'Description 1',
        isAvailable: true
    },
    {
        id: 2,
        name: 'Motor 2',
        manufacturer: 'Yamaha',
        cc: 150,
        price: 2000,
        image: 'https://via.placeholder.com/150',
        description: 'Description 2',
        isAvailable: false
    }
]

export async function GET(request: NextRequest) {
    try {
        // 1. Prisma Query findMany, replace current mock
        const data = motors //TODO change to query db

        const totalCount = await data.length
        const totalPages = Math.ceil(totalCount / 10)

        // return not found if motor list is empty
        if(data.length < 1){
            return NextResponse.json({
                message: 'List motor not found',
                metadata: {
                    totalCount,
                    totalPages
                },
                data: []
            },{status:404}
        )}

        // return data
        return NextResponse.json({
            message: 'Get list motors success',
            metadata: {
                totalCount,
                totalPages
            },
            data
        })
    } catch (error) {
        console.log(error);
        
        return NextResponse.json(
            { 
                message: 'Get list motors error',
                reason: (error as Error).message
            }, 
            { status: 500 }
        )
    }
}