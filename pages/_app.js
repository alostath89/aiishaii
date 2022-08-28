import Layout from '../layout/Layout'
import "../styles/antd.less";
import "../styles/style.scss";


function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
  )
}

export default MyApp
