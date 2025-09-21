import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <p>We're sorry, but the page you were looking for doesn't exist.</p>
      {error && <p>{error.data}</p>}

      <NavLink to="/"><button className="p-2 mt-90 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
        Go back to Home
        </button></NavLink>
    
    
    </div>
  );
};
