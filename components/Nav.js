import Link from "next/link";
const Nav = ({ children }) => {
  return (
    <div className="flex justify-centerr bg-blue-300 p-4 m-4 rounded-xl">
      <Link href="/">
        <button className="md:w-48 w-24 mx-auto bg-blue-900 hover:bg-blue-700 p-3 text-center rounded-xl text-white font-semibold border-solid border-4 border-blue-400">
          Home
        </button>
      </Link>
      <Link href="/search">
        <button className="md:w-48 w-24 mx-auto bg-blue-900 hover:bg-blue-700 p-3 text-center rounded-xl text-white font-semibold border-solid border-4 border-blue-400">
          Find
        </button>
      </Link>
      <Link href="/season">
        <button className="md:w-48 w-24 mx-auto bg-blue-900 hover:bg-blue-700 p-3 text-center rounded-xl text-white font-semibold border-solid border-4 border-blue-400">
          Season
        </button>
      </Link>
    </div>
  );
};

export default Nav;
