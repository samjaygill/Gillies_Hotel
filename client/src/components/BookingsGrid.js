import BookingsCard from "./BookingsCard";
import './BookingsGrid.css'

const BookingsGrid = ({bookings, removeBooking}) => {
    const bookingsList = bookings.map((booking) => {
        return <div className="bookings-card"><BookingsCard booking={booking} key={booking._id} removeBooking={removeBooking}/></div>

    })
    return (  
        <><div className="bookings-container">
        {bookingsList}
        </div>
        </>
    );
}
 
export default BookingsGrid;