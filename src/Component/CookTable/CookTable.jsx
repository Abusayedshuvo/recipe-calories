import { useContext, useEffect, useState } from "react";
import { CookiesContext, ReceiptsContext } from "../Recepis/Recepis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

const CookTable = ({ handleCurrentlyCook }) => {
  const [recepis] = useContext(ReceiptsContext);
  const [cookies] = useContext(CookiesContext);
  const [wantCookList, setWantCookList] = useState([]);

  useEffect(() => {
    const wantCook = recepis.filter((item) => cookies.includes(item.recipe_id));
    setWantCookList(wantCook);

    const duplicates = cookies.filter(
      (item, index) => cookies.indexOf(item) !== index
    );
    if (duplicates.length > 0) {
      toast.warning("Duplicate numbers found");
    }
  }, [recepis, cookies]);

  return (
    <div>
      <ToastContainer />

      <div className=" py-8">
        <p className="text-2xl font-semibold text-center">
          Want to cook: {wantCookList.length}
        </p>
        <hr className="my-3 mx-10" />
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {wantCookList.map((item, index) => (
                <tr key={item.recipe_id}>
                  <th>{index + 1}</th>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparing_time}</td>
                  <td>{item.calories}</td>
                  <td>
                    <button
                      onClick={() => handleCurrentlyCook(item.recipe_id, event)}
                      className="bg-[#0BE58A] py-3 px-6 font-bold rounded-full "
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

CookTable.propTypes = {
  handleCurrentlyCook: PropTypes.func,
};

export default CookTable;
