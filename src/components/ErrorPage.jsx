import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <div className="pb-4 text-7xl">404</div>
      <div className="text-3xl">Page Not Found</div>
      <Link
        to="/"
        className="my-8 rounded-full bg-black px-8 py-3 text-white transition-all duration-200 ease-in-out hover:bg-[#2c2c2c]"
      >
        Return to PORTFOLIO
      </Link>
    </section>
  );
};

export default ErrorPage;
