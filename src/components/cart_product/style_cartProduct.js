const fs24 = "24px";
const fs13 = "13px";
const fs14 = "14px";

export const style = {
  conteiner: {
    display: "flex",
    paddingTop: "7vh",
    paddingBottom: "7vh",
    width: "90vw",
    // backgroundColor: "#f7e7c6",
    flexDirection: "column",
    alignItems: "center",
  },
  wrapper: {
    padding: "60px 0",
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  blockInfo: {
    // backgroundColor: "green",
    width: "22vw",
  },
  name: { fontSize: fs24, padding: "20px 30px" },
  category: {
    fontSize: fs14,
    fontWeight: "500",
    paddingLeft: "30px",
    color: "#999",
  },
  itemBlockInfo: { fontWeight: "600", fontSize: fs14 },
  valueBlockInfo: { fontWeight: "400", fontSize: fs14 },

  blockGallery: {
    // backgroundColor: "lime",
    width: "30vw",
    maxWidth: "640px",
  },
  img: {
    maxHeight: "480px",
    maxWidth: "640px",
    verticalAlign: "middle",
  },

  control: {
    display: "flex",
    width: "30vw",
    maxWidth: "320px",
    height: "400px",
    // backgroundColor: "pink",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    fontSize: fs24,
    padding: "10px",
  },
  selectList: {
    padding: "10px",
    width: "160px",
  },
  art: {
    fontSize: fs14,
    padding: "15px 0 5px 0",
  },
  btnBuy: (inBasket) => {
    return {
      backgroundColor: inBasket ? "transparent" : "rgb(119, 242, 140)",
      width: "35px",
      height: "35px",
      backgroundImage: "url(/src/assets/img/shopping-bag.png)",
      backgroundPosition: "center center",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      fontWeight: 600,
      textTransform: "uppercase",
      borderRadius: "50%",
      border: "2px solid",
    };
  },
  btnFavorite: (inFavorite) => {
    return {
      backgroundColor: inFavorite ? "transparent" : "rgb(242, 242, 119)",
      width: "35px",
      height: "35px",
      backgroundImage: "url(/src/assets/img/star.png)",
      backgroundPosition: "center center",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      fontWeight: 600,
      textTransform: "uppercase",
      borderRadius: "50%",
      border: "2px solid",
    };
  },
  freePost: {
    display: "flex",
    fontSize: "13px",
    width: "180px",
    height: "30px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
    paddingTop: "15px",
  },
  iconPost: {
    height: "25px",
    width: "25px",
    backgroundImage: "url('/src/assets/img/truck-delivery.png')",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },
  iconGuarantee: {
    height: "25px",
    width: "25px",
    backgroundImage: "url('/src/assets/img/garantiya.png')",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },
  description: {
    width: "80vw",
    paddingBottom: "40px",
    borderBottom: "2px solid",
  },
};
