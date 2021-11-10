import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

let events = [
  {
    title: 'Opening Ceremony',
    startDate: new Date(2021, 10, 6, 9, 0),
    endDate: new Date(2021, 10, 6, 10, 0),
    Event: 1,
    location: 'Room 2',
  },
  {
    title: 'Unity Workshop',
    startDate: new Date(2021, 10, 6, 10, 0),
    endDate: new Date(2021, 10, 6, 11, 0),
    Event: 4,
    location: 'Room 1',
  },
  {
    title: 'Tensorflow w/ Google',
    startDate: new Date(2021, 10, 6, 12, 30),
    endDate: new Date(2021, 10, 6, 13, 30),
    Event: 2,
    location: 'Room 3',
  },
  {
    title: 'Chander Dhall',
    startDate: new Date(2021, 10, 6, 14, 30),
    endDate: new Date(2021, 10, 6, 15, 30),
    Event: 3,
    location: 'Room 3',
  },
];

moment.locale('en');
const localizer = momentLocalizer(moment);

const CalendarComp = () => (
  <div style={{ height: 750, width: 800 }}>
    <Calendar
      events={events}
      views={['day']}
      step={30}
      defaultView="day"
      localizer={localizer}
      startAccessor="startDate"
      endAccessor="endDate"
      defaultDate={new Date(2021, 10, 6)}
    />
  </div>
);

export default CalendarComp;
