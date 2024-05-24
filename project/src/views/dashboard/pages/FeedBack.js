import React from "react";
import SearchInput from "../components/common/SearchInput";
import { Table } from "../components/common/Table";

const FeedBack = () => {
  const role = localStorage.getItem("role");
  if (!role || role.toLowerCase() !== "admin") {
    window.location.href = "/";
    return;
  }
  const TABLE_HEAD = ["id", "name", "email", "comment", "action"];

  const TABLE_ROWS = [
    {
      id: "1",
      name: "John Michael",
      email: "abc@gmail.com",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      action: "feedbacks",
    },
    {
      id: "2",
      name: "John Michael",
      email: "abc@gmail.com",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      action: "feedbacks",
    },
    {
      id: "3",
      name: "John Michael",
      email: "abc@gmail.com",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      action: "feedbacks",
    },
  ];
  return (
    <div>
      <h2 className="text-[26px] text-[#000] font-[600] font-poppins">
        FeedBack
      </h2>
      <div className="flex justify-end">
        <SearchInput />
      </div>
      <div className="my-[20px]">
        <Table head={TABLE_HEAD} rows={TABLE_ROWS} />
      </div>
    </div>
  );
};

export default FeedBack;
