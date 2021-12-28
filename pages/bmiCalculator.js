import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout.js'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField';


export default function bmiCalculator() {
    return (
        <Layout bmiCalculator>
            <Head>
                <title>BMI Calculator | {siteTitle}</title>
            </Head>
            <Paper sx={{
                backgroundImage: 'url("https://picsum.photos/1920/300?grayscale")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                paddingTop: '64px'
            }}>
                <Container sx={{ height: '250px' }}>
                    <Typography align='left' variant='h2' sx={{ color: '#fff', lineHeight: '250px' }}>BMI Calculator</Typography>
                </Container>
            </Paper>
            <Container sx={{ paddingTop: '50px', alignItems: 'center', justifyContent: 'center' }}>
                <Typography align='center' variant='h4' sx={{ color: '#fff' }}>Enter Your Details</Typography>
                <form>
                    <TextField id="outlined-basic" label="Height" variant="outlined" />
                    <TextField id="outlined-basic" label="Weight" variant="outlined" />
                </form>
            </Container>
        </Layout>
    );
};

function calculateBMI(weight, height) {
    weight = weight * .45;
    height = height * .025;
    var BMI = (weight / Math.pow(height, 2));
    return BMI
}