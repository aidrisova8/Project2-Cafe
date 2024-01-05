 
import Menu from "../../components/Menu/Menu"
const Home = ({categories,addOrder}) => {
  return (
    <div>Home
<Menu  categories={categories} addOrder={addOrder} />
    </div>
  )
}

export default Home