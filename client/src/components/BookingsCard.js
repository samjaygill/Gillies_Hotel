import { deleteBooking } from "./BookingsService";
import './BookingsCard.css'

const BookingsCard = ({ booking, removeBooking }) => {
  const handleDelete = () => {
    deleteBooking(booking._id).then(() => {
      removeBooking(booking._id);
    });
  };

  let checkedStatus = ""
  if (booking.checked_in == true) {
    checkedStatus = "Yes"
  }
  else {checkedStatus = "No"}

  return (
    <>
    <div className="booking-details">
      <p className="booking-name">{booking.name.toUpperCase()}</p>
      <p className="booking-email">{booking.email.toLowerCase()}</p>
      <p className="booking-checked">Checked in: {checkedStatus}</p>

    
      <button onClick={handleDelete} className="booking-delete"> 🗑 </button>
      </div>
      <hr></hr>
    </>
  );
};

export default BookingsCard;
