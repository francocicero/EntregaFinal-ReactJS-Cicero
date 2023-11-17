import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { ItemList } from "../itemsList/itemList";
import { useParams } from "react-router-dom";
import { Banner } from "../banner/banner";
import banner1 from "../../assets/banner1.png";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/FireBase/FireBaseConfing";

export function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setloading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });
  }, [categoryId]);

  return (
    <>
      <Banner img={banner1} />
      <div className="title">
        <h1>Productos {categoryId}</h1>
      </div>
      <div className="lista_grupo">
        <ItemList products={products} />
      </div>
    </>
  );
}
