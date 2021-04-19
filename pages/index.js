import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import Layout, { siteTitle } from '../components/layout.js'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>Home | {siteTitle}</title>
            </Head>
            <section className={styles.about}>
                <br />
                <h1 className={styles.title}><a href="#about">About BRFitness</a></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc. Ut pharetra sit amet aliquam id diam maecenas ultricies. Neque egestas congue quisque egestas diam. Facilisis mauris sit amet massa vitae tortor condimentum. Non enim praesent elementum facilisis leo vel fringilla est. Pharetra diam sit amet nisl suscipit adipiscing. Quis viverra nibh cras pulvinar mattis nunc sed blandit. Enim sit amet venenatis urna cursus eget nunc. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Netus et malesuada fames ac turpis egestas sed tempus. Tellus orci ac auctor augue mauris. Eleifend mi in nulla posuere. Vel risus commodo viverra maecenas accumsan lacus. Tellus in hac habitasse platea. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Viverra maecenas accumsan lacus vel facilisis volutpat est. Augue ut lectus arcu bibendum. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut.
                </p>
            </section>

            <section className={styles.schedule}>
                <br />
                <h1 className={styles.title}><a href="#schedule">Schedule and appointment</a></h1>
                <br />
                <iframe className={styles.calendar}
                    src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=bTFpYzF2cWQ3aGZvOWNucjlsczlqNWNocm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D50000&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=1&amp;showTabs=1&amp;showCalendars=0&amp;showTz=0&amp;title=br/Fitness%20Schedule"
                    frameborder="0" scrolling="no"></iframe>
                <br />
                <button>Schedule Now</button>
            </section>

            <section className={styles.shop}>
                <br />
                <h1 className={styles.titleBlack}><a href="#shop" style={{ color: "000" }}>Grab some merch</a></h1>
                <br />
                <ul className={styles.shopItems}>
                    <li><Image src="/images/merch/black shirt.png" height="400" width="400" /></li>
                    <li><Image src="/images/merch/white shirt.png" height="400" width="400" /></li>
                </ul>
            </section>

            <section className={styles.contact}>
                <br />
                <a href="#contact"></a>
                <br />
                <h4 className={styles.contactLinks}>
                    <a href="mailto:br/ooke.ruesche@gmail.com">br/ooke.ruesche@gmail.com</a>
                    <a href="tel:3146025100">314.602.5100</a>
                    <a href="https://www.instagram.com/br/ookeruesche/" target="_blank">Instagram</a>
                </h4>
                <br /><br />
            </section>
        </Layout>
    )
}