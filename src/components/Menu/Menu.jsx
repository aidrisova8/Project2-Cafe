import MenuItem from "../MenuItem/MenuItem";
import styles from "./Menu.module.css";
 


const Menu = ({ categories}) => {
 

 
  return (
    <div className={styles.foodWrapper}>
      {categories.map((category,index) => {
       // console.log(category)
        return (
          <div key={index} className={styles.foodList}>
            {<h3>{category.strCategory}</h3> }
            <div className={styles.foodContainer}>
            <MenuItem category={category.strCategory} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
