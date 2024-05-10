import React from 'react'
import ourteam from "../../../assets/front/images/out-team.png";
import Banner from '../components/common/Banner';
import ceo from '../../../assets/front/images/ceo.png';
import president from "../../../assets/front/images/president.jpeg";
import director from "../../../assets/front/images/director.jpeg";
import vp from "../../../assets/front/images/vp.jpeg";
import TeamMember from '../components/common/TeamMember';

const About = () => {
  const TeamMemberData = [
    {
      imgUrl: vp,
      name: "Saman Karim",
      details:
        "Welcome to the forefront of event excellence at InnoVista Designers. As the Vice President, I am delighted to extend a warm welcome to our website, where innovation meets precision to create extraordinary moments. At InnoVista Designers, we believe that every event has the potential to be exceptional, and it is our mission to bring that vision to life. With a team of dedicated professionals and a commitment to excellence, we are poised to exceed your expectations and elevate your event experience to new heights. Join us as we embark on this journey of creativity, passion, and unparalleled service in the world of event management.",
      designation: "Vice President",
    },
    {
      imgUrl: president,
      name: "Hafsah Majid",
      details:
        "Greetings from the desk of the President at InnoVista Designers, where every event is a masterpiece waiting to unfold. I am honored to extend a warm welcome to our website, where innovation, professionalism, and dedication converge to shape unforgettable experiences. At InnoVista Designers, we understand the power of exceptional events, and as your President, I am committed to ensuring that each moment is meticulously curated to surpass expectations. Join us as we embark on a journey to redefine the landscape of event management, one unparalleled experience at a time",
      designation: "President",
    },
    {
      imgUrl: director,
      name: "Wania Nadeem",
      details:
        "Welcome to the hub of creativity and meticulous planning at InnoVista Designers. As the Director of Events, I am excited to extend a warm welcome to our website, where innovation and expertise converge to craft unforgettable moments. At InnoVista Designers, we understand the importance of every detail, and it is our passion to ensure that each event we undertake is executed flawlessly. With a team of dedicated professionals and a commitment to excellence, we are here to turn your vision into a reality. Join us as we embark on a journey of creativity, precision, and unparalleled service in the realm of event management",
      designation: "Director of Events",
    },
  ];
  return (
    <>
      <Banner
        imgUrl={ourteam}
        btn="true"
        btnText="The best way to predict the future is to create it. - Peter Drucker"
      />
      <div className="py-[50px]">
        <h6 className="font-dancing text-[14px] text-[#000] text-center font-[600] pb-[5px]">
          Crafting unforgettable experiences,
        </h6>
        <h2 className="font-poppins font-bold text-[16px] text-[#000] text-center py-[3px]">
          ONE EVENT AT A TIME -
        </h2>
        <p className="text-[14px] text-[#000] text-center mb-0">
          WELCOME TO INNOVISTA DESIGNERS, WHERE INNOVATION MEETS CELEBRATION .
        </p>
        <div className="my-[25px]">
          <TeamMember
            imgUrl={ceo}
            name="MR.FAIZULLAH"
            details="Welcome to InnoVista Designers, where we turn your
            events into unforgettable experiences.
            As the CEO, I am thrilled to welcome you to our website,
            where creativity, precision, and passion
            converge to craft extraordinary moments. With a dedicated
            team of experts and a commitment to excellence,
            we are here to transform your vision into reality, one event
            at a time. Join us on this journey as we redefine
            the art of event management."
            designation="CEO"
            designationWithName
          />
        </div>
        <div className="">
          <h2 className="text-[26px] font-dancing text-center pb-[5px]">
            Meet Our Team
          </h2>
          <div className="pt-[20px] pb-[30px] ourteamwrapper">
            <div className="container mx-auto">
              <div className="grid grid-cols-3 gap-8">
                {TeamMemberData.map((member,i)=>{
                  return (
                  <TeamMember
                    imgUrl={member.imgUrl}
                    name={member.name}
                    details={member.details}
                    designation={member.designation}
                  />
                  );
                })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About