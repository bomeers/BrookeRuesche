import Head from 'next/head'
import React, { useState } from "react";
import Layout, { siteTitle } from '../components/layout.js'
import { TextField, Button, Box, Grid, InputAdornment } from '@mui/material'

const defaultValues = {
    feet: "",
    inches: "",
    weight: ""
};

export default function bmiCalculator() {

    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value, });
    };

    const calculateBMI = (event) => {
        event.preventDefault();
        var height = +formValues.feet * 12 + +formValues.inches;
        var BMI = (+formValues.weight * 703) / (height * height);
        console.log(`BMI Result: ${BMI}`);
        // return BMI
    }

    return (
        <Layout>
            <Head>
                <title>BMI Calculator | {siteTitle}</title>
            </Head>
            <Box my={20}>
                <form onSubmit={calculateBMI}>
                    <Grid container alignItems="center" justifyContent="center" direction="column">
                        <Grid item>
                            <TextField
                                name="feet"
                                label="Height (feet)"
                                type="number"
                                value={formValues.feet}
                                onChange={handleInputChange}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">ft</InputAdornment>,
                                }}
                                sx={{ mx: 1 }}
                            />
                            <TextField
                                name="inches"
                                label="Height (inches)"
                                type="number"
                                value={formValues.inches}
                                onChange={handleInputChange}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">in</InputAdornment>,
                                }}
                                sx={{ mx: 1 }}
                            />
                            <TextField
                                name="weight"
                                label="Weight"
                                type="number"
                                value={formValues.weight}
                                onChange={handleInputChange}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">lbs</InputAdornment>,
                                }}
                                sx={{ mx: 1 }}
                            />
                        </Grid>
                        <Button variant="contained" color="primary" type="submit" sx={{ my: 5 }}>
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Box >
        </Layout >
    );
};

