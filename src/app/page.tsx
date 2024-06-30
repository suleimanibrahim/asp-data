"use client";

import Navbar from "@/components/landingpage/navbar";
import KeepConnected from "@/components/landingpage/keepconnected";
import Services from "@/components/landingpage/services";
import WhyChooseUs from "@/components/landingpage/whychoous";
import { ApiService } from "@/components/landingpage/apiservices";
import { ServiceExtension } from "@/components/landingpage/servicemore";
import { ApiDocumentation } from "@/components/landingpage/documentation";
import { Carousels } from "@/components/landingpage/carousel";
import { FooterSection } from "@/components/landingpage/footer";

export default function page() {
  return (
   <div className="box-border overflow-hidden">
     <Navbar/>
     <KeepConnected/>
     <Services/>
     <WhyChooseUs/>
     <ApiService/>
     <ServiceExtension/>
     <ApiDocumentation />
     <Carousels />
     <FooterSection />
   </div>
  );
}
