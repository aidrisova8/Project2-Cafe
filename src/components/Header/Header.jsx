import  styles from "./Header.module.css"
import { Link } from "react-router-dom"
const Header = () => {
  return (
     <>
     <header className={styles.header}>
        <div>
            <span className={styles.logo}>Harmony Café and Spa</span>
        </div>
        <Link to='/'>
        <div>Menu</div>
        </Link>
        <div>Cart</div>
        <div className={styles.banner}> </div>
     </header>
     </>
  )
}

export default Header