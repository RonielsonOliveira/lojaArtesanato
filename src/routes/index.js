import { Route, Routes } from "react-router-dom";
import Contato from "../pages/Contato";
import Home from "../pages/Home";
import ProdutoDetalhe from "../pages/ProdutosDetalhe";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/contato" element={<Contato />} />
      <Route path="/produto/:id" element={<ProdutoDetalhe />} />
    </Routes>
  );
}
