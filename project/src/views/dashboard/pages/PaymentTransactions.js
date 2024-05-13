import React from 'react'
import { Table } from '../components/common/Table';
import SearchInput from '../components/common/SearchInput';

const PaymentTransactions = () => {
  const TABLE_HEAD = ["id", "name", "Amount", "Payment Channel", "status","date" ,"Action"];

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
      action:"true"
    },
    {
      id: "2",
      name: "John Michael",
      Amount: "$50.00",
      Payment_Channel: "Credit Card",
      Status: "Pending",
      date: "23/04/18",
      sucess: "false",
      action:"true"
    },
    {
      id: "3",
      name: "John Michael",
      Amount: "$25.00",
      Payment_Channel: "Credit Card",
      Status: "Pending",
      date: "23/04/18",
      sucess: "false",
       action:"true"
    },
  ];
  return (
    <div>
       <h2 className="text-[26px] text-[#000] font-[600] font-poppins">
        Payment Transactions 
      </h2>
      <div className="flex justify-end">
        <SearchInput />
      </div>
      <div className="my-[20px]">
        <Table head={TABLE_HEAD} rows={TABLE_ROWS} />
      </div>
    </div>
  )
}

export default PaymentTransactions