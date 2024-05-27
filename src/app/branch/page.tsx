import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { auth } from '@clerk/nextjs/server'
import { ArrowUpIcon, LineChart, BarChart } from 'lucide-react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function DashboardPage() {
  const { sessionClaims } = auth();

  // If the user does not have the admin role, redirect them to the home page
  if (sessionClaims?.metadata.role !== "admin" || "branch") {
    redirect("/");
  }

  return (
    <div className="flex-1 bg-gray-100/40 p-4 md:p-10 dark:bg-gray-800/40">
      <div className="mx-auto grid max-w-6xl gap-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Orders</CardTitle>
              <CardDescription>The total number of orders placed.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold">1,234</span>
                <ArrowUpIcon className="h-6 w-6 text-green-500" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">+5.2% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Revenue</CardTitle>
              <CardDescription>The total revenue generated from orders.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold">$123,456</span>
                <ArrowUpIcon className="h-6 w-6 text-green-500" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">+8.3% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>New Customers</CardTitle>
              <CardDescription>The number of new customers this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold">234</span>
                <ArrowUpIcon className="h-6 w-6 text-green-500" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">+12.7% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Returning Customers</CardTitle>
              <CardDescription>The number of returning customers this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold">789</span>
                <ArrowUpIcon className="h-6 w-6 text-green-500" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">+4.1% from last month</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Top Selling Products</CardTitle>
              <CardDescription>The best selling products this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      alt="Product"
                      className="rounded-md"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="font-medium">Product A</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                    </div>
                  </div>
                  <span className="font-medium">120 sold</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      alt="Product"
                      className="rounded-md"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="font-medium">Product B</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                    </div>
                  </div>
                  <span className="font-medium">90 sold</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      alt="Product"
                      className="rounded-md"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="font-medium">Product C</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                    </div>
                  </div>
                  <span className="font-medium">80 sold</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>The latest orders placed by customers.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      alt="Customer"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Order #123</p>
                    </div>
                  </div>
                  <span className="font-medium">$99.99</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      alt="Customer"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="font-medium">Jane Smith</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Order #124</p>
                    </div>
                  </div>
                  <span className="font-medium">$79.99</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      alt="Customer"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="font-medium">Bob Johnson</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Order #125</p>
                    </div>
                  </div>
                  <span className="font-medium">$59.99</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Customers</CardTitle>
              <CardDescription>The latest customers that have signed up.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      alt="Customer"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Joined 2 days ago</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      alt="Customer"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="font-medium">Jane Smith</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Joined 5 days ago</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      alt="Customer"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="font-medium">Bob Johnson</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Joined 10 days ago</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
              <CardDescription>A chart showing the sales trends over time.</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer Acquisition</CardTitle>
              <CardDescription>A chart showing the customer acquisition trends over time.</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}