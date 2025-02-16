import Link from "next/link";
import Image from "next/image";

export function Grid({ href, label, src, alt, width, height }: { href: string; label: string; src?: string; alt?: string, width?: number, height?: number }) {
  return (
    <Link href={href} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium">
      {src && <Image src={src} alt={alt || "icon"} width={width} height={height} />} {/* Image is optional */}
      {label}
    </Link>
  );
}
