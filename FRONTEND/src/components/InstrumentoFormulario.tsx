import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getInstrumento,
  updateInstrumento,
  createInstrumento,
} from "../utils/APIUtils";
import { Product } from "../types";

const InstrumentoFormulario = () => {
  const { id } = useParams<string>();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product>({
    id: "",
    instrumento: "",
    marca: "",
    modelo: "",
    imagen: "",
    precio: "",
    costoEnvio: "",
    cantidadVendida: "",
    descripcion: "",
  });

  useEffect(() => {
    if (id !== "0") {
      getInstrumento({ Id: id, setter: setProduct });
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id !== "0") {
      await updateInstrumento(product);
    } else {
      await createInstrumento(product);
    }
    navigate("/grilla/productos");
  };

  return (
    <>
      <h1 className="max-w-lg mx-auto text-xl my-4">Formulario Instrumentos</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-4">
        <input
          name="instrumento"
          value={product.instrumento}
          onChange={handleChange}
          placeholder="Instrumento"
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />

        <input
          name="marca"
          value={product.marca}
          onChange={handleChange}
          placeholder="Marca"
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />

        <input
          name="modelo"
          value={product.modelo}
          onChange={handleChange}
          placeholder="Modelo"
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />

        <input
          name="imagen"
          value={product.imagen}
          onChange={handleChange}
          placeholder="Imagen"
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />

        <input
          name="precio"
          value={product.precio}
          onChange={handleChange}
          placeholder="Precio"
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />

        <input
          name="costoEnvio"
          value={product.costoEnvio}
          onChange={handleChange}
          placeholder="Costo de Envío"
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />

        <input
          name="cantidadVendida"
          value={product.cantidadVendida}
          onChange={handleChange}
          placeholder="Cantidad Vendida"
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />

        <textarea
          name="descripcion"
          value={product.descripcion}
          onChange={handleChange}
          placeholder="Descripcion"
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />

        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default InstrumentoFormulario;
