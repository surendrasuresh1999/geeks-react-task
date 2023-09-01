import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import Footer from "@/components/footer";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Head />
			<Navbar />
			<main>
				{children}
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}
