import moment from "moment";

export type CalendarProviderValue = {
    date: moment.Moment
    setDate: (date: moment.Moment) => void
    prevMonth: () => void
    nextMonth: () => void
    thisMonth: () => void
}