import MotorCard from "@/components/custom/motor-card";
import SearchMotor from "@/components/custom/search_motor";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { getListMotor } from "@/utils/api/motor";
import { ChevronRightIcon, MountainIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function Home() {
  const motorLists = await getListMotor();

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Explore the City on Two Wheels
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Rent the perfect motorbike for your next adventure. Browse our selection and book your ride today.
                </p>
              </div>
              <SearchMotor />
            </div>
            <Image
              alt="Motorbikes"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square hover:scale-105"
              height="550"
              src="/pcx.png"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {motorLists.data && motorLists.data.length > 0 ? (
              motorLists.data.map((motor: any) => (
                <MotorCard
                  key={motor.id}
                  motorId={motor.id}
                  isInOrder={false}
                />
              ))
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">
                No motors available.
              </p>
            )}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get answers to the most common questions about our motorbike rental service.
              </p>
            </div>
            <div className="grid gap-4">
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between rounded-lg bg-gray-100 p-4 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                  What do I need to rent a motorbike?
                  <ChevronRightIcon className="h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 text-gray-500 dark:text-gray-400">
                  To rent a motorbike, you will need a valid driver license, a credit or debit card for the deposit, and a valid ID. You will also need to be at least 18 years old.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between rounded-lg bg-gray-100 p-4 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                  How do I book a motorbike?
                  <ChevronRightIcon className="h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 text-gray-500 dark:text-gray-400">
                  You can book a motorbike online through our website. Simply choose your desired location, dates, and bike type, and we will show you available options. You can then complete the booking and payment process online.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between rounded-lg bg-gray-100 p-4 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                  What is included in the rental price?
                  <ChevronRightIcon className="h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 text-gray-500 dark:text-gray-400">
                  The rental price includes the motorbike, a helmet, and basic insurance coverage. You will also get a map of the local area and recommendations for the best routes and attractions.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between rounded-lg bg-gray-100 p-4 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                  Can I return the motorbike early?
                  <ChevronRightIcon className="h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 text-gray-500 dark:text-gray-400">
                  Yes, you can return the motorbike early if needed. However, we don’t offer any refunds for unused rental days. Please let us know as soon as possible if you need to return the bike early.
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
