import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation.js';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader.js';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments.js';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointments date={date}></AvailableAppointments>
        </div>
    );
};

export default Appointment;