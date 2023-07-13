import React from "react";
import { UseData } from "../context/DataContext";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { MeetupObj, dispatch } = UseData();
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between p-1 border-bottom bg-gray-100">
      <h1 className="font-bold cursor-pointer text-2xl" onClick={() => navigate("/")}>Meetup</h1>
      <input
        type="text"
        value={MeetupObj.search}
        onChange={(e) => dispatch({ type: "search", payload: e.target.value })}
        placeholder="Search by title and tags"
      />
    </nav>
  );
};

export default Navbar;
