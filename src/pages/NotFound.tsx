import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404 - Not Found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="text-center max-w-lg">
        <svg
          className="mx-auto mb-6 text-red-500 animate-pulse"
          width="150"
          height="150"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 9l6 6m0-6l-6 6" />
          <circle cx="12" cy="12" r="10" />
        </svg>

        <h1 className="text-5xl font-extrabold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-2">Oops! Page not found.</p>
        <p className="text-sm text-gray-500 mb-4">
          The path <span className="font-mono text-blue-400">{location.pathname}</span> does not exist.
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-2 px-6 rounded-md shadow-lg"
        >
        Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;