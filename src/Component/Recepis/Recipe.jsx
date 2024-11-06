import PropTypes from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe }) => {
  const {
    recipe_id,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = recipe;
  console.log(ingredients);
  return (
    <div>
      <div className="border-2  rounded-xl py-5">
        <img className="mx-auto" src={recipe_image} alt="" />

        <div className="pt-5 px-10">
          <p className="font-bold pb-2">Id : {recipe_id}</p>
          <h4 className="text-xl font-bold">{recipe_name}</h4>
          <p className="pt-2 pb-5">{short_description}</p>
          <hr />
          <p className="text-xl font-bold pt-5 pb-2">Ingredients:5</p>
          <ul className=" list-disc  ml-5 text-black/40">
            {ingredients.map((item, index) => (
              <li key={index}> {item} </li>
            ))}
          </ul>
          <div className="pt-5 flex">
            <p className="flex">
              <CiClock2 className=" text-2xl pt-1 mr-2"></CiClock2>
              {preparing_time}
            </p>
            <p className="flex ml-5">
              <FaFire className="pt-1 text-2xl mr-2"></FaFire>
              <p>{calories}</p>
            </p>
          </div>
          <div className="pt-5">
            <button className="bg-[#0BE58A] py-2 px-3 font-bold rounded-md ">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
};

export default Recipe;
