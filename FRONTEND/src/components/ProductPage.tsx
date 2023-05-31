import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../types";
import styles from "./Product.module.css";
import { useEffect, useState } from "react";
import { fetchImage } from "../utils/APIUtils";

interface Props {
  product: Product;
}

const ProductPage = ({ product }: Props) => {
  const [imagen, setImagen] = useState(null);
  fetchImage({product,setImagen});
  
    
  return (
    <div className={styles.container}>
      <div className={styles.detailContainer}>
        <div className={styles.productImageContainer}>
          <img
            src={imagen}
            alt={product.instrumento}
            className={styles.productImage}
          />
        </div>

        <div className={styles.productDescription}>
          <p>Descripcion:</p>
          <p>{product.descripcion}</p>
        </div>
        <div className={styles.productSellData}>
          <p className={styles.selledProducts}>
            {product.cantidadVendida + " vendidos"}
          </p>
          <h2>{product.instrumento}</h2>
          <p className={styles.productPrice}>${product.precio}</p>
          <p>{"Modelo: " + product.modelo}</p>
          <p>{"Marca: " + product.marca}</p>
          <p>Costo de Envío</p>
          {product.costoEnvio === "G" ? (
            <p className={styles.freeShipment}>
              <FontAwesomeIcon icon={faTruck} style={{ color: "#3ab64a" }} />
              Envio Gratis
            </p>
          ) : (
            <p className={styles.payShipment}>
              Costo envio al interior de Argentina: $ {product.costoEnvio}
            </p>
          )}
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.btnAgregar}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
