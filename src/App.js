// import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import GlobalStyle from "./GlobalStyle";
import { Home } from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Criaturas from "./pages/Criaturas/Criaturas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/criaturas",
    element: <Criaturas />,
  },
]);

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />

      <RouterProvider router={router} />
      {/* <Home /> */}
    </div>
  );
}

export default App;
