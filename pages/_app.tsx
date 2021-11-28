import 'styles/styles.css'
import Navbar from 'components/Navbar'

// eslint-disable-next-line
function MyApp({ Component, pageProps }) {
    return <>

        <Navbar />
        <Component {...pageProps} />
    </>
}

export default MyApp
