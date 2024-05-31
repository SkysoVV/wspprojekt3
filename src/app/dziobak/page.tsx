import { Button } from "@/components/ui/button"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


import Image from "next/image";
import Link from "next/link";

export default function Dziobak() {
  return (
    <main className="flex flex-col items-center ">
        <h1 className="m-2 text-2xl">Ornithorhynchus anatinus (dziobak australijski po łacinie)</h1>
        <Image
           alt="dziobak"
           src="/poprostudziobak.jpg"
           width="800"
           height="600"

        ></Image>   
           <Button className="m-2" asChild>
             <Link href="/">Strona Głowna</Link>
           </Button>
           <Pagination className="m-2">
             <PaginationContent>
               <PaginationItem>
                 <PaginationPrevious href="/drugi_dziobak" />
               </PaginationItem>
               <PaginationItem>
                 <PaginationLink href="dziobak">1</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                 <PaginationLink href="/drugi_dziobak">2</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                 <PaginationEllipsis />
               </PaginationItem>
               <PaginationItem>
                 <PaginationNext href="/drugi_dziobak">2</PaginationNext> 
               </PaginationItem>
             </PaginationContent>
           </Pagination>
    </main>
  );
}
