import Image from "next/image";
import { ProgressBar } from 'primereact/progressbar';

const WhyChooseUs = ()=>{

const data = [
    {
        title: "Automation",
        value: "99.99%",
        icon: <ProgressBar showValue={false} value={99} style={{ height: '6px', fontSize:'8px' }}></ProgressBar>
    },
    {
        title: "Speed",
        value: "99.99%",
        icon: <ProgressBar showValue={false} value={99} style={{ height: '6px', fontSize:'8px' }}></ProgressBar>
    },
    {
        title: "Customer Support",
        value: "99.99%",
        icon: <ProgressBar showValue={false} value={99} style={{ height: '6px', fontSize:'8px' }}></ProgressBar>
    },
    {
        title: "Affordability",
        value: "99.99%",
        icon: <ProgressBar showValue={false} value={99} style={{ height: '6px', fontSize:'8px' }}></ProgressBar>
    }
]    
return (
    <section className="bg-[#FFFFFF] w-full">
        <div className="lg:flex lg:p-12 p-3 mt-8 md:flex-col  lg:flex-row lg:gap-x-6 md:gap-y-6 w-full">
            <span className="flex-grow-1  w-full">
              <Image src="/why_choose.jpg" className="w-full h-auto rounded-md"  layout="responsive" quality={100}  width={100} height={100} alt="" />
            </span>
            <div className="w-full">
                <span className="uppercase text-[14px] text-[#7e7d7d] font-medium">why choose us?</span>
                <h1 className="text-[35px] font-bold">We are the best at what we do.</h1>
            <div className="flex flex-col gap-y-6 mt-6">
                {data.map((item, index)=>(
                    <>
                    <span key={index} className="flex flex-col gap-y-2 w-full">
                      <div className="flex justify-between">
                        <span>{item?.title}</span> 
                        <span>{item?.value}</span>
                       </div>
                       {item?.icon}
                   </span>
                    </>
                ))}
            </div>
            </div>
        </div>
    </section>
)
}
export default WhyChooseUs;