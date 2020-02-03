const selectedReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT":
      return{
        ...state,
        id: action.payload.id,
        price: action.payload.price,
        name: action.payload.name
      };
    case "RESET":
      return (state = []);
    default:
      return state;
  }
};

export default selectedReducer;
