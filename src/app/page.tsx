import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const imageUrl = "/varian-warna-pcx160-matte-brown-700x700-tr-21112023-055335.png";

  return (
    <div className="w-screen min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-9000">
      <div className='flex flex-col p-4'>
        <div className='flex flex-row h-[60vh]' id='Highlight Bike'>
          <div className='w-4/12 mx-4'>
            <h3 className="text-4xl text-black my-2">Berkendara dengan Nyaman</h3>
            <p className="text-gray-500 text-justify my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit exercitationem qui maiores dolorem aliquid tempora perspiciatis aperiam voluptates consequuntur, sint corrupti eligendi voluptas? Mollitia iusto perspiciatis hic deleniti, consequuntur nesciunt!</p>
            <Button>Sewa Sekarang</Button>
          </div>
          <Image src={imageUrl}alt="bike" width={500} height={500}/>
        </div>
        <div className="w-full bg-slate-900 text-white rounded-3xl">List Bike</div>
      </div>
    </div>
  );
}
