import Head from 'next/head'
import { Col, Row } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>AIISHAII</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
            </Head>

            <Header/>
                <main>
                    {children}
                </main>
            <Footer/>
        </>
    )
}

export default Layout

