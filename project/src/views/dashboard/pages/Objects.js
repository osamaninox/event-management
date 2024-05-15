import React,{useState} from 'react'
import SearchInput from '../components/common/SearchInput'
import { Table } from '../components/common/Table'
import arrow1 from '../../../assets/tool/Shapes/Arrows/ARROW1.png'
import arrow2 from "../../../assets/tool/Shapes/Arrows/ARROW2.png";
import arrow3 from "../../../assets/tool/Shapes/Arrows/ARROW3.png";
import arrow4 from "../../../assets/tool/Shapes/Arrows/ARROW4.png";

import border1 from "../../../assets/tool/Shapes/Borders/border1.png";
import border2 from "../../../assets/tool/Shapes/Borders/border2.png";
import border3 from "../../../assets/tool/Shapes/Borders/border3.png";
import border4 from "../../../assets/tool/Shapes/Borders/border4.png";

import circle1 from "../../../assets/tool/Shapes/Circles/C1.png";
import circle2 from "../../../assets/tool/Shapes/Circles/C2.png";
import circle3 from "../../../assets/tool/Shapes/Circles/C3.png";
import circle4 from "../../../assets/tool/Shapes/Circles/C4.png";

import f1 from "../../../assets/tool/Shapes/Flowers/F1.png";
import f2 from "../../../assets/tool/Shapes/Flowers/F2.png";
import f3 from "../../../assets/tool/Shapes/Flowers/F3.png";

import frame1 from "../../../assets/tool/Shapes/Frames/FRAME1.png";
import frame2 from "../../../assets/tool/Shapes/Frames/FRAME2.png";
import frame3 from "../../../assets/tool/Shapes/Frames/FRAME3.png";
import frame4 from "../../../assets/tool/Shapes/Frames/FRAME4.png";
import frame5 from "../../../assets/tool/Shapes/Frames/FRAME5.png";
import frame6 from "../../../assets/tool/Shapes/Frames/FRAME6.png";
import frame7 from "../../../assets/tool/Shapes/Frames/FRAME7.png";
import frame8 from "../../../assets/tool/Shapes/Frames/FRAME8.png";

import l1 from "../../../assets/tool/Shapes/Lines/L1.png";
import l2 from "../../../assets/tool/Shapes/Lines/L2.png";
import l3 from "../../../assets/tool/Shapes/Lines/L3.png";
import l4 from "../../../assets/tool/Shapes/Lines/L4.png";
import l5 from "../../../assets/tool/Shapes/Lines/L5.png";
import l6 from "../../../assets/tool/Shapes/Lines/L6.png";
import l7 from "../../../assets/tool/Shapes/Lines/L7.png";

import rec1 from "../../../assets/tool/Shapes/Rectangle/REC1.png";
import rec2 from "../../../assets/tool/Shapes/Rectangle/REC2.png";
import rec3 from "../../../assets/tool/Shapes/Rectangle/REC3.png";
import rec4 from "../../../assets/tool/Shapes/Rectangle/REC4.png";
import rec5 from "../../../assets/tool/Shapes/Rectangle/REC5.png";

import wimg1 from "../../../assets/tool/Wedding/Chairsandsofas/CHAIR-1.png";
import wimg2 from "../../../assets/tool/Wedding/Chairsandsofas/CHAIR2.png";
import wimg3 from "../../../assets/tool/Wedding/Chairsandsofas/CHAIR3.png";
import wimg4 from "../../../assets/tool/Wedding/Chairsandsofas/CHAIR4.png";
import wimg5 from "../../../assets/tool/Wedding/Chairsandsofas/CHAIR5.png";
import wimg6 from "../../../assets/tool/Wedding/Chairsandsofas/CHAIR6.png";
import wimg7 from "../../../assets/tool/Wedding/Chairsandsofas/CHAIR7.png";
import wimg8 from "../../../assets/tool/Wedding/Chairsandsofas/CHAIR8.png";
import wimg9 from "../../../assets/tool/Wedding/Chairsandsofas/CHAIR9.png";
import wimg10 from "../../../assets/tool/Wedding/Chairsandsofas/CHAIR10.png";
import wimg11 from "../../../assets/tool/Wedding/Chairsandsofas/CHAIR11.png";

import std1 from "../../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND1.png";
import std2 from "../../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND2.png";
import std3 from "../../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND3.png";
import std4 from "../../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND4.png";
import std5 from "../../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND5.png";
import std6 from "../../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND6.png";
import std7 from "../../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND7.png";
import std8 from "../../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND8.png";

import vse1 from "../../../assets/tool/Wedding/DecorationVaseorflowerstands/VASE1.png";
import vse2 from "../../../assets/tool/Wedding/DecorationVaseorflowerstands/VASE2.png";
import vse3 from "../../../assets/tool/Wedding/DecorationVaseorflowerstands/VASE3.png";
import vse4 from "../../../assets/tool/Wedding/DecorationVaseorflowerstands/VASE4.png";
import vse5 from "../../../assets/tool/Wedding/DecorationVaseorflowerstands/VASE5.png";



