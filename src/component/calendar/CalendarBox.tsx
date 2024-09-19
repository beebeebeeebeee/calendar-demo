import {Box, Stack, Typography} from "@mui/material";
import {Moment} from "moment";

type CalendarBoxProps = {
    date: Moment;
    text?: string;
}

export function CalendarBox(props: CalendarBoxProps) {
    const {date, text} = props

    let color = 'black'
    if (date.month() !== date.month()) {
        if (date.day() === 6 || date.day() === 0) {
            // gray red
            color = '#ffbaba'
        } else {
            color = 'gray'
        }
    } else if (date.day() === 6 || date.day() === 0) {
        color = 'red'
    }

    return <Stack sx={{
        width: '100%',
        height: '3rem',
        justifyContent: 'space-between',
    }}>
        <Typography sx={{
            color,
        }}>
            {date.date()}
        </Typography>
        <Box>
            {text != null ?
                <Box
                    sx={(theme) => ({
                        bgcolor: theme.palette.info.main,
                        color: theme.palette.info.contrastText,
                        borderRadius: "0.25rem",
                        // width: "100%",
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
                        {text}
                    </Typography>
                </Box> :
                ''
            }
        </Box>
    </Stack>
}