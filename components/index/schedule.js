import styles from '../../styles/home.module.css'
import * as React from 'react';
import { Container, Typography, Button, TextField, Box, Grid } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import isWeekend from 'date-fns/isWeekend';

export default function Schedule() {
    const [value, setValue] = React.useState(new Date());

    return (
        <Container>
            <Typography variant='h3' align='left' sx={{ color: 'white' }}>Schedule an appointment</Typography>
            <form>
                <Grid container direction="row" alignItems="center" justifyContent="space-evenly" spacing={2}>
                    <Grid item>
                        <div>
                            <TextField
                                name="name"
                                label="Full Name"
                                type="text"
                            // value={formValues.feet}
                            // onChange={handleInputChange}
                            />
                        </div>
                        <br />
                        <div>
                            <TextField
                                name="email"
                                label="Email"
                                type="email"
                            // value={formValues.inches}
                            // onChange={handleInputChange}
                            />
                        </div>

                    </Grid>
                    <Grid item>
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
                    </Grid>
                </Grid>
            </form>
        </Container >
    );
}