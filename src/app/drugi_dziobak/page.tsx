import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Button</Button>
}
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

export default function DrugiDziobak() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="m-10 text-2xl ">Najsławniejszy dziobak na świecie</h1>
        <Image
           alt="dziobak"
           src="/pepe2.jpg"
           width={800}
           height={600}
        ></Image>
          <Button className="m-2" asChild>
            <Link href="/StronaGlowna">Strona Głowna</Link>
          </Button>
          <Pagination className="m-2">
  <         PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="dziobak" />
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
                <PaginationNext href="/dziobak" />
              </PaginationItem>
             </PaginationContent>
          </Pagination>
    </main>
  );
}