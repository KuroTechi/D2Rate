import { useRouteError } from "react-router";
import RouteError from "./RouteError/RouteError";

export default function ErrorPage({ error: propError }) {
  const routeError = useRouteError();
  const error = propError || routeError;
  const isCodeError = error?.status !== 404 && error instanceof Error;
  const errorMessage = isCodeError ? error.message : "";

  return <RouteError isCodeError={isCodeError} errorMessage={errorMessage} />;
}
