import { wrapper } from '../store'
import '/styles.css';
function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
