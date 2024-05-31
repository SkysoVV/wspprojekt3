import { Button } from "@/components/ui/button"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24  ">

        <h1 className='text-3xl m-2'>Jakub Ossowski</h1>
        <h2>Nr albumu: 119200</h2>

        <div className="p-5 m-2">
          <Button className="m-2" asChild>
             <Link href="/dziobak">Dziobaki</Link>
          </Button>

        </div>
      
    </main>
  );
}
