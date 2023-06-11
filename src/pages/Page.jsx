import { useParams } from "react-router-dom";
import PageBody from "../components/PageBody";
import PageHero from "../components/PageHero";
import { pages } from "../features/Pages";
import { useEffect, useState } from "react";
const Page = () => {
  const parameter = useParams();
  const [data, setData] = useState({
    id: "404 ERR",
    title: "404 ERR - DATA NOT FOUND ERROR",
    subtitle:
      "The page you are looking for could not be found. Please refresh the page or make sure the address is correct",
    content: <></>,
  });
  useEffect(() => {
    const array = pages.find((item) => {
      return item.id === parameter.id;
    });
    if (array !== undefined) {
      setData(array);
    }
  }, [parameter.id]);
  return (
    <div className="">
      <PageHero {...data} />
      <PageBody {...data} />
    </div>
  );
};

export default Page;
