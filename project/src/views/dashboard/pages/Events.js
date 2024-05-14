import React, { useEffect } from 'react'
import SearchInput from '../components/common/SearchInput'
import { Table } from '../components/common/Table'
import axios from 'axios'
import { accordion } from '@material-tailwind/react'

const Events = () => {
  useEffect(() => {
      axios.create({
      }).get(`http://localhost:8000/api/event/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }).then((response) => { 
        console.log(response.data);
        // SET USER PORFILE DATA TO STATE
      }).catch((error) => {
        console.error(error);
      });
    });
  const TABLE_HEAD = [
    "id",
    "Event Name",
    "Event Type",
    "Amount",
    "Payment Type",
    "status",
    "date",
    "Action",
  ];

  const TABLE_ROWS = [
    {
      id: "1",
      name: "John Michael",
      Amount: "$50.00",
      type: "Wedding",
      Payment_Type: "Credit Card",
      Status: "Completed",
      date: "23/04/18",
      success: "true",
      pending: "false",
      action:"event",
    },
    {
      id: "2",
      name: "John Michael",
      Amount: "$50.00",
      type: "Birthday",
      Payment_Type: "Credit Card",
      Status: "Pending",
      date: "23/04/18",
      sucess: "false",
      action:"event",
    },
    {
      id: "3",
      name: "John Michael",
      type: "Birthday",
      Amount: "$25.00",
      Payment_Type: "Credit Card",
      Status: "Pending",
      date: "23/04/18",
      sucess: "false",
      action:"event",
    },
  ];
  return (
    <div>
      <h2 className="text-[26px] text-[#000] font-[600] font-poppins">
        Events Listing
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

export default Events