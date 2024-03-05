const getSeatObj = () => {
  const seatObj = { upperBerth: [], lowerBerth: [] };
  for (var i = 0; i <= 18; i++) {
    const upperSeat = "U" + i;
    const lowerSeat = "L" + i;
    seatObj.upperBerth.push(upperSeat);
    seatObj.lowerBerth.push(lowerSeat);
  }
  return seatObj;
};

export const seatsObj = getSeatObj();
export const dummyBooking = {
  id: "L1",
  date: "5/2/2024",
  emailId: "pranjalTest@gmail.com",
  firstName: "Pranjal",
  lastName: "Srivastava",
};
