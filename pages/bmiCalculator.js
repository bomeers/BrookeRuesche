import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout.js'
import { Typography, Container, TextField, Button, Box, ThemeProvider, InputAdornment } from '@mui/material'
import theme from '../public/theme'

export default function bmiCalculator() {

    const calculateBMI = async event => {
        event.preventDefault()
        event.target.weight.value = weight;
        event.target.height.value = height;
        height = height * .025;
        weight = weight * .45;
        var BMI = (weight / Math.pow(height, 2));
        return BMI
    }

    return (
        <Layout>
            <Head>
                <title>BMI Calculator | {siteTitle}</title>
            </Head>
            <Box my={20}>
                <ThemeProvider theme={theme}>
                    <Typography
                        align='center'
                        variant='h4'
                        sx={{
                            color: '#fff',
                            marginTop: '104px',
                            marginBottom: '50px'
                        }}
                    >BMI Calculator</Typography>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        display="flex"
                        alignItems="center"
                        justifyContent="center">

                        <TextField
                            label="Height (Feet)"
                            id="outlined-start-adornment"
                            type='number'
                            sx={{ marginX: 2 }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">ft</InputAdornment>,
                            }}
                        />

                        <TextField
                            label="Height (Feet)"
                            id="outlined-start-adornment"
                            type='number'
                            sx={{ marginX: 2 }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">in</InputAdornment>,
                            }}
                        />

                        <TextField
                            label="Weight"
                            id="outlined-start-adornment"
                            type='number'
                            sx={{ marginX: 2 }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">lbs</InputAdornment>,
                            }}
                        />
                        <Button variant="contained" type='submit'>Submit</Button>
                    </Box>
                </ThemeProvider>
            </Box >
        </Layout >
    );
};

