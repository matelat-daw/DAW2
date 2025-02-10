import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecetas } from '../services/Service';

const Details = () => {
    const { id } = useParams();
    const [ingredients, setIngredients] = useState([]);
    const [receta, setName] = useState([]);

    useEffect(() => {
        if (id)
        {
            const fetchIngredients = async () => {
                const recetas = await getRecetas();
                const recetaId = recetas.find((receta) => receta.id === parseInt(id));
                setName(recetaId.name);
                if (receta)
                {
                    const ingredientsList = recetaId.ingredients.map(recipe => recipe).flat();
                    setIngredients(ingredientsList);
                }
                else
                {
                    console.error('Receta no Encontrada.');
                }
            };
            fetchIngredients();
        }
    }, [id]);

    return (
        <div>
            <h1>Ingredientes de: {receta}</h1>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
};

export default Details;