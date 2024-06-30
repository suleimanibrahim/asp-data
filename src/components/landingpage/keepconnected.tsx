"use client"
import { useRouter } from "next/navigation";

const KeepConnected = ()=>{
  const router = useRouter();

  return (
    <section className="grid grid-cols-2 mt-10 mx-auto bg-[#f1fef4]">
    <div className="col-span-2 lg:col-span-1 px-[10%] py-16 lg:py-24 md:px-[13%] xl:px-[10%]  text-[#121217] ">
      <h1 className="text-4xl md:text-5xl xl:text-[4.5vw] font-bold ">
         Keeping you connected!
      </h1>
      <p className="text-[#6B7280] text-lg xl:text-[1.25vw] xl:leading-[160%] font-normal mt-[20px] xl:mt-[1.38vw]">
        Enjoy highly discounted rates on internet Data Plans, Airtime, VTU, 
        Utility Bills and Convert Airtime to Cash
      </p>
      <div className="mt-[48px] xl:mt-[3.33vw] flex items-center">
        <button
          onClick={()=>router.push("/register")}
          className="block bg-[#00a63f] transition-all px-5 py-2 xl:px-0 xl:py-0 xl:w-[12vw] xl:h-[3.9vw] text-[#FFFFFF] rounded-lg xl:text-[1.1vw]"
        >
          Get Started
        </button>
        <button 
         onClick={()=>router.push("/login")} 
         className="px-5 py-2 xl:px-0 xl:py-0 xl:w-[12vw] xl:h-[3.8vw] text-[#FFFFFF] bg-[#03045E] rounded-lg ml-[3%] xl:text-[1.1vw]">
          Login
        </button>
      </div>
    </div>
    <div className="col-span-2 lg:col-span-1 flex items-center justify-center py-16 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 border-4 border-black animate-borderDotted rounded-full"></div>
      </div>
      <h1 className="text-9xl font-archivo font-extrabold animate-rotate">D</h1>
    </div>
  </section>
  )
}
export default KeepConnected;