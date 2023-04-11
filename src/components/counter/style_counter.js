export const style = {
  main: (state, context) => {
    if (state && context === "basket") {
      return {
        width: "28px",
        backgroundColor: "rgb(119 242 140)",
        height: "16px",
        borderRadius: "30%",
        marginTop: "15px",
        marginLeft: "5px",
        fontSize: "12px",
        fontWeight: "bolder",
        border: "1px solid",
        textAlign: "center",
      };
    }
    if (state && context === "favorite") {
      return {
        width: "28px",
        backgroundColor: "rgb(242 242 119)",
        height: "18px",
        borderRadius: "30%",
        marginTop: "15px",
        marginLeft: "5px",
        fontSize: "12px",
        fontWeight: "bolder",
        border: "1px solid",
        textAlign: "center",
      };
    }
  },
};
