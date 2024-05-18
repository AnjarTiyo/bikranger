import { NextRequest, NextResponse } from "next/server";
import { motors } from "../motors/route";

// dummy data for branchs
const branchs = [
    {
        id: '1',
        name: 'Branch 1',
        address: 'Address 1',
        motorsList: [
            ...motors
        ],
        motorsCount: motors.length
    },
    {
        id: '2',
        name: 'Branch 2',
        address: 'Address 2',
        motorsList: [
            ...motors
        ],
        motorsCount: motors.length
    }
]

export async function GET(request: NextRequest){
    try {
        const data = branchs //TODO change to query db

        const totalCount = data.length
        const totalPages = Math.ceil(totalCount / 10)

        return NextResponse.json({
            message: 'Get list branchs success',
            metadata: {
                totalCount,
                totalPages
            },
            data
        })
    } catch (error) {
        
    }
}