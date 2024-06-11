import { Button } from "@/components/ui/button";
import { Ticket } from "./ticket";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function NicknameContainer({
  price,
  title,
  list,
  url,
  color,
}: {
  price: string;
  title: string;
  list: string[];
  url: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center bg-foreground/10 rounded-t-full rounded-b-md py-8">
      <Ticket price={price} color={color} />
      <div className="bg-black/30 w-full p-6 text-center capitalize mt-4">{title}</div>
      <ul className="space-y-2 w-full list-disc p-4">
        {list.map((l, index) => (
          <li key={index} className="mx-4 border-b">
            {l}
          </li>
        ))}
      </ul>
      <Button
        className={cn(
          "mt-4 bg-transparent border border-foreground text-foreground rounded-none hover:text-background",
          color
        )}
        asChild
      >
        <Link href={url}>Order Now</Link>
      </Button>
    </div>
  );
}
