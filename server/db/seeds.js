use hotel;
db.dropDatabase();

db.bookings.insertMany([

{
    name: "Aiden Hazard",
    email: "ah@yahoomail.com",
    checked_in: true
},
{
    name: "Sarah Alfred",
    email: "SA@yahoomail.com",
    checked_in: false
},
{
    name: "Omar Katari",
    email: "OK@yahoomail.com",
    checked_in: true
},
{
    name: "Hannah Gerald",
    email: "ah@yahoomail.com",
    checked_in: true
}

]);