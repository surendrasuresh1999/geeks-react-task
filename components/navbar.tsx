import {
	Link,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/react";
import Image from 'next/image';
import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { useState } from "react";

export const Navbar = () => {
	const[activeIndex, setActiveIndex] = useState(1)
		
	return (
		<NextUINavbar maxWidth="xl" className="z-50 sticky top-0 py-3 md:py-5">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand className="gap-3 max-w-fit">
					<NextLink href="/">
					<Image
						src="https://geeksinvention.com/assets/v2/content/geeks-logo-white.svg"
						alt="Geeks Invention Logo"
						width={220}
						height={100}
					/>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

      		<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
			  	<div className="hidden lg:flex gap-8 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={`${activeIndex === item.id ? "border-b-1.5 text-orange-600" : "text-white"} hover:border-b-1.5 hover:text-orange-600 border-b-orange-600 font-semibold tracking-wider `}
								href=""
								onClick={()=>setActiveIndex(item.id)}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</div>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle />
      		</NavbarContent>

      		<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								className={`${activeIndex === item.id ? "border-b-1.5 text-orange-600" : "text-white"} hover:border-b-1.5 hover:text-orange-600 border-b-orange-600 font-semibold tracking-wider `}
								onClick={()=>setActiveIndex(item.id)}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
