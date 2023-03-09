import "./styles.scss";
import { Button } from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="errorPageContainer">
        <h1>404</h1>
        <h2>Page not found</h2>

        <p>Desculpe, ocorreu um erro e a página não foi encontrada.</p>

        <Button
          style={{
            fontSize: "20px",
            height: "50px ",
          }}
          onClick={() => navigate("/")}
        >
          Página Principal
        </Button>
      </div>
      <Footer />
    </>
  );
};
export default ErrorPage;
