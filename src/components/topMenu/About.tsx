import { dataCompany } from "../../data/data-company";
import { style } from "./style__about";

export default () => {
  const about = dataCompany;
  return (
    <div style={style.container}>
      <h1>
        <div>Про компанію </div>
      </h1>
      <div>
        <b>{about.name}</b> {about.history}
      </div>
      <div>{about.brands}</div>
      <div>{about.nicheBrands}</div>
      <div>{about.staff}</div>
      <div>{about.certificates}</div>
      <div>{about.description}</div>
      <div>
        {about.gallery.map((photo: "") => {
          return <img src={photo} alt="oops..." width="1460" height="760" />;
        })}
      </div>
    </div>
  );
};
