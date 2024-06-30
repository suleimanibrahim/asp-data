import { DeviceMobile, FolderOpen, Shield } from "phosphor-react"

export const ServiceExtension = ()=> {

  const data = [
    {
      title: "Friendly Interface",
      description: "Enjoy an awesome experience with beautiful interface while using our platform.",
      icon: <DeviceMobile color="#0ba254" size={50}/>
    },
    {
      title: "E - Wallet System",
      description: "Each user on our platform has a dedicated wallet which can be used to make all transaction.",
      icon: <FolderOpen color="#0ba254" size={50}/>
    },
    {
      title: "Secure Transactions",
      description: "Everything you do is secure, we keep your digital wallet safe at all time.",
      icon: <Shield color="#0ba254" size={50}/>
    }
  ]
  return (
    <section className="bg-white lg:p-12 p-3">
      <div className="lg:grid lg:grid-cols-3 grid gap-10 lg:gap-10">
       {data.map((item, index)=>(
        <>
        <div key={index} className="bg-[#F5F6F7] rounded-[8px] lg:px-[50px] py-[35px] w-full hover:transform hover:scale-105 transition-transform duration-300 h-auto flex flex-row gap-x-4">
           <span>{item?.icon}</span> 
            <div className="flex flex-col gap-y-2">
                <span className="text-[22px] font-[600]">{item?.title}</span>
                <span className="text-[17px] font-normal">{item?.description}</span>
            </div>
        </div>
        </>
       ))}
      </div>
    </section>
  )
}