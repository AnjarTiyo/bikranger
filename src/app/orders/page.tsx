import MotorCard from '@/components/custom/motor-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { getDetailMotor } from '@/utils/api/motor'
import Link from 'next/link'
import React from 'react'

type Props = {
  searchParams: {
    motor_id: string
  }
}

export default async function OrderPage({ searchParams }: Props) {
  const motor = await getDetailMotor(searchParams.motor_id);
  let motorSelected = true

  if (!motor.data.id) {
    motorSelected = false
  }

  return (
    <>
      <main className="flex-1 overflow-auto">
        <div className="container px-4 md:px-6 py-8 md:py-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Order Form</h1>
              <p className="text-gray-500 dark:text-gray-400">Fill out the form to place your order.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 border rounded-lg overflow-hidden p-6 md:p-8">
            <div className='min-w-[30%]'>
              {
                motorSelected ? (
                  <MotorCard
                    motorId={motor.data.id}
                    isInOrder={true}
                  />
                ) : (
                  <div className='flex flex-col items-center text-lg outline h-full rounded-lg justify-center'>
                    <h2 className='text-center mx-8'>Motor not found.</h2>
                    <p className='text-center mx-8 mb-3'>Please select motor first</p>
                    <Link href='/motors' className='justify center'>
                      <Button>Click Here</Button>
                    </Link>
                  </div>
                )
              }

            </div>
            <div className='w-full'>
              <form className="grid gap-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Address</Label>
                    <Input id="city" placeholder="Enter your city" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="motorbike">Start Date</Label>
                    <Input id="start-date" type='datetime-local' />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">End Date</Label>
                    <Input id="duration" type="datetime-local" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="identity">Upload Identity</Label>
                  <Input id="identity" type="file" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="motorbike">Email</Label>
                    <Input id="start-date" placeholder='example@email.com' type='email' />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Phone Number</Label>
                    <Input id="duration" placeholder="+62xxxxxxxxxx" type="text" />
                  </div>
                </div>
                <Button className="w-full" type="submit">
                  Place Order
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}