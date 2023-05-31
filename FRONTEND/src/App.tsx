import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductPageRoute from "./components/ProductPageRoute";
import Header from "./pages/Header";
import Location from "./components/Location";
import Home from "./pages/Main";
import GrillaInstrumentos from "./components/GrillaInstrumentos";
import InstrumentoFormulario from "./components/InstrumentoFormulario";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductList />} />
        <Route path="/grilla/productos" element={<GrillaInstrumentos />} />
        <Route
          path="/formulario/productos/:id"
          element={<InstrumentoFormulario />}
        />
        <Route path="/product/:productId" element={<ProductPageRoute />} />
        <Route path="/donde_estamos" element={<Location />}></Route>
      </Routes>
    </div>
  );
}

export default App;
