import FoodItem from "./FoodItem";

export default function FoodList({foodData, setFoodId}) {
  return (
    <div>
      {foodData.map((foodItem) => (
        <FoodItem setFoodId={setFoodId} key={foodItem.id} foodItem={foodItem}/>
      ))}
    </div>
  );
}
