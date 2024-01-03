import  styles from "./Header.module.css"

const Header = () => {
  return (
     <>
     <header className={styles.header}>
        <div>
            <span className={styles.logo}>Harmony Café and Spa</span>
        </div>
        <div className={styles.banner}> </div>
     </header>
     </>
  )
}

export default Header