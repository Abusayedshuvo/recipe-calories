import { useContext, useEffect, useState } from "react";
import { ReceiptsContext } from "../Recepis/Recepis";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

const CurrentlyCookingTable = ({ currentlyCook }) => {
  const [recepis] = useContext(ReceiptsContext);
  const [wantCookList, setWantCookList] = useState([]);

  useEffect(() => {
    const wantCook = recepis.filter((item) =>
      currentlyCook.includes(item.recipe_id)
    );
    setWantCookList(wantCook);
  }, [recepis, currentlyCook]);
  return (
    <div>
      <ToastContainer />

      <div className=" ">
        <p className="text-2xl font-semibold text-center">
          Currently cooking: {wantCookList.length}
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
                </tr>
              ))}

              <tr className="font-medium">
                <td></td>
                <td></td>
                <td>Total Time = 45 minutes</td>
                <td>Total Calories = 1050 calories</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p></p>
      </div>
    </div>
  );
};

CurrentlyCookingTable.propTypes = {
  currentlyCook: PropTypes.array,
};

export default CurrentlyCookingTable;
