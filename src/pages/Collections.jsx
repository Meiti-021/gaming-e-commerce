import { useParams } from "react-router-dom";
import CollectionsHero from "../components/CollectionsHero";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CollectionsBody from "../components/CollectionsBody";

const Collections = () => {
  const { type } = useParams();
  const { products } = useSelector((store) => store.cart);
  const [collection, setCollection] = useState(products);

  return (
    <>
      <CollectionsHero title={type} count={collection.length} />
      <CollectionsBody collections={collection} />
    </>
  );
};

export default Collections;
