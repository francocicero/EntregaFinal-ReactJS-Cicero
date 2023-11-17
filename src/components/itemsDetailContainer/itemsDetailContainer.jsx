import { useEffect, useState } from "react";
import "./itemDetailContainer.css";
import { useParams } from "react-router-dom";
import { ItemsDetail } from "../itemDetail/itemsDetail";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/FireBase/FireBaseConfing";

export const ItemsDetailContainer = () => {
  const [products, setProducts] = useState(null);
  const [loading, setloading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setloading(true);

    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productsAdapted = { id: response.id, ...data };
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });
  }, [itemId]);

  return (
    <div className="detail_container">
      {loading ? (
        <div className="spinner">
          <p>Loading</p>
        </div>
      ) : (
        <ItemsDetail {...products} />
      )}
    </div>
  );
};
