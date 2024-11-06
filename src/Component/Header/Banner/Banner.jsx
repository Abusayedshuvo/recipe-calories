import "./style.css";

const Banner = () => {
  return (
    <div className="xl:px-32 px-5 ">
      <div
        className={`bg-banner bg-cover bg-center h-screen rounded-xl items-center justify-center text-white`}
      >
        <div className="absolute w-2/3 text-center mx-auto">
          <h1 className=" text-5xl font-bold    !leading-[1.3]">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="py-5">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
          <div className="pt-5">
            <button className="bg-[#0BE58A] py-3 px-5 font-bold text-[16px] text-black rounded-full mr-5">
              Explore Now
            </button>
            <button className="bg-transparent border-2 border-white text-white py-3 px-5 font-bold text-[16px] rounded-full ">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
