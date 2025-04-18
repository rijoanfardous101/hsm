import Link from "next/link";
import { cn } from "@/lib/utils"; // Adjust the import path based on your project structure

export default function NextButton({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) {
  return (
    <div className="flex justify-center">
      <Link href={href}>
        <div
          className={cn(
            "inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium transition-colors my-6",
            className
          )}
        >
          {text}
        </div>
      </Link>
    </div>
  );
}
