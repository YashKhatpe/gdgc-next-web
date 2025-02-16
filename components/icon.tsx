import Link from "next/link";

export function Icon({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={`flex items-center ${className}`}>
      {children}
    </Link>
  );
}
