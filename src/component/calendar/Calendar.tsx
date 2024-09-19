import {Box, Button, Stack, Typography} from "@mui/material";
import {useCalendar} from "./calendar.hook.tsx";
import {CalendarBox} from "./CalendarBox.tsx";
import {Moment} from "moment";

const Weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const Months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

type CalendarProps = {
    onDateTextUpdate?: (date: Moment) => string | undefined;
    onWeekTextUpdate?: (from: Moment, to: Moment) => string | undefined;
}

export function Calendar(props: CalendarProps) {
    const {onDateTextUpdate, onWeekTextUpdate} = props

    const {date, prevMonth, nextMonth, thisMonth} = useCalendar()

    const weekdayOfFirstDay = date.clone().startOf('month').days() > 0 ? date.clone().startOf('month').days() - 1 : 6
    const weekInMonth = Math.ceil((date.clone().endOf('month').date() + weekdayOfFirstDay) / 7)

    return (
        <>
            <Stack
                sx={{
                    justifyContent: "flex-end",
                    alignItems: "stretch",
                    textAlign: 'center',
                }}
                spacing={1.2}
            >
                <Stack direction='row' justifyContent='space-between'>
                    <Button onClick={prevMonth}>
                        prev
                    </Button>
                    <Button onClick={thisMonth}>
                        {Months[date.month()]} {date.year()}
                    </Button>
                    <Button onClick={nextMonth}>
                        next
                    </Button>
                </Stack>
                <Stack direction='column' spacing={0.6}>
                    <Stack direction='row' spacing={0.1}>
                        {
                            Weekdays.map(day => (
                                <Box sx={{
                                    width: '100%',
                                }}>
                                    {day}
                                </Box>
                            ))
                        }
                        <Box
                            sx={(theme) => ({
                                width: '4.5%',
                                writingMode: "vertical-rl",
                                textOrientation: "mixed",
                                bgcolor: theme.palette.background.default,
                                borderRadius: "0.25rem",
                                p: "0.2rem",
                                mx: "0.1rem"
                            })}
                        >
                            <Typography
                                sx={(theme) => ({
                                    fontSize: "0.74rem",
                                    color: theme.palette.background.default,
                                })}
                            >
                                -
                            </Typography>
                        </Box>
                    </Stack>
                    {
                        Array.from({length: weekInMonth}).map((_, i) => (
                            <Stack direction='row' spacing={0.1}>
                                {
                                    Array.from({length: 7}).map((_, j) => {
                                            const day = i * 7 + j
                                            const d = date.clone().date(day - weekdayOfFirstDay + 1)

                                            return <CalendarBox date={d} text={onDateTextUpdate?.(d)}/>
                                        }
                                    )
                                }
                                <Box
                                    sx={(theme) => ({
                                        width: '4.5%',
                                        writingMode: "vertical-rl",
                                        textOrientation: "mixed",
                                        bgcolor: theme.palette.info.main,
                                        color: theme.palette.info.contrastText,
                                        borderRadius: "0.25rem",
                                        p: "0.2rem",
                                        mx: "0.1rem"
                                    })}
                                >
                                    <Typography
                                        sx={(theme) => ({
                                            fontSize: "0.74rem",
                                            color: theme.palette.secondary.contrastText,
                                        })}
                                    >
                                        {onWeekTextUpdate?.(
                                            date.clone().date(i * 7 + 1 - weekdayOfFirstDay),
                                            date.clone().date(i * 7 + 7 - weekdayOfFirstDay,
                                            ))}
                                    </Typography>
                                </Box>
                            </Stack>
                        ))
                    }
                </Stack>
            </Stack>
        </>
    )
}
