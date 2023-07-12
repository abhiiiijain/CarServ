import React from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    loop:true
   
  };
  return (
    <div class="container-xxl pt-5">
    <div class="container">
        <div class="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s"
            style={{maxWidth: "500px"}}>
            <p class="fs-5 fw-medium text-primary">Testimonial</p>
            <h1 class="display-5 mb-5">What Clients Say About Our Services!</h1>
        </div>
    <Slider {...settings}>
        <TestimonialCard name="Client Name" img="/img/testimonial-1.jpg" comment="Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit, sed stet lorem sit clita duo justo" profession="Profession"/>
         <TestimonialCard name="Client Name" img="/img/testimonial-2.jpg" comment="Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit, sed stet lorem sit clita duo justo" profession="Profession"/>
         <TestimonialCard name="Client Name" img="/img/testimonial-3.jpg" comment="Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit, sed stet lorem sit clita duo justo" profession="Profession"/>
         <TestimonialCard name="Client Name" img="/img/testimonial-4.jpg" comment="Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit, sed stet lorem sit clita duo justo" profession="Profession"/>
    </Slider>
    </div>
    </div>
  );
}