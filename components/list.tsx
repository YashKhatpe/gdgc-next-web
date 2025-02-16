import Link from "next/link";

export function List({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-gray-600 hover:text-gray-900">
        {label}
      </Link>
    </li>
  );
}
