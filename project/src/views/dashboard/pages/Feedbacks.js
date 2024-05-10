import React from 'react'
import SearchInput from '../components/common/SearchInput'
import { Table } from '../components/common/Table'


const Feedbacks = () => {
   const TABLE_HEAD = [
     "id",
     "name",
     "Amount",
     "Payment Channel",
     "status",
     "date",
   ];

   const TABLE_ROWS = [
     {
       id: "1",
       name: "John Michael",
       Amount: "$50.00",
       Payment_Channel: "Credit Card",
       Status: "Completed",
       date: "23/04/18",
       success: "true",
       pending: "false",
     },
     {
       id: "2",
       name: "John Michael",
       Amount: "$50.00",
       Payment_Channel: "Credit Card",
       Status: "Pending",
       date: "23/04/18",
       sucess: "false",
     },
     {
       id: "3",
       name: "John Michael",
       Amount: "$25.00",
       Payment_Channel: "Credit Card",
       Status: "Pending",
       date: "23/04/18",
       sucess: "false",
     },
   ];
  return (
    <div>
      <h2 className="text-[26px] text-[#000] font-[600] font-poppins">
       FeedBacks Listing
      </h2>
      <div className="flex justify-end">
        <SearchInput />
      </div>
      <div className="my-[20px]">
        <Table head={TABLE_HEAD} rows={TABLE_ROWS} />
      </div>
    </div>
  );
}

export default Feedbacks