import styles from '../../styles/home.module.css'
import Image from 'next/image'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Paper, Grid } from '@mui/material';

export default function Shop() {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Container sx={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item>xs=8</Item>
                </Grid>
                {/* <Grid item xs={4}>
                    <Item>xs=4</Item>
                    <Image layout='fill' src='../../public/images/merch/white shirt.png' />
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                    <Image layout='fill' src='../../public/images/merch/black shirt.png' />
                </Grid> */}
            </Grid>
        </Container>
    );
}