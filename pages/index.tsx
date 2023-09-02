
import DefaultLayout from "@/layouts/default";
import { platformsData, dedicatedData, clientsData, techData } from "../data"
import Image from "next/image";


export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="lg:sticky lg:z-10 lg:top-0">
				<div className="bg-[url('https://geeksinvention.com/assets/v2/general/bg-index-intro-92b4c7f74791ac3a1483e0b8956615d7.png')] bg-center bg-no-repeat h-[100vh] flex justify-center items-center">
					<div>
						<h1 className="text-xl md:text-2xl lg:text-6xl text-white font-bold tracking-wide">
							EMBRACE THE FUTURE
						</h1>
						<p className="text-lg lg:text-3xl text-white text-center font-bold tracking-wide my-5">Welcome to the Age of Action</p>
					</div>
				</div>
			</section>

			<section className="lg:relative lg:z-20">
				<div>
					{
						techData.map((dataObj) => (
							<div
								className={
									dataObj.id === 1
										? "bg-[#3f2caa] py-10"
										: dataObj.id === 2
											? "bg-[#01b5ac] py-10"
											: "bg-[#19181e] py-10"
											
								}
								key={dataObj.id}
							>
								<div className="container mx-auto py-10">
									<div className="grid md:grid-cols-2 gap-x-10 lg:gap-x-20">
										<div className={`hidden md:block ${dataObj.id === 1 ? "order-1" : ""}`}>
											
											<img src={dataObj.url} className="h-full w-full" alt={dataObj.altText} />
										</div>
										<div className="px-5 flex flex-col justify-center items-center md:justify-start md:items-start">
											<h1 className="text-3xl font-semibold py-4 md:text-4xl lg:text-7xl">{dataObj.title}</h1>
											<p className="text-2xl py-3 font-semibold md:text-2xl lg:text-3xl">{dataObj.subTitle}</p>
											<div className="flex items-center flex-wrap gap-5 py-4">
												{dataObj.options.map((option: any) => (
													<button
														key={option.id}
														className={`py-2 px-4 rounded-full bg-[${option.bgColor}] border border-white`}
													>
														{option.title}
													</button>
												))}
											</div>
											<img
												src={dataObj.url}
												alt="mobile-device-image"
												className="py-6 h-full w-full block md:hidden"
											/>
											
											<p className="text-xl py-4 lg:py-8 text-justify font-semibold md:text-2xl lg:text-2xl">
												{dataObj.description}
											</p>
											<button className="my-7 hover:bg-white hover:text-black font-bold text-lg rounded-full border-white border py-4 px-6 tracking-wider text-white">
												{dataObj.btnText} &rarr;
											</button>
										</div>
									</div>
								</div>
							</div>
						))
					}
				</div>
			</section>

			<section className="relative z-[10] bg-[#16181c] px-5">

				<div className="container flex flex-col justify-center items-center mx-auto py-10 lg:py-20">
					<div className="max-w-[800px]">
						<h1 className="text-white font-semibold text-3xl md:text-5xl lg:text-5xl text-center tracking-wide py-6">Check out more works by Geeks Invention</h1>
						<p className="text-white text-base md:text-xl max-w-[750px] mx-auto text-center py-2 md:py-6">
							Our case studies describe design and development solutions implemented at our Geeks Invention projects. The stories are a
							valuable resource for those looking to develop their own mobile apps.
						</p>
					</div>
					<button className="my-7 hover:bg-orange-500 hover:text-white font-bold text-lg rounded-full border-orange-500 border py-4 px-6 tracking-wider text-orange-500">
						See all case studies &rarr;
					</button>
				</div>
				{/* receant clients section */}
				<div className="container flex flex-col justify-center items-center mx-auto py-10 lg:py-20">
					<div>
						<h1 className="text-white font-bold text-3xl md:text-5xl lg:text-7xl text-center tracking-wide py-6">Recent clients</h1>
						<p className="text-white text-base md:text-xl max-w-[800px] mx-auto text-center py-2 md:py-6">
							We worked with the Fortune 500 companies in the USA, Africa, UK, Middle East <br />
							World's 4th Strongest Banking Brand, Automobile & IoT industry
						</p>
					</div>
					<ul className="grid grid-cols-12 gap-8 py-10 lg:py-20">
						{clientsData.map((data) => (
							<li
								key={data.id}
								className="flex flex-col justify-center items-center py-10 col-span-12 md:col-span-6 lg:col-span-4 bg-[#2e3038] rounded-lg w-[100%]"
							>
								<div className="p-4 md:p-8">
									{/* <Image src={data.url} alt="clint-company-image" quality={100} height={50} width={50} className="w-[80%] mx-auto"/> */}
									<img className="mx-auto w-[80%]" src={data.url} alt="" />
									<h3 className="text-lg md:text-2xl py-8 font-medium text-white text-center tracking-wider">{data.title}</h3>
									<p className="text-justify font-medium text-base text-gray-300 font-sans py-2">{data.description}</p>
								</div>
							</li>
						))}
					</ul>
					<button className="my-4 self-center hover:bg-orange-500 hover:text-white font-bold text-lg rounded-full border-orange-500 border py-4 px-6 tracking-wider text-orange-500">
						See our tech stack &rarr;
					</button>
				</div>
				{/* modern platforms section */}
				<div className="container flex flex-col mx-auto py-10 lg:py-20">
					<div>
						<h1 className="text-white text-3xl md:text-5xl lg:text-7xl text-center tracking-wide py-6">Software for modern platforms</h1>
						<p className="text-white text-xl md:text-2xl lg:text-3xl text-center py-2 md:py-6">We develop applications for mobile, web, wearables, and TV.</p>
					</div>
					<ul role="list" className="grid grid-cols-12 gap-8 pt-10 lg:pt-20">
						{platformsData.map((data) => (
							<li
								key={data.id}
								className="col-span-6 md:col-span-4 lg:col-span-2"
							>
								<div className="p-4 md:p-8">
									<Image src={data.url} alt="device-image" height={80} width={80} className="h-24 w-24 md:h-32 md:w-32 mx-auto"/>
									<p className="text-lg md:text-2xl py-8 font-medium text-white text-center tracking-wider">{data.title}</p>
								</div>
							</li>
						))}
					</ul>
					<button className="my-4 self-center hover:bg-orange-500 hover:text-white font-bold text-lg rounded-full border-orange-500 border py-4 px-6 tracking-wider text-orange-500">
						See our tech stack &rarr;
					</button>
				</div>
				{/* dedicated team section */}
				<div className="container flex flex-col mx-auto py-10 lg:py-28">
					<div>
						<h1 className="text-white text-2xl md:text-5xl lg:text-7xl text-center tracking-wide py-6">Only dedicated teams</h1>
						<p className="text-white text-base md:text-xl max-w-[800px] mx-auto text-center py-2 md:py-6">Our team is 100% concentrated on your project and you have full control over management of the dedicated team members.</p>
					</div>
					<ul role="list" className="grid grid-cols-12 gap-8 pt-10 lg:pt-20">
						{dedicatedData.map((data) => (
							<li
								key={data.id}
								className="col-span-12 md:col-span-4"
							>
								<div className="p-4 md:p-8">
									<Image src={data.url} alt="team-image" height={80} width={80} className="mx-auto"/>
									<p className="text-lg md:text-xl py-8 font-medium text-white text-center tracking-wider">{data.title}</p>
								</div>
							</li>
						))}
					</ul>
					<button className="my-4 self-center hover:bg-orange-500 hover:text-white font-bold text-lg rounded-full border-orange-500 border py-4 px-6 tracking-wider text-orange-500">
						See our services &rarr;
					</button>
				</div>
			</section>
		</DefaultLayout>
	);
}