import b1 from "../../../assets/tool/Birthday/Balloons/B1.png";
import b2 from "../../../assets/tool/Birthday/Balloons/B2.png";
import b3 from "../../../assets/tool/Birthday/Balloons/B3.png";
import b4 from "../../../assets/tool/Birthday/Balloons/B4.png";
import b5 from "../../../assets/tool/Birthday/Balloons/B5.png";
import b6 from "../../../assets/tool/Birthday/Balloons/B6.png";
import b7 from "../../../assets/tool/Birthday/Balloons/B7.png";
import b8 from "../../../assets/tool/Birthday/Balloons/B8.png";
import b9 from "../../../assets/tool/Birthday/Balloons/B9.png";
import b10 from "../../../assets/tool/Birthday/Balloons/B10.png";
import b11 from "../../../assets/tool/Birthday/Balloons/B11.png";
import b12 from "../../../assets/tool/Birthday/Balloons/B12.png";
import b13 from "../../../assets/tool/Birthday/Balloons/B13.png";
import b14 from "../../../assets/tool/Birthday/Balloons/B14.png";
import b15 from "../../../assets/tool/Birthday/Balloons/B15.png";
import b16 from "../../../assets/tool/Birthday/Balloons/B16.png";
import b17 from "../../../assets/tool/Birthday/Balloons/B17.png";
import b18 from "../../../assets/tool/Birthday/Balloons/B18.png";
import b19 from "../../../assets/tool/Birthday/Balloons/B19.png";
import b20 from "../../../assets/tool/Birthday/Balloons/B20.png";
import b21 from "../../../assets/tool/Birthday/Balloons/B21.png";
import b22 from "../../../assets/tool/Birthday/Balloons/B22.png";
import b23 from "../../../assets/tool/Birthday/Balloons/B23.png";
import b24 from "../../../assets/tool/Birthday/Balloons/B24.png";
import b25 from "../../../assets/tool/Birthday/Balloons/B25.png";
import b26 from "../../../assets/tool/Birthday/Balloons/B26.png";
import b27 from "../../../assets/tool/Birthday/Balloons/B27.png";
import b28 from "../../../assets/tool/Birthday/Balloons/B28.png";
import b29 from "../../../assets/tool/Birthday/Balloons/B29.png";
import b30 from "../../../assets/tool/Birthday/Balloons/B30.png";


import c1 from "../../../assets/tool/Birthday/Chairs/char-one.png";
import c2 from "../../../assets/tool/Birthday/Chairs/chair-two.png";
import c3 from "../../../assets/tool/Birthday/Chairs/chair-three.png";
import c4 from "../../../assets/tool/Birthday/Chairs/chair-four.png";
import { ObjectsTable } from '../components/common/ObjectsTable';
import AddObjectModal from '../components/modal/Object/AddObjectModal'
import { Link } from 'react-router-dom';

const Objects = () => {
  const [openModal, setOpenModal] = useState({ addObj: false });

  const handleOpen = (modalType) => {
    setOpenModal({ ...openModal, [modalType]: true });
  };

  const handleClose = (modalType) => {
    setOpenModal({ ...openModal, [modalType]: false });
  };
   const TABLE_HEAD = [
     "id",
     "object Image",
     "name",
     "Price",
     "type",
     "action"
    
   ];

   const TABLE_ROWS = [
     {
       id: "1",
       objectImage: b30,
       name: "Ballon",
       price: "$50.00",
       type: 'Wedding',
       action: "objects",
     },
      {
       id: "2",
       objectImage: c1,
       name: "Chair",
       price: "$100.00",
       type: 'Birthday',
       action: "objects",
     },
     {
       id: "3",
      objectImage: vse1,
       name: "wase",
       price: "$150.00",
       type: 'Wedding',
       action: "objects",
     },
   ];
  return (
    <div>
      <div className='flex justify-between mb-[20px]'>
        <h2 className="text-[26px] text-[#000] font-[600] font-poppins ">
            Object Listing
        </h2>
        <Link to="#" onClick={() => handleOpen('addObj')} className='shadow-md mx-3 flex items-center bg-[#265253] text-white px-4 py-2 rounded-lg hover:bg-[#265253] focus:outline-none focus:bg-[#265253]'>Add Object</Link>
      </div>
      <div className="flex justify-end">
        <SearchInput />
      </div>
      <div className="my-[20px]">
        <ObjectsTable head={TABLE_HEAD} rows={TABLE_ROWS} />
      </div>
      <AddObjectModal ModalHeader="Add Object " open={openModal.addObj}  handleClose={() => handleClose('addObj')}
         />
    </div>
  );
}

export default Objects