import MenuItem from "../../components/MenuItem/MenuItem";
import styles from "./Menu.module.css";

const Menu = ({ meals, categories }) => {

//ask question about classname category-container

  return (
    <div className={styles.categoryContainer}>
      {categories.map((category,index) => {
        console.log(category)
        return (
          <div key={index}>
            {<h3>{category.strCategory}</h3> }
            <MenuItem meals={meals} />
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
