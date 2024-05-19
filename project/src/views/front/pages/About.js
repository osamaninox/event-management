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
        "Meet our Vice President, a strategic thinker and operational powerhouse dedicated toelevating event experiences.With a knack for innovation and a passion for fl awless execution, she drive our team to exceed expectations and deliver unforgettable moments",
      designation: "Vice President",
    },
    {
      imgUrl: president,
      name: "Hafsa Majid",
      details:
        "Introducing our esteemed President, a visionary leader with a track record of transforming events into remarkable experiences. With strategic foresight and unparalleled dedication, she steer our company towards new heights of success, setting the standard for excellence in event management.",
      designation: "President",
    },
    {
      imgUrl: director,
      name: "Wania Nadeem",
      details:
        "Meet our Director of Events, a seasoned orchestrator of unforgettable experiences, blending creativity with meticulous planning to craft seamless occasions. With a passionfor exceeding expectations, she bring innovation and precision to every event, ensuring each moment leaves a lasting impression.",
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
            details="Introducing our CEO, a visionary leader renowned for transforming event concepts into reality. With an unwavering commitment to excellence and a knack for inspiring creativity, they steer our company towards unparalleled success in the world of event management"
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