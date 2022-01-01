import styles from '../../styles/home.module.css'
import * as React from 'react';
import { Container, Typography, Button, TextField, Box, ThemeProvider } from '@mui/material';
import isWeekend from 'date-fns/isWeekend';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import theme from '../../public/theme'

export default function Schedule() {
    const [value, setValue] = React.useState(new Date());

    return (
        <Box my={10}>
            <Container>
                <Typography variant='h3' align='left' sx={{ color: 'white' }}>Schedule an appointment</Typography>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <ThemeProvider theme={theme}>
                        <Container>
                            <TextField
                                id="outlined-number"
                                label="Full Name"
                                type="text"
                                required
                            />

                            <TextField
                                id="outlined-number"
                                label="Email"
                                type="email"
                                required
                            />
                        </Container>

                    </ThemeProvider>

                    <Container maxWidth='sm'>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <StaticDatePicker
                                orientation="landscape"
                                openTo="day"
                                value={value}
                                shouldDisableDate={isWeekend}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                sx={{
                                    div: { color: 'white' },
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Container>
                </Box>
            </Container >
        </Box>

    );
}