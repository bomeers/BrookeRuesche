import styles from '../../styles/home.module.css'
import * as React from 'react';
import { Container, Typography, Button } from '@mui/material';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

import { ThemeProvider } from '@mui/material/styles';

export default function Schedule() {
    const [value, setValue] = React.useState(new Date());

    return (
        <Container sx={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <Typography variant='h3' align='left' sx={{ color: 'white' }}>Schedule an appointment</Typography>
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
        </Container >
    );
}