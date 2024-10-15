import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error">
      <h1>Page not finished</h1>
      <p>We are working on it</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
