import PropTypes from "prop-types";
import { useContext } from "react";
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { CookiesContext } from "./Recepis";

const Recipe = ({ recipe }) => {
  const [cookies, setCookies] = useContext(CookiesContext);
  const {
    recipe_id,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = recipe;

  return (
    <div>
      <div className="border-2  rounded-xl lg:pt-5 pb-5 ">
        <img className="mx-auto" src={recipe_image} alt="" />

        <div className="pt-5 px-10">
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
            <button
              onClick={() =>
                setCookies((prevCookies) => [...prevCookies, recipe_id])
              }
              className="bg-[#0BE58A] py-3 px-6 font-bold rounded-full "
            >
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
  handleId: PropTypes.func,
};

export default Recipe;
