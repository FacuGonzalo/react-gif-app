import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([
    "Rick and Morty"
  ]);

  const handleAddCategory = (inputValue) => {
    if (categories.includes(inputValue)) return;
    setCategories([inputValue, ...categories]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory onNewCategory={handleAddCategory} />
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
