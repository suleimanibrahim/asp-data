export const FooterSection = ()=>{
    return (
        <section className="bg-[#151421]"> 
            <div className="py-16 lg:p-16 p-3">
              <div className="lg:grid lg:grid-cols-3 grid gap-y-6 lg:gap-x-6">
                <div className="flex flex-col text-[#97a1a9] gap-y-2">
                    <span className="logo text-white">ASP DATA</span>
                    <span>ASP DATA, owned by Sabans Technology NIGERIA LIMITED (RC 1461693, CL/S&I/340/21), offers best deals when it comes to internet Data Plans, Bills payment like GOTV, DSTV & STARTIMES.</span>
                </div>
                <div className="flex text-[#97a1a9] flex-col gap-y-2">
                    <span className="text-white">CONTACT INFO</span>
                    <span>Address : Dadinkowa dogo nini ward potiskum, Nigeria.</span>
                    <span>Customer Support : +2348144832703</span>
                    <span>Email : isuleimanibrahim@gmail.com</span>
                </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex text-[#97a1a9] flex-col gap-y-2">
                        <span className="text-white">PRODUCTS</span>
                        <span>Data Subscription</span>
                        <span>Bills Payment</span>
                        <span>AirtimeToCash</span>
                        <span>VTU Recharge</span>
                        <span>API For Developers</span>
                    </div>
                    <div className="flex text-[#97a1a9] flex-col gap-y-2">
                      <span className="text-white">COMPANY</span>
                      <span>About company</span>
                      <span>Get in touch</span>
                    </div>
                  </div>
              </div>
            </div>
            <div className="copyright border-t-2 py-6 flex justify-center items-center">
                <span className="text-[#97a1a9]">© 2021 ASP DATA. All rights reserved.</span>
            </div>
        </section>
    )
}