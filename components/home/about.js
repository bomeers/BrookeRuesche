import styles from '../../styles/home.module.css'
import { Container, Typography } from '@mui/material';

export default function About() {
    return (
        // <section className={styles.about}>
        //     <br />
        //     <h1 className={styles.title}><a href="#about">About BRFitness</a></h1>
        //     <p>
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc. Ut pharetra sit amet aliquam id diam maecenas ultricies.             </p>
        // </section>

        <Container>
            <Typography variant='h3' align='left' sx={{ color: 'white' }}>Schedule an appointment</Typography>
            <Typography variant='p' align='left' sx={{ color: 'white' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc. Ut pharetra sit amet aliquam id diam maecenas ultricies.
            </Typography>
        </Container>
    );
}