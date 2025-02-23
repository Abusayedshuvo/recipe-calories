import { createContext, useEffect, useState } from "react";
import Recipe from "./Recipe";
import CookTable from "../CookTable/CookTable";
import CurrentlyCookingTable from "../CurrentlyCookingTable/CurrentlyCookingTable";

export const ReceiptsContext = createContext([]);
export const CookiesContext = createContext([]);

const Service = () => {
  const [cookies, setCookies] = useState([]);
  const [recepis, setRecepis] = useState([]);
  const [currentlyCook, setCurrentlyCook] = useState([]);
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecepis(data));
  }, []);

  const handleCurrentlyCook = (id, event) => {
    setCurrentlyCook((prevCookies) => [...prevCookies, id]);
    event.target.parentNode.parentNode.classList.add("hidden");
  };
  return (
    <div className="my-10 py-10 xl:px-32 px-5 ">
      <div className="text-center w-full lg:w-2/3 mx-auto">
        <h2 className="text-3xl font-bold">Our Recipes</h2>
        <p className="pt-5">
          Discover simple, step-by-step recipes for every occasion, perfect for
          both seasoned cooks and beginners looking to bring something special
          to the table.
        </p>
      </div>
      <CookiesContext.Provider value={[cookies, setCookies]}>
        <ReceiptsContext.Provider value={[recepis, setRecepis]}>
          <div className="grid  grid-cols-12 gap-6 pt-20">
            <div className="col-span-12 lg:col-span-7">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {recepis.map((recipe) => (
                  <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="border rounded-2xl py-8">
                <CookTable
                  handleCurrentlyCook={handleCurrentlyCook}
                ></CookTable>
                <CurrentlyCookingTable
                  currentlyCook={currentlyCook}
                ></CurrentlyCookingTable>
              </div>
            </div>
          </div>
        </ReceiptsContext.Provider>
      </CookiesContext.Provider>
    </div>
  );
};

export default Service;
