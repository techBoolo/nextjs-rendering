import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = (props) => {
  return (
    <div className={styles.nav}>
      <div></div>
      <div className={styles.nav__links}>
        <Link href='/ssg'><a>ssg</a></Link>
        <Link href='/ssr'><a>ssr</a></Link>
        <Link href='/isr'><a>isr</a></Link>
        <Link href='/csr'><a>csr</a></Link>
        <Link href='/about'><a>about</a></Link>
      </div>
      <div></div>
    </div>
  )
};

export default Navbar
