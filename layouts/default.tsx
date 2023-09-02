import { Navbar } from "@/components/navbar";
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
