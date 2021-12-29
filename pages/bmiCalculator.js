import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout.js'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
            {/* <Paper sx={{
                backgroundImage: 'url("https://picsum.photos/1920/300?grayscale")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                paddingTop: '64px'
            }}>
                <Container sx={{ height: '250px' }}>
                    <Typography align='left' variant='h2' sx={{ color: '#fff', lineHeight: '250px' }}>BMI Calculator</Typography>
                </Container>
            </Paper> */}
            <Container sx={{ marginTop: '104px', alignItems: 'center', justifyContent: 'center' }}>
                <Typography align='center' variant='h4' sx={{ color: '#fff' }}>Enter Your Details</Typography>
                <form onSubmit={calculateBMI}>
                    <TextField id="outlined-basic"
                        name='height'
                        label="Height"
                        variant="outlined"
                        type='text'
                        autoComplete='height'
                        required
                        sx={{
                            label: { color: 'white' },
                            fieldset: { borderColor: 'white' },
                            input: { color: 'white' },
                        }} />

                    <TextField id="outlined-basic"
                        name='weight'
                        label="Weight"
                        variant="outlined"
                        type='text'
                        autoComplete='weight'
                        required
                        sx={{
                            label: { color: 'white' },
                            fieldset: { borderColor: 'white' },
                            input: { color: 'white' },
                        }} />

                    <Button variant="contained" type='submit'>Submit</Button>
                </form>
            </Container>
        </Layout>
    );
};

