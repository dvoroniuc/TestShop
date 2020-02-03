export const select = (id) => {
    return {
      type: "SELECT",
      payload: id
    };
  };
  
  export const reset = () => {
    return {
      type: "RESET"
    };
  };
  