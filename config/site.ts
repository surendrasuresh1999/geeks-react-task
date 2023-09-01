export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
	{
		id:1,
		label: "HOME",
		href: "/",
	},
    {
	  id:2,
      label: "WORKS",
      href: "/works",
    },
    {
		id:3,
      label: "TECHNOLOGIES",
      href: "/technologies",
    },
    {
		id:4,
      label: "SERVICES",
      href: "/services",
    },
    {
		id:5,
      label: "COMPANY",
      href: "/company",
    },
	{
		id:6,
		label: "CONTACTS",
		href: "/contacts",
	  }
	],
};
