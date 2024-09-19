import {createContext} from "react";
import {CalendarProviderValue} from "./type.ts";

export const CalendarContext = createContext<CalendarProviderValue | undefined>(undefined)
