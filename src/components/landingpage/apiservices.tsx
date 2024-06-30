import { Code, DeviceMobile, EnvelopeSimple, Globe, WhatsappLogo } from "phosphor-react"

export  const ApiService = ()=> {
 const data = [
  {
    title: "Website",
    icon: <Globe  color="#0ba254" size={50}/>
  },
  {
    title: "Mobile App",
    icon: <DeviceMobile color="#0ba254" size={50}/>
  },
  {
    title: "API",
    icon: <Code color="#0ba254" size={50}/>
  },
  {
    title: "USSD",
    icon: <EnvelopeSimple color="#0ba254" size={50}/>
  },
  {
    title: "SMS",
    icon: <EnvelopeSimple color="#0ba254" size={50}/>
  },
  {
    title: "Whatsapp Bot (WIZ)",
    icon: <WhatsappLogo color="#0ba254" size={50}/>
  }
 ]
  return (
    <section className="bg-[#F5F6F7] lg:p-12 p-3">
      <div className="lg:grid grid-cols-2 md:grid mt-14 gap-x-6 ">
        <div className="flex flex-col justify-center h-auto">
              <span className="text-[14px] font-medium uppercase">our channels</span>
              <span className="text-[35px] font-bold">Connect with us through several channels</span>
              <span className="text-[17px] opacity-[.8] font-['jost', sans-serif]">
                  We have several channels you can choose to connect 
                  and make transactions on our platform, from our Website to Mobile App, 
                  API, USSD, SMS and our Powerful Whatsapp Bot.
              </span>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-10 grid mt-3 gap-y-6">
          {data.map((item, index)=>(
            <>
              <div key={index} className="bg-white cursor-pointer flex hover:transform hover:scale-105 transition-transform duration-300  shadow-custom  flex-col gap-y-2 justify-center items-center rounded-[8px] px-8 py-10">
                {item?.icon}
              <span className="text-[22px] font-medium">{item?.title}</span>
            </div>
            </>
          ))}
        </div>
      </div>
       
    </section>
  )
}