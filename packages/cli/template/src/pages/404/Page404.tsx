import { Link } from "react-router";

const Page404 = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-primary">
      <h1 className="text-9xl font-extrabold text-white tracking-widest drop-shadow-2xl">
        404
      </h1>
      <div className="bg-primary border-2 shadow-lg px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <Link
          to={"/"}
          className="relative inline-block text-sm font-medium text-white group active:text-primary focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-white group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            Go Home
          </span>
        </Link>
      </button>
    </main>
  );
};

export default Page404;
