import styles from '../../styles/home.module.css'
import { Container, Typography } from '@mui/material';

export default function Schedule() {
    return (
        // <section className={styles.schedule}>
        //     <br />
        //     <h1 className={styles.title}><a href="#schedule">Schedule and appointment</a></h1>
        //     <br />
        //     <iframe className={styles.calendar}
        //         src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=bTFpYzF2cWQ3aGZvOWNucjlsczlqNWNocm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D50000&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=1&amp;showTabs=1&amp;showCalendars=0&amp;showTz=0&amp;title=br/Fitness%20Schedule"
        //         frameborder="0" scrolling="no"></iframe>
        //     <br />
        //     <button>Schedule Now</button>
        // </section>
        <Container>
            <Typography variant='h3' align='left' sx={{ color: 'white' }}>Schedule an appointment</Typography>
        </Container>
    );
}