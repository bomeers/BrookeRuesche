import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout.js'
import About from '../components/index/about';
import Schedule from '../components/index/schedule';
import Shop from '../components/index/shop';

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