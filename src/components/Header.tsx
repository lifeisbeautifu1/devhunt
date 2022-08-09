import header from '../images/header.avif';

const Header = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center px-8 xl:px-28 py-20 gap-12 md:gap-6">
      <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start text-center md:text-left gap-4 ">
        <h1 className="text-6xl font-[800] mt-0 md:mt-16">
          Welcome to <span className="text-indigo-600">Dev Hunt</span>
        </h1>
        <p className="text-xl text-gray-500">
          Check out some of these more recent projects submitted by our
          community or sign up to submit your own awesome project.
        </p>
        <button className="rounded shadow bg-indigo-600 text-white py-4 px-8 font-semibold hover:bg-indigo-700 transition duration-200">
          Get Started
        </button>
      </div>
      <div className="w-full h-full md:w-1/2">
        <img
          src={header}
          alt="dev hunt"
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Header;
