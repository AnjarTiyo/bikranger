import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

type Props = {}

export default function OrderPage({ }: Props) {
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
          <div className="border rounded-lg overflow-hidden p-6 md:p-8">
            <form className="grid gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Enter your city" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="motorbike">Motorbike</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a motorbike" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="honda">Honda</SelectItem>
                      <SelectItem value="yamaha">Yamaha</SelectItem>
                      <SelectItem value="suzuki">Suzuki</SelectItem>
                      <SelectItem value="kawasaki">Kawasaki</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input id="duration" placeholder="Enter duration in days" type="number" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="identity">Upload Identity</Label>
                <Input id="identity" type="file" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickup">Pick up Location</Label>
                <Input id="pickup" placeholder="Enter pick up location" />
              </div>
              <Button className="w-full" type="submit">
                Place Order
              </Button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}