import React, { useState } from "react";
import { postBooking } from "./BookingsService";
import './BookingsForm.css'

const BookingsForm = ({ addBooking }) => {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checked_in: checked,
  });

  const onChange = (e) => {
    const newFormData = Object.assign({}, formData);
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newFormData = { ...formData };
    newFormData.checked_in = checked;
    postBooking(newFormData).then((data) => {
      addBooking(data);
    });
    setFormData({
      name: "",
      email: "",
      checked_in: false,
    });
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="add-container">
      <div className="add-card">
    <form onSubmit={onSubmit} id="bookings-form">
      <h2 className="add-heading">Add a booking:</h2>
      <div className="formWrap">
        <label htmlFor="name">Name: </label>
        <input
          onChange={onChange}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          className="add-name"
        />
      </div>
      <div className="formWrap">
        <label htmlFor="email">Email: </label>
        <input
          onChange={onChange}
          type="text"
          id="email"
          name="email"
          value={formData.email}
          className="add-email"
        />
      </div>
      <div className="formWrap">
        <label htmlFor="checked-in" className="add-checkedin">Checked in?</label>
        <input value={checked} type="checkbox" onChange={handleChange} />
        <br></br>
      </div>

      <input type="submit" value="save" id="save" className="add-submit"/>
    </form>
    </div>
    </div>
  );
};

export default BookingsForm;
