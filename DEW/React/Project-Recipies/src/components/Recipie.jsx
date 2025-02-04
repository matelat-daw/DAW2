import React, { useEffect, useState } from 'react';
import RecipeService from '../services/RecipeService';

const Recipe = () => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const recipes = await RecipeService.getRecipes();
                const ingredientsList = recipes.map(recipe => recipe.ingredients).flat();
                setIngredients(ingredientsList);
            } catch (error) {
                console.error('Error fetching ingredients:', error);
            }
        };

        fetchIngredients();
    }, []);

    return (
        <div>
            <h1>Ingredients</h1>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recipe;