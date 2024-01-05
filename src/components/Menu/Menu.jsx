import MenuItem from "../MenuItem/MenuItem";
import styles from "./Menu.module.css";
 


const Menu = ({ categories , addOrder}) => {
 
 

 
  
 
  return (
    <div >
      {categories.map((category,index) => {
       // console.log(category)
        return (
          <div key={index}>
            {<h3>{category.strCategory}</h3> }
            <div className={styles.categoryContainer}>
            <MenuItem category={category.strCategory} addOrder={addOrder} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
