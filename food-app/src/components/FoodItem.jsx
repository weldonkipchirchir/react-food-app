import styles from './fooditem.module.css'
export default function FoodItem({ foodItem, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img src={foodItem.image} className={styles.itemImage}/>
      <div className={styles.itemContent}>

      <p className={styles.itemName}> {foodItem.title}</p>
      </div>
      <div className={styles.buttonContainer}>
      <button onClick={()=>{setFoodId(foodItem.id)}} className={styles.itemButton}>View Recipe</button>
      </div>
    </div>
  );
}
