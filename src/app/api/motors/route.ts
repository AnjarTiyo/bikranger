import { prisma } from "@/utils/configs/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    try {
        const data = await prisma.motor.findMany({
            cacheStrategy: { ttl: 60 },
        })

        const totalCount = await data.length
        const totalPages = Math.ceil(totalCount / 10)

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

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const name = formData.get("name") as string;
        const description = formData.get("description") as string;
        const price = formData.get("price") as string;
        const status = formData.get("status") as string;
        const transmission = formData.get("transmission") as string;
        const category = formData.get("category") as string;
        const branch_id = formData.get("branch_id") as string;
        const owner_id = formData.get("owner_id") as string;
        const image = formData.get("image") as File;

    } catch (error) {
        console.log(error);
        
        return NextResponse.json(
            { 
                message: 'Create a motor error',
                reason: (error as Error).message
            }, 
            { status: 500 }
        )
    }
}