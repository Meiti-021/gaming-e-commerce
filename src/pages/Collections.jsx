import { useParams } from "react-router-dom";
import CollectionsHero from "../components/CollectionsHero";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CollectionsBody from "../components/CollectionsBody";

const Collections = () => {
  const { type } = useParams();
  const { products } = useSelector((store) => store.cart);
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    if (type.toLowerCase() !== "all") {
      const data = products.filter((item) => {
        return item.type.toLowerCase() === type.toLowerCase();
      });
      setCollection(data);
    } else {
      setCollection(products);
    }
  }, [type, products]);

  return (
    <>
      <CollectionsHero title={type} count={collection.length} />
      <CollectionsBody collections={collection} type={type} />
    </>
  );
};

export default Collections;
