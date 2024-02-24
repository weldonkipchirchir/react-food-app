import styles from "./fooddetail.module.css";
import { useEffect, useState } from "react";
export default function FoodDetail({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [foodDetails, setFoodDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFood() {
      try {
        const response = await fetch(`${URL}?apiKey=${apiKey}`);;
        const data = await response.json();
        setFoodDetails(data);
      } catch (error) {
        setError("Error fetching food details");
      } finally {
        setLoading(false);
      }
    }
    fetchFood();
  }, [foodId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}>Food Details {foodDetails.title}</h1>
        <img
          className={styles.recipeImage}
          src={foodDetails.image}
          alt={foodDetails.title}
        />
        <div className={styles.recipeDetails}>
          <span>
            <strong>🧭 {foodDetails.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>🍽️ {foodDetails.servings} Servings</strong>
          </span>
          <span>
            <strong>
              {foodDetails.vegeterian ? "🥕 Vegeterian" : "🥩 Non-vegeterian"}
            </strong>
          </span>
          <strong>
            <span>{foodDetails.vegan ? "🍊 Vegan" : "🍌 Non-vegan"}</span>
          </strong>
        </div>
        <div>
          <span>$ {foodDetails.pricePerServing / 100} Per Serving</span>
        </div>
      </div>
      <div>
        <h2>Ingredients</h2>
        {foodDetails.extendedIngredients.map((item, index) => (
          <div key={index}>
            <img
              src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
              alt={item.name}
            />
            <h3>{item.name}</h3>
            <h3>{item.amount} {item.unit}</h3>
          </div>
        ))}

        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {loading ? (
              <p>Loading...</p>
            ) : (
              foodDetails.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
