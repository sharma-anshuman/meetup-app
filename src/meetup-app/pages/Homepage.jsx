import React from "react";
import Navbar from "../components/Navbar";
import { UseData } from "../context/DataContext";
import Eventcard from "../components/Eventcard";

const Homepage = () => {
  const { MeetupObj, dispatch } = UseData();
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex justify-between mt-2 p-2">
        <h1>Meetup Events</h1>
        <select
          onChange={(e) => dispatch({ type: "type", payload: e.target.value })}
          value={MeetupObj.type}
        >
          <option value="Both">Both</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>
      <div className="flex m-auto gap-4 flex-wrap">
        {MeetupObj.meetupsToShow.map((item) => (
          <Eventcard item={item} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Homepage;
