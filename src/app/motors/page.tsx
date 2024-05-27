import MotorCard from '@/components/custom/motor-card'
import SearchMotor from '@/components/custom/search_motor'
import { Button } from '@/components/ui/button'
import { FilterIcon } from 'lucide-react'
import React from 'react'

type Props = {}

export default function MotorPage({ }: Props) {
    return (
        <>
            <main className="flex-1 overflow-auto">
                <div className="container px-4 md:px-6 py-8 md:py-12">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold">Motorbike Search</h1>
                            <p className="text-gray-500 dark:text-gray-400">Browse our selection of motorbikes.</p>
                        </div>
                        <Button className="flex items-center gap-2" size="sm" variant="outline">
                            <FilterIcon className="w-4 h-4" />
                            <span>Toggle Search</span>
                        </Button>
                    </div>
                    <div className="border rounded-lg overflow-hidden p-6 md:p-8">
                        <form className="grid gap-6">
                            <SearchMotor />
                        </form>
                    </div>
                </div>
                <div className="container px-4 md:px-6 py-8 md:py-12">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold">Motorbike Results</h1>
                            <p className="text-gray-500 dark:text-gray-400">Showing results for your search.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <MotorCard 
                            motorId="PCX160"
                            imageUrl="/pcx.png"
                            motorName="PCX160 2019"
                            motorType="Scooter"
                            transmission="AT"
                            price={200000}
                        />
                        <MotorCard
                            motorId="ADV160" 
                            imageUrl="/adv.png"
                            motorName="ADV160 2024"
                            motorType="Scooter"
                            transmission="AT"
                            price={225000}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}