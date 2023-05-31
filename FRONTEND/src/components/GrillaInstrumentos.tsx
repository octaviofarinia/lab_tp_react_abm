import { useEffect, useState } from "react";
import { deleteInstrumento, getInstrumentos } from "../utils/APIUtils";
import { Product } from "../types";
import { Link } from "react-router-dom";

const GrillaInstrumentos = () => {
  const [instrumentos, setInstrumentos] = useState<Product[]>([]);

  const handleDelete = async (id: string | number) => {
    await deleteInstrumento(id);
    getInstrumentos({ setter: setInstrumentos });
  };

  useEffect(() => {
    getInstrumentos({ setter: setInstrumentos });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Instrumento
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Marca
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Modelo
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Imagen
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Precio
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Costo Envio
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Cantidad Vendida
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Descripcion
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {instrumentos.map((product, index) => (
                  <tr className="border-b dark:border-neutral-500" key={index}>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {product.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.instrumento}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.marca}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.modelo}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.imagen}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.precio}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.costoEnvio}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.cantidadVendida}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.descripcion
                        ? product.descripcion.slice(0, 50) + "..."
                        : ""}
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/formulario/productos/${product.id}`}
                        className="inline-block mb-2 mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
                      >
                        Modificar
                      </Link>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="inline-block px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrillaInstrumentos;
