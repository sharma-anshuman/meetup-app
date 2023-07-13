import React from "react";
import { useNavigate } from "react-router-dom";

const Eventcard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => navigate(`/details/${item.id}`)}
    >
      <div className="relative">
        <img className="h-[12rem] w-[15rem]" src={item.eventThumbnail} />
        <div className="absolute top-0 left-0">{item.eventType}</div>
      </div>
      <div className="flex flex-col">
        <div>{item.eventStartTime}</div>
        <div>{item.title}</div>
      </div>
    </div>
  );
};

export default Eventcard;
