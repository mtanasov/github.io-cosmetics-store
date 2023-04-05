export const style = {
  style_headerOpen: (state, block) => {
    if (state && block === "btn_catalogue") {
      console.log(block);
      return {
        display: "flex",
        opacity: "1",
        width: "100vw",
        height: "500px",
        maxHeight: "400px",
        backgroundColor: "white",
        position: "absolute",
        top: "45px",
        left: "0",
      };
    } else if (
      (state && block === "btn_topMenu") ||
      (state && block === "btn_bottomMenu")
    ) {
      console.log(block);
      return {
        display: "flex",
        opacity: "1",
        width: "100vw",
        height: "50px",
        backgroundColor: "pink",
        position: "absolute",
        top: "45px",
        left: "0",
      };
    } else {
      return {
        display: "none",
        opacity: "0",
      };
    }
  },
  style_img: (block) => {
    if (block === "btn_catalogue") {
      return {
        width: "240px",
        height: "323px",
      };
    } else if (block === "btn_topMenu" || block === "btn_bottomMenu") {
      return {
        width: "50px",
        height: "50px",
        backgroundColor: "gray",
        display: "none",
      };
    }
  },
  ul: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: " 0 10px",
  },
  li: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  a: {
    padding: "8px",
  },
  a_All: {
    display: "block",
    backgroundColor: "#e7d4d0",
    padding: "105px 60px",
    borderRadius: "50%",
    color: "black",
  },
};
