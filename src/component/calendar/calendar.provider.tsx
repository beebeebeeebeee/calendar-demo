import {useCallback, useMemo, useState} from "react";
import moment from "moment/moment";
import {CalendarContext} from "./calendar.context";
import {CalendarProviderValue} from "./type.ts";

export function CalendarProvider(props: { children: React.ReactNode }) {
    const [date, setDate] = useState<moment.Moment>(moment().utc().startOf('month'))

    const prevMonth = useCallback(() => {
        setDate(date.clone().subtract(1, 'month'))
    }, [date])

    const nextMonth = useCallback(() => {
        setDate(date.clone().add(1, 'month'))
    }, [date])

    const thisMonth = useCallback(() => {
        setDate(moment().utc().startOf('month'))
    }, [])

    const value: CalendarProviderValue = useMemo(() => ({
        date,
        setDate,
        prevMonth,
        nextMonth,
        thisMonth,
    }), [date])

    return <CalendarContext.Provider value={value}>
        {props.children}
    </CalendarContext.Provider>
}