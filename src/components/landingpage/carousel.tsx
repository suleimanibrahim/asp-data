import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

export const Carousels = ()=>{
    const [products, setProducts] = useState([]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      };

      const logos = [
        "multichoice_logo.png",
        "startime_logo.png",
        "smile_logo.png",
        "spectranet_logo.png",
        "waec_logo.png",
        "neco_logo.png",
        "mtn_logo.png",
        "airtel_logo.png",
        "glo_logo.png",
        "9mobile_logo.png",
      ];
    
   
    return (
        <section className="customer-logos mt-2 mb-2">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="slide">
              <Image 
                src={`/${logo}`} 
                alt={`${logo.split('_')[0]} logo`} 
                width={50} 
                height={50} 
                quality={100}
                layout="responsive"
                className="mx-auto"
              />
            </div>
          ))}
        </Slider>
      </section>
    )

}