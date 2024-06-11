import { cn } from "@/lib/utils";

export function Ticket({ price, color }: { price: string; color: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-40 h-40 rounded-full",
        color
      )}
    >
      <h1 className="text-5xl font-medium">{price}</h1>
    </div>
  );
}
