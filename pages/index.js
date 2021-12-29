import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout.js'
import About from '../components/home/about';
import Schedule from '../components/home/schedule'
import Shop from '../components/home/shop'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>Home | {siteTitle}</title>
            </Head>
            <About />
            <Schedule />
            <Shop />
        </Layout>
    )
}