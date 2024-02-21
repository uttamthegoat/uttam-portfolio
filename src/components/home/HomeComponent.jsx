import { Link } from "react-router-dom";
import { headerData } from "../../data/headerData";

const HomeComponent = () => {
  return (
    <div className="relative w-full flex">
      {/* image */}
      <div className="w-[400px] h-[400px] absolute rounded-full">
        <img
          src={headerData.image}
          alt="profileImage"
          className="rounded-full"
        />
      </div>
      {/* left */}
      <div className="w-full md:w-[40%]">hello</div>
      {/* right */}
      <div className="w-full md:w-[60%] bg-black h-[100vh] flex flex-col md:flex-row justify-center items-center text-white">
        <div className="text-white w-6/12">
          <h1 className="text-gray-400 text-3xl font-semibold mb-2">
            {headerData.title}
          </h1>
          <p className="text-white text-6xl font-bold mb-5">
            {headerData.name}
          </p>
          <p
            className="text-gray-300 font-bold"
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            {headerData.desciption}
          </p>
          <div className="flex justify-between mt-7">
            <a
              href={headerData.resumePdf}
              download="resume"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-white border-4 rounded-full border-green-200 px-5 py-3 font-semibold text-lg w-[160px] hover:bg-green-200 hover:text-black"
            >
              Download CV
            </a>
            <Link
              to={"/contact"}
              className="cursor-pointer text-black border-4 rounded-full border-green-200 bg-green-200 px-4 py-3 font-semibold text-xl w-[160px] text-center hover:bg-black hover:text-green-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
