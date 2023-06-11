import { useParams } from "react-router-dom";
import CollectionsHero from "../components/CollectionsHero";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CollectionsBody from "../components/CollectionsBody";
import { useLocation } from "react-router-dom";
const Collections = () => {
  const { type } = useParams();
  const { products } = useSelector((store) => store.cart);
  const [collection, setCollection] = useState([]);
  const location = useLocation();
  useEffect(() => {
    if (type === "search" && location.search.split("?")[1] !== "") {
      const parts = location.search.split("?");
      const data = products.filter((item) =>
        item.name.toLowerCase().includes(parts[1].toLocaleLowerCase())
      );
      data ? setCollection(data) : undefined;
    } else if (type.toLowerCase() !== "all") {
      const data = products.filter((item) => {
        return item.type.toLowerCase() === type.toLowerCase();
      });
      setCollection(data);
    } else {
      setCollection(products);
    }
  }, [type, products, location.search]);

  return (
    <>
      <CollectionsHero title={type} count={collection.length} />
      <CollectionsBody collections={collection} type={type} />
    </>
  );
};

export default Collections;
