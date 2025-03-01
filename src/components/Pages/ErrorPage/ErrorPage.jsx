import { useRouteError } from "react-router";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import RouteError from "./RouteError/RouteError";

export default function ErrorPage() {
  const error = useRouteError();

  const isCodeError = error?.status !== 404 && error instanceof Error;
  const errorMessage = isCodeError ? error.message : "";

  return (
    <>
      <Header />
      <RouteError isCodeError={isCodeError} errorMessage={errorMessage} />
      <Footer />
    </>
  );
}
