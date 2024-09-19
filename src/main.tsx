import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {CalendarProvider} from './component/calendar'
import {Container} from "@mui/material";
import {App} from "./App.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Container>
            <CalendarProvider>
                <App/>
            </CalendarProvider>
        </Container>
    </StrictMode>,
)
