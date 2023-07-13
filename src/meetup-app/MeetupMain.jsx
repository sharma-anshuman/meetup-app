import React from "react";
import { BrowserRouter } from "react-router-dom";
import MeetupRoutes from "./MeetupRoutes";
import DataContext from "./context/DataContext";

const MeetupMain = () => {
  return (
    <BrowserRouter>
      <DataContext>
        <MeetupRoutes />
      </DataContext>
    </BrowserRouter>
  );
};

export default MeetupMain;
