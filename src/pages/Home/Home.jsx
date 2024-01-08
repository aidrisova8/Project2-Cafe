 import styles from "./Home.module.css"
import Menu from "../../components/Menu/Menu"
const Home = ({categories}) => {
  return (
    <div className={styles.homeWrapper}> 
    <div className={styles.presentation}></div>
<Menu  categories={categories}  />
    </div>
  )
}

export default Home