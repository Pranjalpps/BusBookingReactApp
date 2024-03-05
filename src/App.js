import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Reservation from "./components/Reservation";
import { ReservationProvider } from "./components/ReservationContext";
import DashBoard from "./components/DashBoard.jsx";

export default function App() {
  return (
    <ReservationProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/BusBookingReactApp" />} />
          <Route path="/BusBookingReactApp" element={<DashBoard/>} />
          <Route path="/BusBookingReactApp/reservation" element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </ReservationProvider>
  );
}
