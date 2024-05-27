'use client'
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, Calendar, Cog, Factory } from 'lucide-react';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function MotorDetailPage() {
  const router = useRouter();
  const { motor_id } = useParams(); // Get the motor_id from the URL
  const [motorDetail, setMotorDetail] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  console.log("motor_id", motor_id)

  useEffect(() => {
    const fetchMotorDetail = async () => {
      try {
        const response = await fetch(`/api/motors/${motor_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch motor details');
        }
        const data = await response.json();
        setMotorDetail(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (motor_id) {
      fetchMotorDetail();
    }
  }, [motor_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!motorDetail) {
    return <p>Motor not found</p>;
  }

  const { name, manufacturer, year, transmission, description, status, image } = motorDetail.data;

  return (
    <>
      <main className="flex-1 overflow-auto">
        <div className="container px-4 md:px-6 py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg overflow-hidden">
              <Image
                alt="Motorbike"
                className="aspect-square object-cover hover:scale-105 p-4"
                height={600}
                src={!image ? '/placeholder-motor.jpeg' : image}
                width={600}
              />
            </div>
            <div className="grid gap-6">
              <div>
                <h1 className="text-3xl font-bold">{name}</h1>
                {/* <p className="mt-3 flex text-gray-500 gap-2 dark:text-gray-400"><Factory /> {manufacturer}</p>
                <p className="mt-3 flex text-gray-500 gap-2 dark:text-gray-400"><Calendar /> {year}</p> */}
                <p className="mt-3 flex text-gray-500 gap-2 dark:text-gray-400"><Cog /> {transmission}</p>
              </div>
              
              <div className="prose ">
                <p>{description}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-500 dark:text-gray-400">Status: <strong className={
                  status === "AVAILABLE" ? "text-green-600" : "text-red-500"
                }>{status}</strong></p>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => router.back()}>
                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button>Order Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
