import React, { useEffect, useState } from "react";
import "../App.css";
import BookingsForm from "../components/BookingsForm";
import BookingsGrid from "../components/BookingsGrid";
import { getBookings } from "../components/BookingsService";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import NavBar from "../components/NavBar";

const  MainContainer = () => {

  const [bookings, setBookings] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    getBookings().then((allBookings) => {
      setBookings(allBookings);
    });
  }, []);

  const addBooking = (booking) => {
    setBookings([...bookings, booking])
  }

  const removeBooking = (id) => {
    const bookingsToKeep = bookings.filter(booking => booking._id !== id)
    setBookings(bookingsToKeep)
  }

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <>
      {/* <BookingsForm addBooking={addBooking}/>
      <BookingsGrid bookings={bookings} removeBooking={removeBooking}/> */}
      <Router>
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/bookings" element={<BookingsGrid bookings={bookings} removeBooking={removeBooking}/>}/>
      <Route path="/add" element={<BookingsForm addBooking={addBooking}/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default MainContainer;
