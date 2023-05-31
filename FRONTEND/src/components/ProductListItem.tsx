import { Product } from "../types";
import styles from "./Product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchImage } from "../utils/APIUtils";

interface Props {
  product: Product;
}

const ProductListItem = ({ product }: Props) => {
  const [imagen, setImagen] = useState(null);
  fetchImage({product,setImagen});


  return (
    <div className={styles.productListItem}>
      <img src={imagen} alt={product.instrumento} />
      <div>
        <h3>{product.instrumento}</h3>
        <p className={styles.listItemPrice}>{`$ ${product.precio}`}</p>
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
        <p>{product.cantidadVendida + " vendidos"}</p>
      </div>
    </div>
  );
};

export default ProductListItem;
