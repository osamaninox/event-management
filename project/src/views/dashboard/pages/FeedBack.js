import React, { useEffect, useState } from "react";
import SearchInput from "../components/common/SearchInput";
import { FeedbackTable } from "../components/common/FeedbackTable";
import axios from "axios";

const FeedBack = () => {
  let [TABLE_ROWS, setTableRows] = useState([]);

  const TABLE_HEAD = ["name", "email", "comment"];

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/feedback`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setTableRows(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const role = localStorage.getItem("role");
  if (!role || role.toLowerCase() !== "admin") {
    window.location.href = "/";
    return;
  }
  return (
    <div>
      <h2 className="text-[26px] text-[#000] font-[600] font-poppins">
        FeedBack
      </h2>
      <div className="flex justify-end">
        <SearchInput />
      </div>
      <div className="my-[20px]">
        <FeedbackTable head={TABLE_HEAD} rows={TABLE_ROWS} />
      </div>
    </div>
  );
};

export default FeedBack;
