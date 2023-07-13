import React from "react";
import { UseData } from "../context/DataContext";
import Modal from "./Modal";

const Navbar = () => {
  const { MeetupObj, dispatch } = UseData();
  return (
    <nav className="flex justify-between p-1 border-bottom bg-gray-100">
      <h1>Meetup</h1>
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
