// import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import GlobalStyle from "./GlobalStyle";
import { Home } from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Criaturas from "./pages/Criaturas/Criaturas";
import { Runas } from "./pages/Runas/Runas";
import PR from "./pages/PlanoRunico/PR";
import { Equip } from "./pages/Equipamentos/Equip";
import Sets from "./pages/Sets/Sets";
import ListarPlano from "./components/ListarPlano/ListarPlano";

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
  {
    path: "/plano_runico",
    element: <PR />,
  },
  {
    path: "/equipamentos",
    element: <Equip />,
  },
  {
    path: "/sets",
    element: <Sets />,
  },
  {
    path: "/listar-plano",
    element: <ListarPlano />,
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
