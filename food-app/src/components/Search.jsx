import { useEffect } from "react";
import { useState } from "react";
import styles from './search.module.css'

export default function Search({foodData, setFoodData}) {
  const [query, setQuery] = useState("Pizza");

  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const apiKey = import.meta.env.VITE_API_KEY;


  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
      const data = await response.json();
        setFoodData(data.results)
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
      className={styles.input}
        value={query}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
