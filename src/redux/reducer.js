const initialState = {
  myFavorites: [],
  allCharacters: []
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD-FAV":
      let copy1 = [...state.myFavorites];
      copy1.push(payload);
      return {
        ...state,
        myFavorites: copy1,
        allCharacters: copy1
      };

    case "REMOVE-FAV":
      let copy2 = state.myFavorites.filter((char) => {
        return char.id !== Number(payload);
      });

      return {
        ...state,
        myFavorites: copy2
      };

    case "FILTER":
      let copy3 = state.allCharacters.filter((char) => {
        return char.gender === payload;
      });
      return {
        ...state,
        myFavorites: copy3,
      };

    case "ORDER":
      let copy4 = [...state.allCharacters];
      let order;
      if (payload === "A") {
        order = copy4.sort((a, b) => b.id - a.id);
      } else if (payload === "D") {
        order = copy4.sort((a, b) => a.id - b.id);
      } else {
        order = copy4;
      }
      return {
        ...state,
        allCharacters: order,
      };

    default:
      return state;
  }
};

export default rootReducer;
