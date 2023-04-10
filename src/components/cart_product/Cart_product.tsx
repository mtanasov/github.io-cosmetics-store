import { useParams } from "react-router-dom";

export default () => {
  // const params = useParams();
  const { urlLink } = useParams();
  return (
    <>
      <h1>Cart Product</h1>
      <div>this cart of product</div>
    </>
  );
};
