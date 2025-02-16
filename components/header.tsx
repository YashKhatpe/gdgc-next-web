// import Link from "next/link";
// import Image from "next/image";

// import { NavItem } from "@/components/nav-item";
// import { MobileNavbar } from "@/components/mobile-navbar";
// import { MobileNavItem } from "@/components/mobile-nav-item";
// import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { Grid } from "@/components/grid";
import { Text } from "@/components/text";
import { List } from "@/components/list";


export function Header() {
  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <Icon href="/" className="items-center gap-3">
        {/* <Grid href="/" label="GDGC" src="/images/favicongdgc.webp" alt="Image" width={48} height={49} /> */}
        <nav className="font-bold text-gray-500 ">sed lorem elit lorem elit</nav>
      </Icon>
      <aside className="flex-row  gap-10">
        <header className="hidden items-center gap-10 md:flex ">
          {/* <Grid href="/about" label="About" />
          <Grid href="/blog" label="Events" />
          <Grid href="/docs" label="Team" /> */}
        </header>
      </aside>
      <Text>
        <aside className="rounded-b-lg bg-blue-500 p-2 container text-green-500 shadow-xl">
          <header className="justify-center items-start gap-1 pt-2">
            <List href="/about" label="About" />
            <List href="/docs" label="Docs" />
            <List href="/blog" label="Blog" />
            <List href="/pricing" label="Pricing" />
            <Text size="lg" asChild className="mt-2 w-1/4">
              <Icon href="#" className="cursor-pointer">
                sit sed
              </Icon>
            </Text>
          </header>
        </aside>
      </Text>
    </header>
  );
}