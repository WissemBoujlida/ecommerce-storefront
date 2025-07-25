import Link from "next/link";

import { Container } from "@/components/ui/container";
import { MainNav } from "@/components/main-nav";
import { NavbarActions } from "@/components/navbar-actions";
import { getCategories } from "@/actions/get-categories";

export const Navbar = async () => {
  const categories = await getCategories();
  return (
    <nav>
      <div className="border-b border-neutral-200">
        <Container>
          <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
              <p className="capitalize font-bold text-xl">store</p>
            </Link>
            <MainNav data={categories} />
            <NavbarActions />
          </div>
        </Container>
      </div>
    </nav>
  );
};
