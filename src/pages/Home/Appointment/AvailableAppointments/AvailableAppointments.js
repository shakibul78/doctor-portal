import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Appointment/Booking/Booking.js';


const bookings = [
    {
        id: 1,
        name: 'Cavity Protection',
        time: '11.00AM -12.00 PM',
        space: 5
    },
    {
        id: 2,
        name: 'Cavity Protection',
        time: '11.00AM -12.00 PM',
        space: 5
    },
    {
        id: 3,
        name: 'Cavity Protection',
        time: '11.00AM -12.00 PM',
        space: 5
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00AM -12.00 PM',
        space: 5
    },
    {
        id: 5,
        name: 'Cavity Protection',
        time: '06.00AM -7.00 PM',
        space: 5
    },
    {
        id: 6,
        name: 'Oral surgery',
        time: '07.00AM -08.00 PM',
        space: 10
    },
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', fontWeight: 400, mb: 2 }} >AvailableAppointments {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booking successfully!</Alert>}

            <Grid container spacing={2}>

                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }

            </Grid>
        </Container>

    );
};

export default AvailableAppointments;