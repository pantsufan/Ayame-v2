import Link from "next/link";
const Nav = ({ children }) => {
  return (
    <div className="flex justify-centerr">
      <Link href="/">
        <button className="mx-auto bg-blue-600 hover:bg-blue-700 p-3 text-center rounded-xl text-blue-50">
          Home
        </button>
      </Link>
      <Link href="/search">
        <button className="mx-auto bg-blue-600 hover:bg-blue-700 p-3 text-center rounded-xl text-blue-50">
          Find
        </button>
      </Link>
      <Link href="/season">
        <button className="mx-auto bg-blue-600 hover:bg-blue-700 p-3 text-center rounded-xl text-blue-50">
          Season
        </button>
      </Link>
    </div>
  );
};

export default Nav;
