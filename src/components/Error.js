import { useRouteError } from "react-router";
const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!!!! 404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <h3>{error?.statusText || error?.message}</h3>
    </div>
  );
};

export default Error;
