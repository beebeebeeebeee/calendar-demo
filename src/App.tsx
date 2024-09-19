import {Calendar} from "./component/calendar";
import {useCallback} from "react";
import {Moment} from "moment";

export function App() {
    const onDateTextUpdate = useCallback((date: Moment): string => {
       return '10km'
    }, [])

    const onWeekTextUpdate = useCallback((from: Moment, to: Moment) => {
        return '10km'
    }, [])

    return <Calendar onDateTextUpdate={onDateTextUpdate} onWeekTextUpdate={onWeekTextUpdate}/>
}