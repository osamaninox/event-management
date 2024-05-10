import React from 'react'
import Banner from '../components/common/Banner';
import AboutSec from '../components/home/aboutsec/AboutSec';
import homeBannerImg from "../../../assets/front/images/bannerImg.jpeg";
import aboutImg from '../../../assets/front/images/view.PNG'
import PlanEvent from '../components/home/planevent/PlanEvent';
import weddingImg from "../../../assets/front/images/hp.jpg";
import event from "../../../assets/front/images/event.jpg";
import Testimonials from '../components/testimonials/Testimonials';

const Home = () => {

  return (
    <>
      <Banner imgUrl={homeBannerImg} btn="true" btnText="Where To Begin" link="/gallery"/>
      <div className="container">
        <AboutSec
          content="Welcome to InnoVista Designers, where every occasion becomes an
              unforgettable experience. From corporate conferences to dream
              weddings, we specialize in crafting moments that leave lasting
              impressions. Let us turn your vision into reality with our
              expertise and attention to detail."
          imgUrl={aboutImg}
        />
        <div className="py-[50px]">
          <PlanEvent
            eventType="Wedding"
            eventDetails="Is your big day outside, on a
          private property or in a warehouse
          style venue? We are the outdoor and
          private property experts!"
            imgUrl={weddingImg}
            imgPositionSec
          />
          <PlanEvent
            eventType="Birthday"
            eventDetails="We specialize in making birthday dreams come
          true. From intimate gatherings to extravagant
          celebrations, we tailor every detail to reflect
          your unique style and personality. Let us
          handle the planning so you can focus on creating
          unforgettable memories."
            imgUrl={event}
          />
        </div>
        <Testimonials />
      </div>
    </>
  );
}

export default Home