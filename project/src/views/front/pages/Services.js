import React from 'react'
import ServicesBannerImg from "../../../assets/front/images/Banner.png";
import catering from "../../../assets/front/images/catering.jpg";
import decor from "../../../assets/front/images/decor-2.png";
import music from "../../../assets/front/images/music.jpg";
import photography from "../../../assets/front/images/photography.jpg";
import venue from "../../../assets/front/images/venue.jpg";
import Banner from "../components/common/Banner";
import Service from '../components/common/Service';

const Services = () => {
  var serviceCardData = [
    {
      icon: catering,
      title: "Catering",
      details:
        "Let music be the heartbeat of your event, orchestrating moments of joy, connection, and  unforgettable memories.",
      link: "http://www.venuebazaar.pk/Best-Caterers-In-Karachi.aspx",
    },
    {
      icon: decor,
      title: "Decoration",
      details:
        "Let music be the heartbeat of your event, orchestrating moments of joy, connection, and  unforgettable memories.",
      link: "/decoration",
    },
    {
      icon: music,
      title: "Music",
      details:
        "Let music be the heartbeat of your event, orchestrating moments of joy, connection, and  unforgettable memories.",
      link: "/music",
    },
    {
      icon: photography,
      title: "Photography",
      details:
        "Let music be the heartbeat of your event, orchestrating moments of joy, connection, and  unforgettable memories.",
      link: "https://biyahwedding.com/",
    },
    {
      icon: venue,
      title: "Venue",
      details:
        "Let music be the heartbeat of your event, orchestrating moments of joy, connection, and  unforgettable memories.",
      link: "/photography",
    },
  ];
  return (
    <>
      <Banner imgUrl={ServicesBannerImg} btn="true" btnText="Our Services" />
      <div className="flex flex-wrap justify-center py-[50px]">
        {serviceCardData.map((item, i) => {
          return (
            <Service
              imgUrl={item.icon}
              Title={item.title}
              Details={item.details}
              link={item.link}
            />
          );
        })}
      </div>
      <h2 className="text-center text-[#000] text-[26px] uppercase font-[900] w-[1000px] mx-auto mb-[50px]">
        "DREAM, DARE, DO! BOOK YOUR EVENTS WITH US AND EMBRACE THE THRILL OF
        EXCITEMENT."
      </h2>
    </>
  );
}

export default Services