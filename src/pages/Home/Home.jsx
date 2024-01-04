 
import Menu from "../Menu/Menu"
const Home = ({meals,categories}) => {
  return (
    <div>Home
<Menu  categories={categories} meals={meals} />
    </div>
  )
}

export default Home