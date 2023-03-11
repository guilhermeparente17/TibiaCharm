// import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import GlobalStyle from "./GlobalStyle";
import { Home } from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Criaturas from "./pages/Criaturas/Criaturas";
import { Runas } from "./pages/Runas/Runas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/criaturas",
    element: <Criaturas />,
  },
  {
    path: "/runas",
    element: <Runas />,
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
