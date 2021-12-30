import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout.js'
import { Typography, Container, TextField, Button, Box } from '@mui/material'
import { width } from '@mui/material/node_modules/@mui/system'

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
                    id="outlined-number"
                    label="Height (Feet)"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    id="outlined-number"
                    label="Height (Inches)"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="contained" type='submit'>Submit</Button>
            </Box>
        </Layout>
    );
};

