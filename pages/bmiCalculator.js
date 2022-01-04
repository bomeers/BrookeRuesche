import Head from 'next/head';
import React, { useState } from 'react';
import Layout, { siteTitle } from '../components/layout.js';
import { TextField, Typography, Button, Box, Grid, InputAdornment } from '@mui/material';

const defaultValues = {
  feet: '',
  inches: '',
  weight: '',
  bmi: '--',
};

export default function bmiCalculator() {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const calculateBMI = (event) => {
    event.preventDefault();
    const height = Number(formValues.feet) * 12 + Number(formValues.inches);
    let bmi = (Number(formValues.weight) * 703) / (height * height);
    bmi = String(bmi.toFixed(2)) === 'NaN' ? '--' : String(bmi.toFixed(2));
    setFormValues({ ...formValues, bmi });
    // return BMI
  };

  return (
    <Layout>
      <Head>
        <title>BMI Calculator | {siteTitle}</title>
      </Head>
      <Box my={20} textAlign='center'>
        <form onSubmit={calculateBMI}>
          <Grid container justifyContent='center' spacing={2} sx={{ width: '50%', mx: 'auto' }}>
            <Grid item xs={12} md={4}>
              <TextField
                name='feet'
                label='Height (feet)'
                type='number'
                value={formValues.feet}
                onChange={handleInputChange}
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position='start'>ft</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                name='inches'
                label='Height (inches)'
                type='number'
                value={formValues.inches}
                onChange={handleInputChange}
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position='start'>in</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                name='weight'
                label='Weight'
                type='number'
                value={formValues.weight}
                onChange={handleInputChange}
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position='start'>lbs</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' color='primary' type='submit' sx={{ my: 5 }}>
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h2'>BMI: {formValues.bmi}</Typography>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Layout>
  );
}
