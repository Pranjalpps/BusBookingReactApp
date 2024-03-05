import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reservation from "./components/Reservation";
import { ReservationProvider } from "./components/ReservationContext";
import DashBoard3 from "./components/DashBoard.jsx";

export default function App() {
  return (
    <ReservationProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<DashBoard3 />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </ReservationProvider>
  );
}
