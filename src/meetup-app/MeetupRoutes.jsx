import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DetailsPage from "./pages/DetailsPage";

const MeetupRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
    </Routes>
  );
};

export default MeetupRoutes;
