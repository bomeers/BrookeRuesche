import styles from '../styles/home.module.css'

export default function Footer() {
    return (
        <section className={styles.contact}>
            <br />
            <a href="#contact"></a>
            <br />
            <h4 className={styles.contactLinks}>
                <a href="mailto:brooke.ruesche@gmail.com">brooke.ruesche@gmail.com</a>
                <a href="tel:3146025100">314.602.5100</a>
                <a href="https://www.instagram.com/brookeruesche/" target="_blank">Instagram</a>
            </h4>
            <br /><br />
        </section>
    );
}