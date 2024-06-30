import Image from "next/image";


const Services = ()=>{
 const data = [
   {
    title: "Data Plan",
    description: "Get Internet Data for as low as #230/GB",
    image: "data.jpg",  
  },
  {
    title: "VTU",
    description: "Get Internet Data for as low as #230/GB",
    image: "vtu.jpg",
  },
  {
    title: "Bills Payment",
    description: "1-3% discounts on GOTV, DSTV, Startimes, Smile Airtime, Spectranet, Electricity Bills, WAEC and NECO Scratch Card",
    image: "bills.jpg",
  },
  {
    title: "Airtime",
    description: "Enjoy 3-7% discounts on VTU recharges",
    image: "airtime.jpg",
  },
  {
    title: "Retailer Website",
    description: "Coming Soon : Website for retailing Our Products",
    image: "retailer_website.jpg",
  }
]  

 return (
    <section id="services" className="py-2 md:px-12 md:py-10 lg:px-28 lg:py-20  xl:py-[5.55vw] flex flex-col">
       <div className="mt-8 gap-y-6 md:mt-12 lg:mt-16 xl:mt-[4.4vw] lg:grid lg:grid-cols-3 grid md:gap-x-5 lg:gap-y-6 justify-center">
         {data.map((item, index)=>(
            <>
             <div key={index} className="rounded-md cursor-pointer px-[15px] w-full hover:transform hover:scale-105 transition-transform duration-300">
               <Image src={`/${item?.image}`} alt="" quality={100} layout="responsive" className="w-full rounded-[8px]" width={120} height={120} />
               <div className="flex flex-col px-[0px] justify-center items-center">
                  <span className="w-auto z-50 relative top-[-1rem] text-[19px] text-center font-medium text-[#3f3a64] border-[2px] border-solid border-transparent rounded-[8px] px-[20px] py-[10px] bg-[#FFFFFF]">{item?.title}</span> 
                  <p className="text-[17px] text-center opacity-[.8px] text-[#666]">{item?.description}</p>
               </div>
            </div>  
            </>
         ))}
       </div>
    </section>
 )
}
export default Services;