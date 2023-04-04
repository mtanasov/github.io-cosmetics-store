export const style = {
  style_headerOpen: (state1) => {
    if (state1) {
      return {
        display: "inline-block",
        opacity: "1",
        width: "100vw",
        maxHeight: "400px",
        backgroundColor: "white",
        position: "absolute",
        top: "50px",
      };
    } else {
      return {
        display: "none",
        opacity: "0",
      };
    }
  },
  ul: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "10px",
  },
  li: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "10px",
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
