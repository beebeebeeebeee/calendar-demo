import {useContext} from "react";
import {CalendarProviderValue} from "./type.ts";
import {CalendarContext} from "./calendar.context.tsx";

export function useCalendar(): CalendarProviderValue {
    const value = useContext(CalendarContext)

    if (!value) {
        throw new Error('useCalendar must be used within a CalendarProvider')
    }

    return value
}