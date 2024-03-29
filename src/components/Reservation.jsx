import React, { useState } from "react";
import { Box } from "@mui/material";
import { useReservations } from "./ReservationContext";

import PopupForm from "./PopupForm";
import BusLayout from "./BusLayout";

function Reservation() {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const { addReservation } = useReservations();
  const handleSubmit = (firstName, lastName, emailId) => {
    const today = new Date();
    const date = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
    addReservation({
      id: selectedSeat,
      firstName,
      lastName,
      emailId,
      date,
    });
    setSelectedSeat(null);
  };

  return (
    <>
      <PopupForm
        open={selectedSeat != null}
        onClose={() => {
          setSelectedSeat(null);
        }}
        onSave={handleSubmit}
      />
      <Box
        sx={{
          width: "425px",
          height: "32px",
          display: "flex",
          margin: "16px auto",
          backgroundColor: "red",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "2px",
          fontFamily: "Lato,Helvetica",
          fontWeight: "bold",
        }}
      >
        Click on an available seat to proceed with your transaction.
      </Box>
      <BusLayout setSelectedSeat={setSelectedSeat} />
    </>
  );
}

export default Reservation;
