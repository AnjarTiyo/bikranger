import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function RentStatusPage({ }: Props) {
    return (
        <main className="flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center">
                <h1 className="font-semibold text-lg md:text-2xl">Bike Rentals</h1>
                

            </div>
            <div className='flex justify-between'>
                    <Input
                        placeholder="Filter emails..."
                        className="max-w-sm"
                    />
                    <Button className="ml-auto" size="sm">
                        Add Bike
                    </Button>
                </div>
            <div className="border shadow-sm rounded-lg mt-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Bike</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Rented By</TableHead>
                            <TableHead>Rental Date</TableHead>
                            <TableHead>Return Date</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="Bike"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src="/placeholder.svg"
                                        width="64"
                                    />
                                    <div>
                                        <p className="font-medium">Mountain Bike</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge variant={"default"}>Available</Badge>
                            </TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Button size="sm" variant="outline">
                                        Rent
                                    </Button>
                                    <Button size="sm" variant="outline">
                                        View
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="Bike"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src="/placeholder.svg"
                                        width="64"
                                    />
                                    <div>
                                        <p className="font-medium">Road Bike</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge variant={"outline"}>Rented</Badge>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="Customer"
                                        className="rounded-full"
                                        height="32"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "32/32",
                                            objectFit: "cover",
                                        }}
                                        width="32"
                                    />
                                    <div>
                                        <p className="font-medium">John Doe</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Order #123</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>2023-05-01</TableCell>
                            <TableCell>2023-05-08</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Button size="sm" variant="outline">
                                        Return
                                    </Button>
                                    <Button size="sm" variant="outline">
                                        View
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="Bike"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src="/placeholder.svg"
                                        width="64"
                                    />
                                    <div>
                                        <p className="font-medium">Electric Bike</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge variant={"destructive"}>Unavailable</Badge>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="Customer"
                                        className="rounded-full"
                                        height="32"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "32/32",
                                            objectFit: "cover",
                                        }}
                                        width="32"
                                    />
                                    <div>
                                        <p className="font-medium">Jane Smith</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Order #124</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>2023-05-05</TableCell>
                            <TableCell>2023-05-12</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Button size="sm" variant="outline">
                                        Return
                                    </Button>
                                    <Button size="sm" variant="outline">
                                        View
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="Bike"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src="/placeholder.svg"
                                        width="64"
                                    />
                                    <div>
                                        <p className="font-medium">Cruiser Bike</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge variant={"default"}>Available</Badge>
                            </TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Button size="sm" variant="outline">
                                        Rent
                                    </Button>
                                    <Button size="sm" variant="outline">
                                        View
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </main>
    )
}