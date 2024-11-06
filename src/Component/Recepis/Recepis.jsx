import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Service = () => {
  const [recepis, setRecepis] = useState([]);
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecepis(data));
  }, []);

  return (
    <div className="my-10 py-10 xl:px-32 px-5 ">
      <div className="text-center w-2/3 mx-auto">
        <h2 className="text-3xl font-bold">Our Recipes</h2>
        <p className="pt-5">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus <br /> pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>
      <div className="grid grid-cols-12 pt-20">
        <div className="col-span-8">
          <div className="grid grid-cols-2 gap-5">
            {recepis.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe}></Recipe>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
