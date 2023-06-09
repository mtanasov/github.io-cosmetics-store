export const style = {
  blockProduct: {
    width: "280px",
    height: "410px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "30px",
  },
  image: {
    width: "280px",
    height: "280px",
    border: "1px solid",
  },
  productName: {
    textAlign: "center",
    width: "280px",
    // height: "40px",
    fontSize: "14px",
  },
  noName: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  productPrice: {
    fontSize: "22px",
    fontWeight: 600,
    fontFamily: "monospace",
    paddingLeft: "20px",
  },
  buyProduct: (param) => {
    return {
      height: "35px",
      width: "35px",
      backgroundImage: "url(src/assets/img/shopping-bag.png)",
      backgroundSize: "30px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundColor: " rgb(119 242 140)",
      backgroundColor: param ? "rgb(119 242 140)" : "transparent",
      padding: "6px",
      borderRadius: "50%",
      marginLeft: "25px",
      border: "2px solid",
    };
  },
  favorite: (param) => {
    return {
      height: "35px",
      width: "35px",
      backgroundImage: "url(src/assets/img/star.png)",
      backgroundSize: "25px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      padding: "6px",
      borderRadius: "50%",
      border: "2px solid",
      backgroundColor: param ? "rgb(242 242 119)" : "transparent",
      // backgroundColor: "rgb(242 242 119)",
    };
  },
};
