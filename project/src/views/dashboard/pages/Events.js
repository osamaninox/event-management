import React, { useEffect, useState } from "react";
import SearchInput from "../components/common/SearchInput";
import { Table } from "../components/common/Table";
import axios from "axios";

const Events = () => {
  const role = localStorage.getItem("role");
  if (!role || role.toLowerCase() !== "admin") {
    window.location.href = "/";
    return;
  }
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/event/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const TABLE_HEAD = [
    "id",
    "Client Name",
    // "Event Type",
    "Amount",
    // "Payment Type",
    // "Status",
    "Date",
    "Action",
  ];

  const formatTableRows = (events) => {
    return events.map((event, index) => ({
      id: event._id,
      name: event.title,
      Amount: event.totalAmount,
      date: event.date,
      action: "event",
    }));
  };

  return (
    <div>
      <h2 className="text-[26px] text-[#000] font-[600] font-poppins">
        Events Listing
      </h2>
      <div className="flex justify-end">
        <SearchInput />
      </div>
      <div className="my-[20px]">
        <Table head={TABLE_HEAD} rows={formatTableRows(events)} />
      </div>
    </div>
  );
};

export default Events;
