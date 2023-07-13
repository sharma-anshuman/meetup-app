import React from "react";
import { useParams } from "react-router-dom";
import { UseData } from "../context/DataContext";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
const DetailsPage = () => {
  const { id } = useParams();
  const {
    MeetupObj: { meetups },
  } = UseData();
  const meet = meetups.find(({ id: i }) => i === id);
  return (
    <div key={id}>
      <Navbar />
      <div className="flex">
        <div className="basis-3/6">
          <h1>{meet.title}</h1>
          <div>
            <h3>Hosted By:</h3>
            <h2>{meet.hostedBy}</h2>
          </div>
          <img src={meet.eventThumbnail} />
          <div>
            <h1>Details</h1>
            <p>{meet.eventDescription}</p>
          </div>
          <div>
            <h1>Additional Information</h1>
            <p>
              <span>Dress Code: </span>
              {meet.additionalInformation.dressCode}
            </p>
            <p>
              <span>Age Restrictions: </span>
              {meet.additionalInformation.ageRestrictions}
            </p>
          </div>
          <div>
            <h1>Event Tags: </h1>
            <div className="">
              {meet.eventTags.map((item) => (
                <button>{item}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <div>
              <h1>{meet.eventStartTime}</h1>
              <h1>{meet.eventEndTime}</h1>
            </div>
            <div>
              <h1>{meet.location}</h1>
              <h1>{meet.address}</h1>
            </div>
            <h1>Price: {meet.price} INR</h1>
          </div>
          <h1>Speakers: ({meet.speakers.length})</h1>
          <div className="flex gap-2 p-1">
            {meet.speakers.map((item) => (
              <div>
                <img className="w-11 h-11 rounded-full" src={item.image} />
                <h1>{item.name}</h1>
                <h2>{item.designation}</h2>
              </div>
            ))}
          </div>
          {/* <button className="p-2 bg-gray-100 cursor-pointer hover:bg-gray-200 rounded">RSVP</button> */}
          <Modal item={meet} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
