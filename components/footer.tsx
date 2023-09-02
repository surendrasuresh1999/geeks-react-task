import { footerData } from "@/data";
import Image from "next/image";


const Footer = () => {
  return (
    <section className='relative h-max pt-24'>
        <div className='container mx-auto flex flex-col px-5'>
            <div className='self-center flex flex-col justify-center items-center'>
                <h1 className='text-white font-bold text-3xl lg:text-6xl'>Get to know us better!</h1>
                <p className="text-white my-8  text-lg md:text-xl max-w-[800px] mx-auto text-center">              
                It is a pleasure to have you on our website. Let us know if there is an opportunity to do something together.
                </p>
                <button className="my-4 self-center bg-orange-500 text-white font-semibold text-lg rounded-full py-4 px-12 tracking-wider hover:bg-white hover:text-orange-500">
                    Drop us a message
                </button>
            </div>
            <div className='grid grid-cols-12 gap-4 pt-14 md:pt-24'>
                <div className='col-span-12 md:col-span-3'>
                    <Image
						src="https://geeksinvention.com/assets/v2/content/geeks-logo-white.svg"
						alt="Geeks Invention Logo"
						width={220}
						height={100}
					/>
                    <address className='py-4 text-base'>
                        447 Broadway, 2nd Floor Suite #772,<br /> New York 10013, United States,
                        <br />
                        +1-347-535-0004
                    </address>
                </div>

                <div className="block md:hidden col-span-12 md:col-span-6 ">
                    <div className='grid grid-cols-12 gap-4'>
                        {
                            footerData.map((data) =>(
                                <p className="text-white col-span-6 font-medium text-base md:text-lg" key={data.id}>{data.title}</p>
                            ))
                        }
                    </div>
                </div>
                
                <div className='hidden md:block col-span-12 md:col-span-6'>
                    <div className='flex gap-6 items-center flex-wrap'>
                        {
                            footerData.map((data) =>(
                                <p className="text-white col-span-6 font-medium text-base md:text-lg" key={data.id}>{data.title}</p>
                            ))
                        }
                    </div>
                </div>
                
                <div className='col-span-12 md:col-span-3'>
                <button className="bg-transparent text-white border border-white my-4 md:my-0 font-semibold text-2xl rounded-full py-4 px-10 tracking-wider hover:bg-white hover:text-black">
                    Stay tuned for <br /> updates
                </button>
                </div>
            </div>
            <p className="text-center text-gray-400 py-10">©&nbsp;Copyright 2023
                <span> - Mobile App Design and Development Company</span>. All Rights Reserved</p>
        </div>
    </section>
    
  )
}

export default Footer;