import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CyberButton({
  title,
  symbol,
  className,
  url,
}: {
  title: string;
  symbol: string;
  className?: string;
  url?: string;
}) {
  return (
    <button className={cn("cybr-btn", className)}>
      {url ? (
        <Link href={url} target="_blank" className="cursor-none">
          {title}
          <span aria-hidden>_</span>
          <span aria-hidden className="cybr-btn__glitch">
            {title}_
          </span>
          <span aria-hidden className="cybr-btn__tag">
            {symbol}
          </span>
        </Link>
      ) : (
        <>
          {title}
          <span aria-hidden>_</span>
          <span aria-hidden className="cybr-btn__glitch">
            {title}_
          </span>
          <span aria-hidden className="cybr-btn__tag">
            {symbol}
          </span>
        </>
      )}
    </button>
  );
}
