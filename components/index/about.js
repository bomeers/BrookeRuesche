import styles from '../../styles/home.module.css'
import { Container, Typography, ThemeProvider, Box } from '@mui/material';
import theme from '../../public/theme'

export default function About() {
    return (
        <Box my={10}>
            <ThemeProvider theme={theme}>
                <Container>
                    <Typography variant='h3' align='left' sx={{ color: 'white' }}>About BRFitness</Typography>
                    <Typography variant='p' align='left' sx={{ color: 'white' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc. Ut pharetra sit amet aliquam id diam maecenas ultricies.
                    </Typography>
                </Container>
            </ThemeProvider>
        </Box>
    );
}