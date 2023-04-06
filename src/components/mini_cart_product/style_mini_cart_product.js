export const style = {
  blockProduct: {
    width: "280px",
    height: "410px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "280px",
    height: "280px",
  },
  productName: {
    textAlign: "center",
    width: "300px",
    height: "40px",
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
  buyProduct: {
    height: "25px",
    width: "25px",
    backgroundImage: "url(src/assets/img/shopping-bag.png)",
    backgroundSize: "30px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    // backgroundColor: "rgb(139, 224, 148)",
    padding: "6px",
    borderRadius: "50%",
    marginLeft: "25px",
    border: "2px solid",
  },
  favorite: (param) => {
    return {
      height: "25px",
      width: "25px",
      backgroundImage: "url(src/assets/img/star.png)",
      backgroundSize: "25px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      padding: "6px",
      borderRadius: "50%",
      border: "2px solid",
      backgroundColor: param ? "rgb(254 255 118)" : "transparent",
    };
  },
};
