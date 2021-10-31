import React from "react";
import { Image, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import { toast } from "react-toastify";
import { addProductCart } from "../../../api/cart";
import "./ListProducts.scss";

export function ListProducts(props) {
  const { products } = props;

  const addCart = (product) => {
    addProductCart(product.id);
    toast.success(`${product.title} añadido al carrito`);
  };

  return (
    <div className="list-products-client">
      {map(products, (product) => (
        <div key={product.id} className="list-products-client__product">
          <div>
            <Image src={product.image} />
            <span>{product.title}</span>
          </div>
          <Button primary icon onClick={() => addCart(product)}>
            <Icon name="add" />
          </Button>
        </div>
      ))}
    </div>
  );
}
