import Navbar from './navbar.js'
import Footer from './footer.js'

import styles from '../styles/layout.module.css'

const Layout = ({ children }) => {

  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>
        { children } 
      </div>
      <Footer />
    </div>
  );
};

export default Layout
