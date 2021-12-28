import styles from '../../styles/home.module.css'
import Image from 'next/image'

export default function Shop() {
    return (
        <section className={styles.shop}>
            <br />
            <h1 className={styles.titleBlack}><a href="#shop" style={{ color: "000" }}>Grab some merch</a></h1>
            <br />
            <ul className={styles.shopItems}>
                <li><Image src="/images/merch/black shirt.png" height="400" width="400" /></li>
                <li><Image src="/images/merch/white shirt.png" height="400" width="400" /></li>
            </ul>
        </section>
    );
}