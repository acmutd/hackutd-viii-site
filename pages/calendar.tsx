import React from 'react';
import PropTypes from 'prop-types';

import * as dates from 'date-arithmetic';
import { Calendar, momentLocalizer, Views, Navigate } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import TimeGrid from 'react-big-calendar/lib/TimeGrid';

let events = [
  //example events
  {
    title: 'Opening Ceremony',
    startDate: new Date(2021, 10, 12, 9, 0),
    endDate: new Date(2021, 10, 12, 10, 0),
    Event: 1,
    location: 'Room 2',
  },
  {
    title: 'Unity Workshop',
    startDate: new Date(2021, 10, 12, 10, 0),
    endDate: new Date(2021, 10, 12, 11, 0),
    Event: 4,
    location: 'Room 1',
  },
  {
    title: 'Tensorflow w/ Google',
    startDate: new Date(2021, 10, 12, 12, 30),
    endDate: new Date(2021, 10, 12, 13, 30),
    Event: 2,
    location: 'Room 3',
  },
  {
    title: 'Chander Dhall',
    startDate: new Date(2021, 10, 12, 14, 30),
    endDate: new Date(2021, 10, 12, 15, 30),
    Event: 3,
    location: 'Room 3',
  },
];

moment.locale('en');
const localizer = momentLocalizer(moment);

class WeekendView extends React.Component {
  render() {
    let {
      date,
      localizer,
      min = localizer.startOf(new Date(), 'day'),
      max = localizer.endOf(new Date(), 'day'),
      scrollToTime = localizer.startOf(new Date(), 'day'),
    } = this.props;
    let range = WeekendView.range(date, { localizer });

    return (
      <TimeGrid
        {...this.props}
        range={range}
        eventOffset={15}
        localizer={localizer}
        min={min}
        max={max}
        scrollToTime={scrollToTime}
      />
    );
  }
}

WeekendView.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  localizer: PropTypes.any,
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
  scrollToTime: PropTypes.instanceOf(Date),
};

WeekendView.range = (date, { localizer }) => {
  let start = date;
  let end = dates.add(start, 1, 'day');

  let current = start;
  let range = [];

  while (localizer.lte(current, end, 'day')) {
    range.push(current);
    current = localizer.add(current, 1, 'day');
  }

  return range;
};

WeekendView.navigate = (date, action, { localizer }) => {
  return localizer.add(date, 0, 'day');
};

WeekendView.title = (date) => {
  return `HackUTD Schedule:`;
};

const Toolbar = () => {
  // empty
  return <div className="scheduleTitle">Schedule</div>;
};

const CalendarComp = () => (
  <>
    <div className="self-center w-3/4 h-2/6">
      <Calendar
        events={events}
        localizer={localizer}
        views={{ week: WeekendView }}
        defaultView={Views.WEEK}
        step={30}
        startAccessor="startDate"
        endAccessor="endDate"
        defaultDate={new Date(2021, 10, 12)}
        components={{
          toolbar: Toolbar,
        }}
      />
    </div>
  </>
);

export default CalendarComp;
