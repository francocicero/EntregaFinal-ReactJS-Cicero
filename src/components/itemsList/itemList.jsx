import { Item } from "../productos/productos";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  return (
    <div class="lista_grupo">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};
