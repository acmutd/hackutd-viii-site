import * as React from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  MonthView,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  TodayButton,
  Resources,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles, Theme, createStyles } from '@material-ui/core';
import { indigo, blue, teal, purple, red, orange } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { WithStyles } from '@material-ui/styles';
import classNames from 'clsx';

const appointments = [
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

const resources = [
  {
    fieldName: 'location',
    title: 'Location',
    instances: [
      { id: 'Room 1', text: 'Room 1', color: indigo },
      { id: 'Room 2', text: 'Room 2', color: blue },
      { id: 'Room 3', text: 'Room 3', color: teal },
    ],
  },
  {
    fieldName: 'Event',
    title: 'Type',
    instances: [
      { id: 1, text: 'Event', color: red },
      { id: 2, text: 'Sponsor', color: blue },
      { id: 3, text: 'Tech Talk', color: indigo },
      { id: 4, text: 'Workshop', color: purple },
      { id: 5, text: 'Social', color: orange },
    ],
  },
];

const styles = ({ palette }: Theme) =>
  createStyles({
    appointment: {
      borderRadius: 0,
      borderBottom: 0,
    },

    EventTypeAppointment: {
      borderLeft: `4px solid ${red[500]}`,
      backgroundColor: `${red[500]}`,
    },
    SponsorTypeAppointment: {
      borderLeft: `4px solid ${blue[500]}`,
      backgroundColor: `${blue[500]}`,
    },
    TechTalkTypeAppointment: {
      borderLeft: `4px solid ${indigo[500]}`,
      backgroundColor: `${indigo[500]}`,
    },
    WorkshopTypeAppointment: {
      borderLeft: `4px solid ${purple[500]}`,
      backgroundColor: `${purple[500]}`,
    },
    SocialTypeAppointment: {
      borderLeft: `4px solid ${orange[500]}`,
      backgroundColor: `4px solid ${orange[500]}`,
    },
    weekEndCell: {
      backgroundColor: fade(palette.action.disabledBackground, 0.04),
      '&:hover': {
        backgroundColor: fade(palette.action.disabledBackground, 0.04),
      },
      '&:focus': {
        backgroundColor: fade(palette.action.disabledBackground, 0.04),
      },
    },
    weekEndDayScaleCell: {
      backgroundColor: fade(palette.action.disabledBackground, 0.06),
    },
    text: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },

    content: {
      opacity: 0.7,
    },
    container: {
      width: '100%',
      lineHeight: 1.2,
      height: '100%',
    },
  });

type AppointmentProps = Appointments.AppointmentProps & WithStyles<typeof styles>;
type AppointmentContentProps = Appointments.AppointmentContentProps & WithStyles<typeof styles>;
type TimeTableCellProps = MonthView.TimeTableCellProps & WithStyles<typeof styles>;
type DayScaleCellProps = MonthView.DayScaleCellProps & WithStyles<typeof styles>;

const isWeekEnd = (date: Date): boolean => date.getDay() === 0 || date.getDay() === 6;
const defaultCurrentDate = new Date(2021, 10, 13, 9, 0);

const DayScaleCell = withStyles(styles)(
  ({ startDate, classes, ...restProps }: DayScaleCellProps) => (
    <MonthView.DayScaleCell
      className={classNames({
        [classes.weekEndDayScaleCell]: isWeekEnd(startDate),
      })}
      startDate={startDate}
      {...restProps}
    />
  ),
);

const TimeTableCell = withStyles(styles)(
  ({ startDate, classes, ...restProps }: TimeTableCellProps) => (
    <MonthView.TimeTableCell
      className={classNames({
        [classes.weekEndCell]: isWeekEnd(startDate),
      })}
      startDate={startDate}
      {...restProps}
    />
  ),
);

const Appointment = withStyles(styles)(({ classes, data, ...restProps }: AppointmentProps) => (
  <Appointments.Appointment
    {...restProps}
    className={classNames({
      [classes.EventTypeAppointment]: data.Event === 1,
      [classes.SponsorTypeAppointment]: data.Event === 2,
      [classes.TechTalkTypeAppointment]: data.Event === 3,
      [classes.WorkshopTypeAppointment]: data.Event === 4,
      [classes.SocialTypeAppointment]: data.Event === 5,
      [classes.appointment]: true,
    })}
    data={data}
  />
));

// #FOLD_BLOCK
const AppointmentContent = withStyles(styles, { name: 'AppointmentContent' })(
  ({
    classes,
    data,
    ...restProps
  }: // #FOLD_BLOCK
  AppointmentContentProps) => {
    let Event = 'Event';
    if (data.Event === 2) Event = 'Sponsor';
    if (data.Event === 3) Event = 'Tech Talk';
    if (data.Event === 4) Event = 'Workshop';
    if (data.Event === 5) Event = 'Social';
    return (
      <Appointments.AppointmentContent {...restProps} data={data}>
        <div className={classes.container}>
          <div className={classes.text}>{data.title}</div>
          <div className={classNames(classes.text, classes.content)}>{`Type: ${Event}`}</div>
          <div className={classNames(classes.text, classes.content)}>
            {`Location: ${data.location}`}
          </div>
        </div>
      </Appointments.AppointmentContent>
    );
  },
);

export default function Calendar() {
  return (
    <Paper>
      <Scheduler data={appointments}>
        <ViewState defaultCurrentDate={defaultCurrentDate} />

        <DayView startDayHour={8} endDayHour={24} intervalCount={2} />

        <Appointments
          appointmentComponent={Appointment}
          appointmentContentComponent={AppointmentContent}
        />
        <Resources data={resources} />

        <AppointmentTooltip showCloseButton />
        <Toolbar />
        <DateNavigator />
        <ViewSwitcher />
        <TodayButton />
      </Scheduler>
    </Paper>
  );
}
