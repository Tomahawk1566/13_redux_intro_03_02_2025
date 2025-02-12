import { useDispatch, useSelector } from "react-redux";
import { addIngredient,deleteAllIngredients } from "../ReduxRTK/sandwichSlice";
import { RootState } from "../ReduxRTK/storeRTK";

const Sandwich = () => {
  const ingredients = useSelector(
    (state: RootState) => state.sandwich.ingredients
  );
  const dispatch = useDispatch();
  return (
    <div>
      <p>Ingredients: {ingredients.join(", ")} </p>
      <button
        onClick={() => dispatch(addIngredient('bread'))}
      >
        Add bread
      </button>
      <button
        onClick={() => dispatch(addIngredient('cheese'))}
      >
        Add cheese
      </button>
      <button
        onClick={() => dispatch(addIngredient('salami'))}
      >
        Add salami
      </button>
      <button
        onClick={() => dispatch(addIngredient('tomato'))}
      >
        Add tomato
      </button>
      <button onClick={() => dispatch(deleteAllIngredients())}>
        Delete all ingredients
      </button>
    </div>
  );
};

export default Sandwich;
