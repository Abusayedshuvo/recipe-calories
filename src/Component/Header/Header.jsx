import { IoPersonCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 py-5 xl:px-32 px-5">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="font-semibold">
                <a>Home</a>
              </li>
              <li className="font-semibold">
                <a>Recipes</a>
              </li>
              <li className="font-semibold">
                <a>About</a>
              </li>
              <li className="font-semibold">
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-semibold">
              <a>Home</a>
            </li>

            <li className="font-semibold">
              <a>Recipes</a>
            </li>
            <li className="font-semibold">
              <a>About</a>
            </li>
            <li className="font-semibold">
              <a className="" href="#">
                Search
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <input
            className=" bg-gray-100 px-5 py-2 rounded-full focus-visible:border-none outline-0"
            type="text"
            placeholder="Search"
          />
          <a className="ml-5 text-2xl bg-[#0BE58A] p-1 rounded-full" href="#">
            <IoPersonCircleOutline />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
